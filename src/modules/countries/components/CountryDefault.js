 import React, { useEffect, useState } from "react";
import CountryHeader from "./CountryHeader";
import CountryDefaultBody from "./CountryDefaultBody";
import "./CountryDefault.css";
import AdminDashBoard from "./AdminDashBoard";
import { useSelector } from "react-redux";
import CountryHeader1 from "./CounterHeader1";

const CountryDefault = () => {
  
  const [isAdminDashBoard, setIsAdminDashBoard] = useState(false);
  const {user} =useSelector(state=>state.user)

  useEffect(() => {

  }, [user])
  
  return (
    <div>
      <div className="country-header">
        <CountryHeader a={6} setDashBoard={setIsAdminDashBoard} />
      </div>
      {!isAdminDashBoard && (
        <div className="country-body">
          <CountryDefaultBody />
        </div>
      )}
      {isAdminDashBoard && (
        <div style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} className="country-body">
          <AdminDashBoard />
        </div>
      )}
    </div>
  );
};

export default CountryDefault;
