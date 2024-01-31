import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";


const InverterDetails = () => {
  const { plantDetail, error, loading } = useSelector(state => state.plantDetail)

  return (
    <div style={{ width: "95%", paddingBottom: "1rem" }}>
      <TableContainer component={Paper}>
        <h1 style={{ textAlign: "center" }}>Inverter Details</h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#edeaea" }}>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Inverter No.
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Inverter I/P Current (A)
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Power DC (KW)
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Power AC (KW)
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Inverter Loading
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {plantDetail?.inverter_details?.map((value, index, arr) => (
              <TableRow key={index}>
                <TableCell align="center">{value.inverterNo}</TableCell>
                <TableCell align="center">{value.invInputCurrent}</TableCell>
                <TableCell align="center">{value.dcPower}</TableCell>
                <TableCell align="center">{value.acPower}</TableCell>
                <TableCell align="center">{value.invLoadingPercentage}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InverterDetails;
