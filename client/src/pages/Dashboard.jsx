import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import { useState, createContext, useContext } from "react";

const dashboardContext = createContext();

export const useDashboardContext = () => useContext(dashboardContext);

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const user = { name: "John Doe" };

  const toggleSidebar = () => {
    setShowSidebar((current) => !current);
  };

  const logout = async () => {};

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
