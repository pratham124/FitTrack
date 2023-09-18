import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../assets/images/logo.svg";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <img src={Logo} alt="FitTrack " className="logo" />
        <FormRow type="text" name="name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <FormRow type="text" name="height" labelText="height (cm)" />
        <FormRow type="text" name="weight" labelText="weight (lbs)" />
        <button type="submit" className="btn btn-block">
          Register
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
