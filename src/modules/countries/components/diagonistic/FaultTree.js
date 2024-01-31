import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './FaultTree.css'
import { dataTree } from '../../../../constants/Data'

const FaultTree = () => {
    const [treeData, setTreeData] = useState(dataTree)
    return (
        <Grid container spacing={2} minHeight={650}   >
            <Grid
                item
                lg={11.7}
                style={{
                    // borderStyle: "solid",
                    // borderColor: "#ed7d31",
                    borderRadius: "14px",
                    marginTop: "15px",
                    marginLeft: "27px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // alignItems:"center",
                    // justifyContent:"center"
                    // flexDirection:"column"
                    flexDirection: "column",
                    background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                    padding: "1rem 0.5rem"
                }}
            >
                <Grid lg={12}
                    style={{
                         background: "white",
                         borderRadius:"14px"
                 }}
                >


                    <h1
                        style={{
                            textAlign: "center",
                            gin: "10px 25px 0 0",
                            fontFamily: " Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                            color: "black"
                        }}>
                        Fault Tree Analysis
                        {/* </span> */}
                    </h1>
                    <div className="tree">
                        {
                            treeRendering(treeData)
                        }
                    </div>
                    <div>


                    </div>

                </Grid>

            </Grid>


        </Grid>
    )
}
const treeRendering = (treeData) => {

    return (
        <>
            <ul>
                {
                    treeData.map((item) =>
                        <li className={item.text + item.id}
                        >
                            <div style={{
                                backgroundColor:
                                    `${item.id === 2 || item.id === 5 || item.id === 8 || item.id === 11 || item.id === 14 ? "#ffa907"
                                        : item.id === 1 ? "#fbdb22"
                                            : item.id === 3 ? "#fbd1af"
                                                : "#befafb"}`,
                                // position:item.text==="DC cables"?"relative":"static"
                                // ,
                                padding: item.text === "DC cables" ? "0.7rem 0.1rem" : "0.7rem 0.1rem",
                                width: item.id === 1 ? "75px" : item.id === 2 || item.id === 5 || item.id === 8 || item.id === 11 || item.id === 14 ? "75px"
                                    : item.id === 3 ? "65px" : "65px",
                                // height:"25px"
                            }} >{item.text}</div>
                            {
                                item.children && item.children.length &&
                                treeRendering(item.children)

                            }
                        </li>
                    )

                }
            </ul>
        </>
    )
}

export default FaultTree