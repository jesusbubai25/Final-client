import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CardComponent.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard(props) {
  return (
    <Card
      sx={{
        minWidth: 300,
        /*  backgroundColor: "#edeaea", */
        height: "max-content",
        margin: "5px 5px 5px 5px",
        borderStyle: "solid",
        borderColor: "#ed7d31",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 35, fontWeight: "bolder", textAlign: "center" }}
          color="#122b4f"
          gutterBottom
        >
          {props?.title}
        </Typography>
        <Typography variant="h6" component="div">
          {props?.body?.map((item) => {
            return (
              <li
                style={{
                  borderStyle: "solid",
                  paddingLeft: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#edeaea",
                  marginBottom: "2px",
                  fontSize: "larger",
                  fontFamily: "cursive",
                }}
              >
                {item}
              </li>
            );
          })}
        </Typography>
      </CardContent>
    </Card>
  );
}
