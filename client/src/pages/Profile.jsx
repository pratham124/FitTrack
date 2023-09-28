import React from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form } from "react-router-dom";
import FormRow from "../components/FormRow";

const Profile = () => {
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">Welcome Back!</h4>
        <div className="form-center">
          <div className="quote">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, at
            illum tempora quasi est doloribus vel. Consequatur nihil cupiditate
            possimus voluptates optio, maiores, porro molestiae, distinctio
            accusantium soluta dignissimos natus.
          </div>
          <div className="info">
            <FormRow
              type="text"
              name="name"
              labelText="Name"
              defaultValue="Pratham"
              readOnly={true}
            />
            <FormRow
              type="text"
              name="email"
              labelText="Email"
              defaultValue="sitoula@ualberta.ca"
              readOnly={true}
            />
            <FormRow type="text" name="height" labelText="Height (cm)" />
            <div className="btn-container">
              <button className="btn btn-block" type="submit">
                Update
              </button>
              <button className="btn-block delete-btn" type="button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
