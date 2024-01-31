import React, { createContext, useState } from "react";
import PieChartComp from "../../../../components/PieChartComp";
import { Checkbox, FormLabel, Grid, InputLabel, TextField } from "@mui/material";
import { colors1 } from "../../../../colors/color";
import trasmission_tower from '../../../../fonts and images/transmission.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import amrMeter from '../../../../fonts and images/amr_meter.jpeg'
import transformer from '../../../../fonts and images/transformer.jpg'
import inverter from '../../../../fonts and images/inverter.jpg'
import inverter2 from '../../../../fonts and images/inverter2.png'
import scada from '../../../../fonts and images/scada.jpg'
import './LossFlow.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Table from "../../../../components/Table";



const LossFlow2 = () => {
    const [data, setData] = useState([
        { name: "Inverter Level DC Site Loss", value: 6.5, fill: colors1[0] },
        { name: "Soiling Loss", value: 3.5, fill: colors1[3] },
        { name: "Cable Loss", value: 1.0, fill: colors1[2] },

    ]);

    const [value, setValue] = useState(null)
    const [percentage, setPercentage] = useState(null)
    const [name, setname] = useState(null)


    const [showCheckBox, setShowCheckBox] = useState({
        Module: false,
        Soiling: false,
        Shadow: false,
        Resistance: false,
        Overheating: false,
    });


    return (
        <Grid container spacing={2} minHeight={650}>
            <Grid
                item
                lg={11.8}
                style={{
                    borderStyle: "solid",
                    borderColor: "#ed7d31",
                    borderRadius: "5px",
                    marginTop: "10px",
                    marginLeft: "20px",
                    position: "relative",
                    display: "flex",
                    // alignItems:"center",
                    // justifyContent:"center"
                }}
            >
                {/* <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
                    Loss Flow Diagram
                </h1> */}
                {/* <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
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
        </div> */}
                <div style={{ display: "flex", flexDirection: "column", height: "90%", justifyContent: "space-between" }} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", top: "1rem" }}>
                            <img style={{ height: "120px", width: "80px" }} src={trasmission_tower} title="Transmission Tower" />
                            <span style={{ fontSize: "0.9rem", width: "90px", textAlign: "center", fontWeight: "700" }}>Transmission Tower</span>
                        </div>
                        <ArrowBackIcon sx={{ width: "100px", fontSize: "4rem" }} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", top: "1rem" }}>
                            <img style={{ height: "50px", width: "50px" }} src={amrMeter} title="Ammeter" />
                            <span style={{ fontSize: "0.9rem", width: "90px", textAlign: "center", fontWeight: "700", position: "relative", top: "20px" }}>Ammeter</span>
                        </div>
                        <ArrowBackIcon sx={{ width: "100px", fontSize: "4rem" }} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img style={{ height: "170px", width: "150px" }} src={transformer} title="Transformer" />
                            <span style={{ fontSize: "0.9rem", width: "90px", textAlign: "center", fontWeight: "700", position: "relative", bottom: "1rem" }}>Transformer</span>
                        </div>
                        <ArrowBackIcon sx={{ width: "100px", fontSize: "4rem", visibility: "hidden" }} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>

                            <img style={{ height: "110px", width: "120px" }} src={inverter2} title="Inverter" />
                            <span style={{ fontSize: "0.9rem", width: "90px", textAlign: "center", fontWeight: "700", position: "relative", top: "10px" }}>Inverter</span>
                            <div style={{ position: "absolute", top: "5%", borderTop: "3px solid red", width: "108%", right: "100%" }}>
                            </div>
                            <div style={{ position: "absolute", top: "10%", borderTop: "3px solid yellow", width: "108%", right: "100%" }}>
                            </div>
                            <div style={{ position: "absolute", top: "15.5%", borderTop: "3px solid blue", width: "108%", right: "100%" }}>
                            </div>

                        </div>
                        {/* <ArrowBackIcon sx={{ width: "100px", fontSize: "4rem" }} /> */}
                        <div style={{ marginLeft: "2rem", position: "relative" }}>
                            <div style={{ position: "relative" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <img style={{ height: "120px", width: "150px" }} src={scada} title="SCADA" />

                                    <span style={{ fontSize: "0.9rem", width: "90px", textAlign: "center", fontWeight: "700", position: "relative", top: "10px" }}>SCADA</span>



                                </div>
                            </div>
                            <div style={{ position: "absolute", height: "54%", width: "8px", backgroundColor: "black", left: "50%", marginTop: "15px" }}>

                                <div style={{ position: "absolute", height: "8px", width: "10.5vw", backgroundColor: "black", right: "0", bottom: "0" }}>
                                    <div style={{ position: "absolute", height: "10vh", width: "8px", backgroundColor: "black", left: "0", bottom: "0" }}>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div style={{display:"flex",gap:"0.5rem",position:"relative"}}>
                    <div style={{width:"65%",height:"4px",backgroundColor:"rgb(86, 198, 45)",position:"absolute",top:"50%",marginLeft:"19.5px"}}></div> */}
                    {/* <div style={{width:"65%",height:"4px",backgroundColor:"rgb(86, 198, 45)",position:"absolute",top:"10px",marginLeft:"19.5px"}}></div> */}

                    {/* <div style={{width:"100%",height:"10%",display:"flex",alignItems:"flex-start",border:"2px solid red"}}>
                        <WbSunnyIcon sx={{ color: "red", fontSize: "5rem" ,border:"2px solid red"}} /> */}

                    <div style={{
                        position: "absolute",
                        top: "40%",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <WbSunnyIcon sx={{
                                color: "#FDB813", fontSize: "5rem"
                            }} />
                            <span
                                style={{ fontSize: "0.7rem", width: "70px", textAlign: "center", fontWeight: "700" }}
                            >Sun</span>
                        </div>

                    </div>
                    <div style={{
                        display: "flex", flexDirection: "column", width: "40%",
                        height: "70%", justifyContent: "space-between", alignItems: "center", marginLeft: "11rem"
                    }}>


                        <div className="smb_box">
                            SMB BOX
                            <div className="animate_cable" style={{
                                width: "8px", height: "61%", position: "absolute", bottom: "100%",
                                backgroundColor: showCheckBox.Overheating || showCheckBox.Resistance ? "blue" : "red",
                                left: "50%", boxShadow: "none"
                            }}>

                                <div className="animate_cable" style={{
                                    height: "8px",
                                    width: "21vw",
                                    backgroundColor: showCheckBox.Overheating || showCheckBox.Resistance ? "blue" : "red",
                                    position: "absolute",
                                    top: "0px"
                                }}>
                                    <div className="animate_cable" style={{
                                        width: "8px", height: "10vh",
                                        backgroundColor: showCheckBox.Overheating || showCheckBox.Resistance ? "blue" : "red",
                                        position: "absolute", right: "0", bottom: "0"
                                    }}>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="solar_box" >

                            <div className="solar_pannel_box">
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item1"></div>
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item2"></div>

                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item3"> solar pannel</div>
                                <div className="animate_div" style={{
                                    height: "44%", position: "absolute", bottom: "100%",
                                    background: "none",
                                    borderLeft: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                    left: "50%", boxShadow: "none"
                                }}>
                                    <div className="animate_div2" style={{
                                        position: "absolute", bottom: "85%",
                                        background: "none",
                                        width: "71.5%",
                                        left: "0",
                                        borderTop: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                        boxShadow: "none"
                                    }}></div>


                                    <div style={{
                                        position: "absolute",
                                        bottom: "75%", left: "67%",
                                        fontSize: "2rem",
                                        transform: "rotate(180deg)"
                                    }}>
                                        <i className="fa-solid fa-y y_connector"
                                            style={{
                                                color: showCheckBox.Resistance ? "red" : "black"
                                            }}
                                        ></i>

                                        <div className="animate_div" style={{
                                            position: "absolute", top: "100%", left: "35%",
                                            background: "none",
                                            height: "107%",
                                            borderLeft: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                            boxShadow: "none"
                                        }}></div>
                                    </div>

                                </div>

                            </div>
                            <div className="solar_pannel_box">
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item1"></div>
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item2"></div>
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item3">

                                    solar pannel
                                </div>
                                <div className="animate_div" style={{
                                    height: "43%", position: "absolute", bottom: "100%",
                                    background: "none",
                                    borderLeft: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                    left: "50%", boxShadow: "none"
                                }}>


                                    <div className="animate_div2 special_animate" style={{
                                        position: "absolute", bottom: "85%",
                                        background: "none",
                                        width: "74%",
                                        right: "100%",
                                        borderTop: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                        boxShadow: "none"
                                    }}></div>
                                </div>


                            </div>
                            <div className="solar_pannel_box">
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item1"></div>
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item2"></div>

                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item3">solar pannel</div>
                                <div className="animate_div" style={{
                                    height: "44%", position: "absolute", bottom: "100%",
                                    background: "none",
                                    borderLeft: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                    left: "50%", boxShadow: "none"
                                }}>
                                    <div className="animate_div2" style={{
                                        position: "absolute", bottom: "85%",
                                        background: "none",
                                        width: "71.5%",
                                        left: "0",
                                        borderTop: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                        boxShadow: "none"
                                    }}></div>


                                    <div style={{
                                        position: "absolute",
                                        bottom: "75%", left: "67%",
                                        fontSize: "2rem",
                                        transform: "rotate(180deg)",

                                    }}>
                                        <i className="fa-solid fa-y y_connector"
                                            style={{
                                                color: showCheckBox.Resistance ? "red" : "black"
                                            }}
                                        ></i>

                                        <div className="animate_div" style={{
                                            position: "absolute", top: "100%", left: "35%",
                                            background: "none",
                                            height: "107%",
                                            borderLeft: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                            boxShadow: "none"
                                        }}></div>
                                    </div>
                                </div>


                            </div>
                            <div className="solar_pannel_box">
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item1"></div>
                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item2"></div>

                                <div style={{ border: showCheckBox.Module || showCheckBox.Shadow || showCheckBox.Soiling ? "5px solid red" : "2px solid rgb(67, 176, 239)" }} className="solar_pannel_item3">solar pannel</div>
                                <div className="animate_div" style={{
                                    height: "43%", position: "absolute", bottom: "100%",
                                    background: "none",
                                    borderLeft: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                    left: "50%", boxShadow: "none"
                                }}>
                                    <div className="animate_div2 special_animate" style={{
                                        position: "absolute", bottom: "85%",
                                        background: "none",
                                        width: "74%",
                                        right: "100%",
                                        borderTop: showCheckBox.Resistance ? "5px dashed red" : "5px dashed black",
                                        boxShadow: "none"
                                    }}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* </div> */}



                </div>

                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    justifyContent: "center", width: "100%", padding: "0 1rem"
                }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>Loss Flow Table</span>

                    {/* <Grid
                        item
                        lg={7}
                        style={{ borderStyle: "solid",
                        //  borderColor: "#ed7d31" 
                         borderColor: "blue" ,
                        }}
                        width={"100%"}
                    > */}
                    {/* <div
                            style={{
                                // display: "flex",
                                // justifyContent: "center",
                                height: "100%",
                                width: "100%",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                            }}
                        > */}
                    <table
                        className="loss_flow_table"
                        style={{
                            height: "98%",
                            border: "3px solid black",
                        }}
                    >
                        <tr style={{ backgroundColor: "#edeafb", padding: "0.5rem 0" }}>
                            <th></th>
                            <th>Losses</th>
                            <th>Description</th>
                            <th>Loss (%)</th>
                        </tr>
                        <tr style={{ padding: "1rem 0" }}>
                            <td>
                                <Checkbox
                                    id="module"
                                    checked={showCheckBox.Module}
                                    color="success"
                                    onChange={() => setShowCheckBox({ ...showCheckBox, Module: !showCheckBox.Module })}
                                />
                            </td>

                            <td style={{ textAlign: "center" }}><InputLabel style={{ color: "black" }} htmlFor="module" >Module</InputLabel> </td>

                            <td style={{ textAlign: "center" }}>
                                There is a multiple of module defects have been identified with bypass
                                diode dominating with 5.25% impact on underperformance
                            </td>
                            <td style={{ textAlign: "center" }}>5.25 %</td>
                        </tr>

                        <tr>
                            <td>
                                <Checkbox

                                    checked={showCheckBox.Soiling}
                                    id="soiling"
                                    color="success"
                                    onChange={() => setShowCheckBox({ ...showCheckBox, Soiling: !showCheckBox.Soiling })}

                                />
                            </td>

                            <td style={{ textAlign: "center" }}>  <InputLabel style={{ color: "black" }} htmlFor="soiling" >Soiling</InputLabel> </td>

                            <td style={{ textAlign: "center" }}>
                                We have observed a 3.5% gap between the actual soiling loss and PVSYST
                                model
                            </td>
                            <td style={{ textAlign: "center" }}>3.50 %</td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox
                                    id="shadow"
                                    checked={showCheckBox.Shadow}
                                    color="success"
                                    onChange={() => setShowCheckBox({ ...showCheckBox, Shadow: !showCheckBox.Shadow })}

                                />
                            </td>

                            <td style={{ textAlign: "center" }}><InputLabel htmlFor="shadow" style={{ color: "black" }} > Shadow Loss</InputLabel> </td>

                            <td style={{ textAlign: "center" }}>
                                There is 1.3% gap in actual plant performance compared to PVSYST model
                            </td>
                            <td style={{ textAlign: "center" }}>1.30 %</td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox

                                    id="insulator"
                                    checked={showCheckBox.Resistance}
                                    color="success"
                                    onChange={() => setShowCheckBox({ ...showCheckBox, Resistance: !showCheckBox.Resistance })}

                                />
                            </td>

                            <td style={{ textAlign: "center" }}>

                                <InputLabel htmlFor="insulator" style={{ whiteSpace: "pre-wrap", color: "black" }} >
                                    Insulation resistance of cable & connector
                                </InputLabel>
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
                                    id="overheating"
                                    checked={showCheckBox.Overheating}
                                    color="success"
                                    onChange={() => setShowCheckBox({ ...showCheckBox, Overheating: !showCheckBox.Overheating })}

                                />
                            </td>

                            <td style={{ textAlign: "center" }}>
                                <InputLabel htmlFor="overheating" style={{ whiteSpace: "pre-wrap", color: "black" }}>
                                    Overheating DC string and DC main cables

                                </InputLabel>
                            </td>

                            <td style={{ textAlign: "center" }}>
                                IR inspection of the SMBs have indentified several overheating strings
                                and Dc cable joint, which is causing derating of cables and could
                                result into fire in high irradiance days
                            </td>
                            <td style={{ textAlign: "center" }}>1.00 %</td>
                        </tr>
                    </table>
                </div>
                {/* </Grid> */}


            </Grid>
        </Grid>
    );
};

export default LossFlow2;
