import React, { useState } from "react";
import "./extra.css";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };
  function handleChangePW(event) {
    setUserData({ ...userData, password: event.target.value });
  }

  /**
   * @description Handle login and redirect to homepage
   */
  const handleLoginClick = async () => {
    try {
      setLoading(true);
      const api = "https://dummyjson.com/auth/login";

      // const response = axios.post(api, {
      //   username: userData?.email,
      //   password: userData?.password,
      // });

      const response = await axios.post(api, {
        username: "kminchelle",
        password: "0lelplR",
      });

      const { data = {}, status } = response || {};

      if (status == 200 || status == 202) {
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
            value={userData?.email}
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
            value={userData?.password}
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
              userData?.email.length < 6 || userData?.password.length < 6
            }
          >
            Log in
          </Button>
        </div>
        {(userData?.email.length < 6 || userData?.password.length < 6) && (
          <p style={{ color: "red" }}>
            Please Enter valid
            {userData?.email.length < 6 ? " Email" : " Password"}
          </p>
        )}
      </form>
    </React.Fragment>
  );
}
export default Login;
