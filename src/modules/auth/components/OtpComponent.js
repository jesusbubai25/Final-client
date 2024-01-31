import React, { useEffect, useState } from "react";
import "./Login.css";
import Buttons from "../../../components/ButtonsComp";
import { useNavigate } from "react-router-dom";
import PageURL from "../../../constants/PageURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { clear_errors, resend_otp_reset, verify_otp_reset } from "../../../constants/dataConstants";
import { ResendOtp, verifyOtp } from "../../../actions/userActions";
import Loader from "../../../components/Loader";

const OtpComponent = (props) => {
  const navigate = useNavigate();
  const [otp, setotp] = useState(null);
  const dispatch = useDispatch();

  const { isVerifiedOtp, error, isResendOtp, loading } = useSelector(state => state.user)
  let email = JSON.parse(localStorage.getItem("email"))
  console.log(error)
  console.log(isVerifiedOtp)
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: clear_errors })
    }
    if (isVerifiedOtp) {

      toast.success("Otp verified successfully check your mail to get new password")
      dispatch({ type: verify_otp_reset })
      navigate(PageURL.BASE)
    }
    if (isResendOtp) {
      toast.success("Otp Re-sent sucessfully!")
      dispatch({ type: resend_otp_reset })
    }

  }, [navigate, dispatch, isVerifiedOtp, error, isResendOtp])


  return (
    <div style={{ height: "35%" }} className="login-box">
      {loading && <Loader />}
      <h2 style={{ textAlign: "center" }}>Verify OTP</h2>
      <div style={{ paddingBottom: "1rem" }} className="inputs">
        <input
          type="number"
          placeholder="Enter OTP"
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
          value={otp}
          onChange={(e) => {
            setotp(e.target.value)
          }}
        />
      </div>
      <div style={{ paddingTop: "0" }} className="buttons">
        <Buttons
          type="contained"
          buttonType="primary"
          buttonText="Resend OTP"
          onClick={() => dispatch(ResendOtp(email))}
        ></Buttons>
        <Buttons
          type="outlined"
          buttonType="secondary"
          buttonText="Enter OTP"
          onClick={() => dispatch(verifyOtp(otp, email))}
        ></Buttons>
      </div>
    </div>
  );
};

export default OtpComponent;
