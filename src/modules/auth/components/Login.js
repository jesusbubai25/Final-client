import React, { useState } from "react";
import "./Login.css";
import Buttons from "../../../components/ButtonsComp";
import "./Login.css";
import GreenLogo from "../../../newLogo.PNG";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import PageURL from "../../../constants/PageURL";

const Login = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div
        style={{
          width: "20vw",
          height: "10vh",
          overflow: "hidden"
        }}
      >
        <img
          src={GreenLogo}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            paddingTop: "1rem"
          }}
          alt="Greenenco-Logo"
        />
      </div>
      <div className="login">
        <div className="text-heading">
          <div className="container">
            <span className="text1" style={{ fontSize: "600%" }}>
              W
            </span>
            <span className="text1">el</span>
            <span className="text3">c</span>
            <span className="text1">ome </span>
            <br />
            <span className="text2">To SOLAR pvAPM Dashboard </span>
            <br />
            <span style={{ fontWeight: "bolder" }}>
              Please Login/ Sign Up to Continue.{" "}
            </span>
            <div style={{ marginTop: "15px" }}>
              <Buttons
                type="contained"
                buttonType="primary"
                buttonText="Login"
                onClick={() => {
                  navigate(PageURL.BASE)
                }}
              ></Buttons>
              <Buttons
                type="outlined"
                buttonType="secondary"
                buttonText="Sign Up"
                onClick={() => {
                  navigate(PageURL.SIGN_UP)
                }}
              ></Buttons>
            </div>
          </div>
        </div>
        <div className="login-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Login;
