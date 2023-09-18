import React from "react";
import Logo from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <img src={Logo} alt="FitTrack " className="logo" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block">
          Login
        </button>
        <p>
          Don't have an account?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
