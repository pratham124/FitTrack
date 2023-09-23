import React from "react";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import { useState, createContext, useContext } from "react";
import { customFetch } from "../utils/util";

const dashboardContext = createContext();

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

export const useDashboardContext = () => useContext(dashboardContext);

const Dashboard = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useLoaderData();

  const toggleSidebar = () => {
    setShowSidebar((current) => !current);
  };

  const logout = async () => {
    try {
      await customFetch.get("/auth/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logout,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </dashboardContext.Provider>
  );
};

export default Dashboard;
