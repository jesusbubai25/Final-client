import React, { useEffect, useState } from "react";
import "./Login.css";
import Buttons from "../../../components/ButtonsComp";
import { useNavigate } from "react-router-dom";
import PageURL from "../../../constants/PageURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { clear_errors, send_otp_reset } from "../../../constants/dataConstants";
import { sendOtp } from "../../../actions/userActions";
import Loader from "../../../components/Loader";

const ForgotPassword = (props) => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const dispatch = useDispatch();
  const { isSendOtp, error, loading } = useSelector(state => state.user)

  const sendOtpHandler = () => {
    if (!username.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      toast.error("Enter a valid username")
      return;
    }
    dispatch(sendOtp(username))
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: clear_errors })
    }
    if (isSendOtp) {
      localStorage.setItem("email", JSON.stringify(username))
      toast.success("Otp send to your mail successfully!")
      dispatch({ type: send_otp_reset })
      navigate(PageURL.OTP_VERIFICATION)
    }

  }, [navigate, dispatch, error, isSendOtp])


  return (
    <div style={{ height: "35%" }} className="login-box">
      {loading && <Loader />}
      <h2 style={{ textAlign: "center" }}>Forgot Password</h2>
      <div style={{ paddingBottom: "1rem" }} className="inputs">
        <input
          type="text"
          placeholder="Enter Your Username"
          style={{
            width: "20vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderColor: "#ED7D31",
            borderStyle: "solid",
            borderWidth: "3px",
            color: "black",
          }}
          value={username}
          onChange={(e) => {
            setusername(e.target.value)
          }}
        />
      </div>
      <div style={{ paddingTop: "0" }} className="buttons">
        <Buttons
          type="contained"
          buttonType="primary"
          buttonText="Back"
          onClick={() => {
            navigate(PageURL.BASE)
          }}
        ></Buttons>
        <Buttons
          type="outlined"
          buttonType="secondary"
          buttonText="Sent OTP"
          onClick={sendOtpHandler}
        ></Buttons>
      </div>
    </div>
  );
};

export default ForgotPassword;
