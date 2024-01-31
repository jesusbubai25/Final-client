import React, { forwardRef } from "react";

const GeneralDetails = () => {
  return (
    <div style={{padding:"0rem 1rem 1rem 1rem",display:"flex",flexDirection:"column"}} >
      <h1
        style={{
          textAlign: "center",
          color: "#122b4f",
          fontWeight: "bolder"
        }}
      >
        Site Geo-location
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.9583924512635!2d88.75029803300563!3d23.384824824826705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f92b92b9ca7607%3A0x3299f7fb6bec58e1!2sWBREDA%2010MWp%20Solar%20Power%20Project-Bhajanghat!5e1!3m2!1sen!2sin!4v1695484807942!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default forwardRef(GeneralDetails);
