import React, { useState } from "react";
import "./extra.css";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  function handleChangePW(event) {
    setFormData({ ...formData, password: event.target.value });
  }

  /**
   * @description Handle login and redirect to homepage
   */
  const handleLoginClick = async () => {
    try {
      setLoading(true);
      const api = "https://dummyjson.com/auth/login";

      // const response = axios.post(api, {
      //   username: formData?.email,
      //   password:formData?.password,
      // });

      const response = await axios.post(api, {
        username: "kminchelle",
        password: "0lelplR",
      });

      const { data = {}, status } = response || {};

      if (status == 200) {
        localStorage.setItem("userData", JSON.stringify(data));
        setLoading(false);
        navigate("/home-page");
      }
    } catch (err) {
      console.error("Error in login API", err);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {isLoading && <Loader />}

      <form className="main-form">
        <h3 id="h3">Login-Page</h3>
        <div className="form-field">
          <input
            type="email"
            placeholder="Email / Username"
            id="email"
            // required
            name="email"
            value={formData?.email}
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div className="form-field">
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
            onChange={(e) => handleChangePW(e)}
            value={formData?.password}
            name="password"
          />
        </div>
        <div className="form-field">
          <Button
            onClick={handleLoginClick}
            className="btn btn-1"
            type="button"
            id="loginBtn"
            title="This is title for checking"
            variant="secondary"
            disabled={
              formData?.email.length < 6 || formData?.password.length < 6
            }
          >
            Log in
          </Button>
        </div>
        {(formData?.email.length < 6 || formData?.password.length < 6) && (
          <p style={{ color: "red" }}>
            Please Enter valid
            {formData?.email.length < 6 ? " Email" : " Password"}
          </p>
        )}
      </form>
    </React.Fragment>
  );
}
export default Login;
