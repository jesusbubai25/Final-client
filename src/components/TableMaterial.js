import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export default function TableMaterial(props) {
  return (
    <TableContainer component={Paper}>
      <h1 style={{ textAlign: "center" }}>Inverter Specification</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#edeaea" }}>
            <TableCell style={{ fontWeight: "bolder" }}>
              Dessert (100g serving)
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
              Calories
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
