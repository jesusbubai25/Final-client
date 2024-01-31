import React, { createContext, useState } from "react";
import PieChartComp from "../../../../components/PieChartComp";
import { Grid } from "@mui/material";
import { colors1 } from "../../../../colors/color";


const LossFlow = () => {
  const [data, setData] = useState([
    { name: "Inverter Level DC Site Loss", value: 6.5, fill: colors1[0] },
    { name: "Soiling Loss", value: 3.5, fill: colors1[3] },
    { name: "Cable Loss", value: 1.0, fill: colors1[2] },

  ]);

  const [value, setValue] = useState(null)
  const [percentage, setPercentage] = useState(null)
  const [name, setname] = useState(null)
  return (
    <Grid container spacing={2} minHeight={600}>
      <Grid
        item
        lg={11}
        style={{
          borderStyle: "solid",
          borderColor: "#ed7d31",
          borderRadius: "5px",
          marginTop: "20px",
          marginLeft: "70px",
        }}
      >
        <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
          Loss Flow Diagram
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={{ width: "50%" }}>
            <PieChartComp
              data={data}
              height={500}
              width={900}
              title="Loss Flow Diagram"
              setValue={setValue}
              setPercentage={setPercentage}
              setname={setname}
            />
          </div>
          <div style={{ paddingTop: "2rem", width: "100%", display: "flex", alignItems: "self-start", justifyContent: "center" }}>
            <div>
              <h2>{name}</h2>
              <h2>PV: {value || 0}</h2>
              <h2>Rate: {percentage || 0}%</h2>
            </div>


          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default LossFlow;
