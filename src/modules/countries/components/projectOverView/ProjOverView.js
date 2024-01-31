import React, { useEffect, useRef, useState } from "react";
import "../CountryDefault.css";
import "./ProjOverView.css";
import { Grid } from "@mui/material";
import ProjPic from "../../../../projectOverViewPic.jpg";
import SmallCard from "../../../../components/SmallCard";
import GeneralDetails from "./GeneralDetails";
import InverterDetails from "./InverterDetails";
import SmbDetails from "./SmbDetails";
import { useDispatch, useSelector } from "react-redux";
import { powerPlantDetail } from "../../../../actions/inverterActions";
import SpinLoader from "../../../../components/SpinLoader";
import AsBuiltDiagram from "./AsBuiltDiagram";

const ProjOverView = () => {
  const [showDetails, setShowDetails] = useState({
    showGeneralDetails: false,
    showInverterDetails: false,
    showAsbuiltDetails: false,
    showSMB: false,
  });
  const { plantDetail, error, loading } = useSelector(state => state.plantDetail)

  const refReset = useRef(null)
  const refForGeneralDetails = useRef(null);
  const refInverterDetails = useRef(null);
  const refsmb = useRef(null)
  const refAsbuiltDiagram = useRef(null)
  const dispatch = useDispatch();

  useEffect(() => {
    if (showDetails.showGeneralDetails) {
      refForGeneralDetails.current?.scrollIntoView({ behavior: 'smooth' })
    }
    if (showDetails.showInverterDetails) {
      refInverterDetails.current?.scrollIntoView({ behavior: 'smooth' })
    }
    if (showDetails.showSMB) {
      refsmb.current?.scrollIntoView({ behavior: 'smooth' })

    }
    if (showDetails.showAsbuiltDetails) {
      refAsbuiltDiagram.current?.scrollIntoView({ behavior: 'smooth' })

    }
    if (!plantDetail) {
      dispatch(powerPlantDetail())
    }
  }, [showDetails, dispatch])


  return (

    <div >
      {loading ?
        <SpinLoader /> :
        <div ref={refReset}  >
          <Grid container spacing={2} >



            <Grid item lg={12} marginBottom={2} >
              <div
                style={{
                  height: "40vh",
                  overflow: "hidden",
                  paddingTop: "5px"
                }}
              >
                <img
                  src={ProjPic}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Project-picture"
                />
              </div>
            </Grid>
            <Grid item lg={11.7} marginLeft={"28px"} boxSizing={"border-box"} marginBottom={"1rem"}
              style={{
                // background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                // borderRadius: "14px",
                boxSizing:"border-box"

              }}
            >

              <Grid container lg={11.7}
                style={{
                  backgroundColor: "white",
                  boxSizing: "border-box",
                  margin: "1rem auto",
                  borderRadius: "14px",
                  padding: "1rem 0rem",
                  // background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",



                }}
              >


                <Grid
                  item
                  lg={3}
                  md={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SmallCard
                    heading="General Details"
                    body={[
                      `Location: ${plantDetail?.data2.plantName}`,
                      `Capacity DC [MWp]: ${plantDetail?.data2.dcCapacity}`,
                      `Capacity AC [MW]: ${plantDetail?.data2.acCapacity}`
                    ]}
                    data={plantDetail?.data2}
                    onClick={() => {

                      setShowDetails({
                        ...showDetails,
                        showInverterDetails: false,
                        showSMB: false,
                        showAsbuiltDetails: false,
                        showGeneralDetails: !showDetails?.showGeneralDetails,
                      });

                    }}

                    showExpanded={showDetails?.showGeneralDetails}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SmallCard
                    heading="As-built Details"
                    body={[
                      // `Modules: ${plantDetail?.data2.moduleType}`,
                      // `Guaranteed Generation: ${plantDetail?.data2.guaranteedGenereation}`,
                      // `Tilt: ${plantDetail?.data2.tiltAngle}`
                      `Datasheet: Modules, Inverter, Transformer`,
                      `Cabel: Cabel Details`,
                      `SLD: DC SLD and AC SLD`
                    ]}
                    data={plantDetail?.data2}
                    onClick={() => {
                      setShowDetails({
                        ...showDetails,
                        showGeneralDetails: false,
                        showInverterDetails: false,
                        showSMB: false,
                        showAsbuiltDetails: !showDetails?.showAsbuiltDetails,
                      });
                    }}
                    showExpanded={showDetails?.showAsbuiltDetails}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SmallCard
                    heading="Inverters"
                    body={[
                      `Number of Inverters: ${plantDetail?.data2.numberOfInverter}`,
                      `Specifications: ${plantDetail?.data2.inverterDetails}`,
                      `Inverter Type: ${plantDetail?.data2.inverterType
                      }`
                    ]}
                    data={plantDetail?.data2}
                    onClick={() => {
                      setShowDetails({
                        ...showDetails,
                        showGeneralDetails: false,
                        showSMB: false,
                        showAsbuiltDetails: false,
                        showInverterDetails: !showDetails?.showInverterDetails,
                      });
                    }}
                    showExpanded={showDetails?.showInverterDetails}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={12}
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <SmallCard
                    bgColor="#ed7d31"
                    heading="SMB & String"
                    body={[
                      // "Number of SMB: 47",
                      // "Number of String: 1106",
                      // "String Type: Y Connector",
                      `Number of SMB: ${plantDetail?.data2.smbNo}`,
                      `Number of string: ${plantDetail?.data2.stringNo}`,
                      `String Type: ${plantDetail?.data2.typeOfString}`
                    ]}
                    data={plantDetail?.data2}
                    onClick={() => {
                      setShowDetails({
                        ...showDetails,
                        showGeneralDetails: false,
                        showInverterDetails: false,
                        showAsbuiltDetails: false,
                        showSMB: !showDetails?.showSMB,
                      });
                    }}
                    showExpanded={showDetails?.showSMB}
                  />
                </Grid>
              </Grid>


            </Grid>
            {showDetails?.showGeneralDetails && (

              <Grid item lg={11.7} marginLeft={"28px"} boxSizing={"border-box"} marginBottom={"1rem"}
                style={{
                  background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                  // borderRadius: "14px",

                }}
              >

                <Grid container lg={11.7}
                  style={{
                    backgroundColor: "white",
                    boxSizing: "border-box",
                    margin: "1.3rem 1rem 1.3rem 0.6rem",
                    borderRadius: "14px",
                    // padding: "1rem 0.5rem",
                    


                  }}
                >

                  <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    style={{
                      margin: "auto",
                    }}
                    ref={refForGeneralDetails}

                  >
                    <GeneralDetails />
                  </Grid>

                </Grid>

              </Grid>


            )}
            {showDetails?.showInverterDetails &&
              (

                <Grid item lg={11.7} marginLeft={"28px"} boxSizing={"border-box"} marginBottom={"1rem"}
                  style={{
                    background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                    // borderRadius: "14px",

                  }}
                >

                  <Grid container lg={11.7}
                    style={{
                      backgroundColor: "white",
                      boxSizing: "border-box",
                      margin: "2rem 1rem 2rem 0.6rem",

                      borderRadius: "14px",
                      // padding: "1rem 0.5rem",


                    }}
                  > <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    style={{ display: "flex", justifyContent: "center" }}
                    ref={refInverterDetails}
                  >
                      <InverterDetails />
                    </Grid>

                  </Grid>
                </Grid>




              )
            }
            {showDetails?.showSMB &&

              (


                <Grid item lg={11.7} marginLeft={"28px"} boxSizing={"border-box"} marginBottom={"1rem"}
                  style={{
                    background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                    // borderRadius: "14px",

                  }}
                >

                  <Grid container lg={11.7}
                    style={{
                      backgroundColor: "white",
                      boxSizing: "border-box",
                      margin: "2rem 1rem 2rem 0.6rem",
                      borderRadius: "14px",
                      // padding: "1rem 0.5rem",


                    }}
                  ><Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    style={{ display: "flex", justifyContent: "center" }}
                    ref={refsmb}
                  >
                      <SmbDetails />
                    </Grid>

                  </Grid>
                </Grid>
              )
            }
            {showDetails?.showAsbuiltDetails &&

              (

                <Grid item lg={11.7} marginLeft={"28px"} boxSizing={"border-box"} marginBottom={"1rem"}
                  style={{
                    background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                    // borderRadius: "14px",

                  }}
                >

                  <Grid container lg={11.7}
                    style={{
                      backgroundColor: "white",
                      boxSizing: "border-box",
                      margin: "2rem 1rem 2rem 0.6rem",
                      borderRadius: "14px",
                      // padding: "1rem 0.5rem",


                    }}
                  >

                    <Grid
                      item
                      lg={12}
                      md={12}
                      xs={12}
                      boxSizing={"border-box"}
                      // marginTop={10}
                      marginBottom={5}
                      style={{ display: "flex", justifyContent: "center" }}
                      ref={refAsbuiltDiagram}
                    >
                      <AsBuiltDiagram />
                    </Grid>
                  </Grid></Grid>


              )
            }
          </Grid>
        </div>
      }
    </div>

  );
};

export default ProjOverView;
