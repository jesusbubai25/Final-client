import React from "react";
import "./Table.css";
import { Checkbox } from "@mui/material";

const Table = (props) => {
  return (
    <table className="loss_flow_table"
      style={{
        width: "95%",
      }}
    >
      <tr style={{ backgroundColor: "#edeafb", padding: "0.5rem 0"}}>
        <th></th>
        <th>Sl No.</th>

        <th>Losses</th>

        <th>Description</th>
        <th>Loss (%)</th>
      </tr>

      <tr>
        <td> 
          <Checkbox
            defaultChecked
            color="success"
            onChange={(e) => {
              props?.onChange({ name: "Module" });
            }}
          />
        </td>
        <td style={{ textAlign: "center" }}>1</td>

        <td style={{ textAlign: "center" }}>Module</td>

        <td style={{ textAlign: "center" }}>
          There is a multiple of module defects have been identified with bypass
          diode dominating with 5.25% impact on underperformance
        </td>
        <td style={{ textAlign: "center" }}>5.25 %</td>
      </tr>

      <tr>
        <td>
          <Checkbox
            defaultChecked
            color="success"
            onChange={(e) => {
              props?.onChange({ name: "Soiling" });
            }}
          />
        </td>
        <td style={{ textAlign: "center" }}>2</td>

        <td style={{ textAlign: "center" }}>Soiling</td>

        <td style={{ textAlign: "center" }}>
          We have observed a 3.5% gap between the actual soiling loss and PVSYST
          model
        </td>
        <td style={{ textAlign: "center" }}>3.50 %</td>
      </tr>
      <tr>
        <td>
          <Checkbox
            defaultChecked
            color="success"
            onChange={(e) => {
              props?.onChange({ name: "Shadow" });
            }}
          />
        </td>
        <td style={{ textAlign: "center" }}>3</td>

        <td style={{ textAlign: "center" }}>Shadow Loss</td>

        <td style={{ textAlign: "center" }}>
          There is 1.3% gap in actual plant performance compared to PVSYST model
        </td>
        <td style={{ textAlign: "center" }}>1.30 %</td>
      </tr>
      <tr>
        <td>
          <Checkbox
            defaultChecked
            color="success"
            onChange={(e) => {
              props?.onChange({ name: "Resistance" });
            }}
          />
        </td>
        <td style={{ textAlign: "center" }}>4</td>

        <td style={{ textAlign: "center" }}>
          Insulation resistance of cable & connector
        </td>

        <td style={{ textAlign: "center" }}>
          There are number of damage Y connector and DC string cable exposed to
          the sharp edge of thr module mountaining structure that require
          attention to avoid inverter tripping due to low insultion resistance
        </td>
        <td style={{ textAlign: "center" }}>1.00 %</td>
      </tr>
      <tr>
        <td>
          <Checkbox
            defaultChecked
            color="success"
            onChange={(e) => {
              props?.onChange({ name: "Overheating" });
            }}
          />
        </td>
        <td style={{ textAlign: "center" }}>5</td>

        <td style={{ textAlign: "center" }}>
          Overheating DC string and DC main cables
        </td>

        <td style={{ textAlign: "center" }}>
          IR inspection of the SMBs have indentified several overheating strings
          and Dc cable joint, which is causing derating of cables and could
          result into fire in high irradiance days
        </td>
        <td style={{ textAlign: "center" }}>1.00 %</td>
      </tr>
    </table>
  );
};

export default Table;
