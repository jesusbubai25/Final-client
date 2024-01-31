import { Button, Grid } from "@mui/material";
import React from "react";
import "./SmallCard.css";
import ButtonsComp from "./ButtonsComp";

const SmallCard = (props) => {


//   Id
// : 
// 1
// acCapacity
// : 
// "10 MW"
// capacityOfModules
// : 
// "230Wp and 240Wp Sova Solar Limited"
// customerName
// : 
// "WBREDA"
// dcCapacity
// : 
// "10.9 MWp"
// degradationRate
// : 
// "1% per year"
// guaranteedGenereation
// : 
// "15,000,000 kWh"
// inverterDetails
// : 
// "2.5 MVA Delta"
// inverterType
// : 
// "Central"
// moduleType
// : 
// "230 Wp and 240 Wp Poly crystalline Sova Solar"
// numberOfInverter
// : 
// 4
// numberOfModules
// : 
// 33120
// operationStartDate
// : 
// "1st November 2021"
// plantName
// : 
// "WBREDA 10 MWp Bhajanghat"
// remarks
  // console.log(props?.data)
  return (
    <div className="small-card-style">
      <div>
        <h2 style={{ textAlign: "center", color: "#122b4f" }}>
          {props?.heading}
        </h2>
        {props?.body?.map((item,i) => {
        return (
          <div key={i} >
            <h5 style={{ textAlign: "center" }}>{item}</h5>
          </div>
        );
      })}
      </div>
      
      <div
        style={{
          display: "block",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            marginBottom: "35px",
            height: "5vh",
            width: "5vw",
            color: "black",
            fontWeight: "bolder",
            // backgroundColor: "#64a8a7",
            backgroundColor: "rgb(50, 169, 32)",
            backgroundColor: "rgb(23, 167, 210)",
          }}
          onClick={props?.onClick}
        >
          {props?.showExpanded ? `Reset` : `View`}
        </Button>
        {/* <button
          style={{ backgroundColor: "#64a8a7", border: "none" }}
          onClick={() => {
            console.log("hello");
          }}
        >
          View More
        </button> */}
      </div>
    </div>
  );
};

export default SmallCard;
