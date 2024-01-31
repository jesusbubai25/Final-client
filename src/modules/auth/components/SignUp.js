import React, { useEffect, useState } from "react";
import "./SignUp.css";
import Buttons from "../../../components/ButtonsComp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from '../../../actions/userActions'
import { clear_errors, user_signup_reset } from "../../../constants/dataConstants";
import { useNavigate } from "react-router-dom";
import PageURL from "../../../constants/PageURL";
import Loader from "../../../components/Loader";

const SignUp = (props) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userLevel: "0",
    phoneNumber: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sucess, error, loading } = useSelector(state => state.user)
  const handleForm = () => {
    try {
      if (form.firstName.trim() === "" || form.lastName.trim() === "") {
        toast.error("Enter a valid name")
        return;
      }
      else if (!form.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        toast.error("Enter a valid email address")
        return;
      }
      else if ((form.phoneNumber.trim().length < 10 && form.phoneNumber.trim().length > 0) || form.phoneNumber.trim().length > 12) {
        toast.error("Enter a valid phone number")
        return;
      }
      else if (form.userLevel === "0") {
        toast.error("Enter a valid level")
        return;
      }
      dispatch(userSignup(form))

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (sucess) {
      toast.success("Signed up successfully! you will get a response from our team shortly")
      navigate(PageURL.COUNTRYDEFAULT);
      dispatch({ type: user_signup_reset });
    }
    if (error) {
      toast.error(error)
      dispatch({ type: clear_errors })
    }

  }, [dispatch, sucess, error, props])


  return (
    <div className="signup-box">
      {loading && <Loader />}
      <h2 style={{ textAlign: "center" }}>SignUp</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="First Name *"
          style={{
            width: "13vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderColor: "#ED7D31",
            borderStyle: "solid",
            borderWidth: "3px",
            color: "black",
            margin: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value });
          }}
          value={form?.firstName}
        />
        <input
          type="text"
          placeholder="Last Name *"
          style={{
            width: "13vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderColor: "#ED7D31",
            borderStyle: "solid",
            borderWidth: "3px",
            color: "black",
            margin: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, lastName: e.target.value });
          }}
          value={form?.lastName}
        />
      </div>
      <div className="inputs">
        <input
          type="email"
          placeholder="Email id *"
          style={{
            width: "27vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderStyle: "solid",
            borderColor: "#ED7D31",
            borderWidth: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form?.email}
        />
      </div>

      <div className="inputs">
        <input
          type="text"
          placeholder="Mobile Number (Optional)"
          style={{
            width: "27vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderStyle: "solid",
            borderColor: "#ED7D31",
            borderWidth: "3px",
            
          }}
          onChange={(e) => {
            setForm({ ...form, phoneNumber: e.target.value });
          }}
          value={form?.phoneNumber}
        />
      </div>

      <div className="inputs" style={{height:"7vh"}}>
        <select
          name="level"
          id="level"
          placeholder="User Level"
          style={{
            width: "27vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderStyle: "solid",
            borderColor: "#ED7D31",
            borderWidth: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, userLevel: e.target.value });
          }}
          value={form?.userLevel}
        >
          <option value="0">Select an Option</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
      </div>

      <div className="buttons">
        <Buttons

          type="contained"
          buttonType="primary"
          buttonText="Sign Up"
          onClick={() => {
            handleForm();
          }}
        ></Buttons>
        <Buttons
          type="outlined"
          buttonType="secondary"
          buttonText="Reset"
          onClick={() => {
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              userLevel: "",
              phoneNumber: "",
            });
          }}
        ></Buttons>
      </div>
    </div>
  );
};

export default SignUp;
