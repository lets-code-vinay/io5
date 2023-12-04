import React from "react";
import "./style.css";

function Login() {
  const [isLoginClicked, setLoginClick] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e) => {
    console.log("email clicking", e.target.value);
    setUserData({ ...userData, email: e.target.value });
  };

  function handleChangePW(event) {
    setUserData({ ...userData, password: event.target.value });
  }

  const handleLoginClick = () => {
    console.log(userData?.email, userData?.password);
    setLoginClick(true);
  };

  return (
    <React.Fragment>
      <form>
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
          <button
            onClick={handleLoginClick}
            className="btn"
            type="button"
            id="loginBtn"
          >
            Log in
          </button>
        </div>
      </form>

      <h3>
        You have entered Email:{" "}
        <strong>{isLoginClicked && userData?.email}</strong>
      </h3>
      <h3>
        You have entered Password:{" "}
        <strong>{isLoginClicked ? userData?.password : ""}</strong>
      </h3>
    </React.Fragment>
  );
}

export default Login;
