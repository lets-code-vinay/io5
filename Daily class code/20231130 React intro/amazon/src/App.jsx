import React from "react";
import "./App.css";
import Login from "./Pages/Login/index.jsx";
import Button from "react-bootstrap/Button";
import Header from "./components/Header/index.jsx";

function App() {
  return (
    <div className="main-app">
      <Header />
      <div className="App">
        <Login />
      </div>
    </div>
  );
}

export default App;
