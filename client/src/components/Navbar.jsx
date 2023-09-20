import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "../assets/images/logo.svg";
import { useDashboardContext } from "../pages/Dashboard";
import { FaAlignLeft } from "react-icons/fa";
import LogoutContainer from "./LogoutContainer";

const Navbar = () => {
  const { toggleSidebar, user } = useDashboardContext();
  const firstName = user.name.split(" ")[0];

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <img src={Logo} alt="logo" className="logo" />
          <h4 className="logo-text">{firstName}</h4>
        </div>
        <div className="btn-container">
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
