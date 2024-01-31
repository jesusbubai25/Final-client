import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { GHI_GTI_data_action, normalizedEnergyDetails } from "../../../../actions/inverterActions";
import SpinLoader from "../../../../components/SpinLoader";
import Printer from "../../../../components/Printer";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis, Area, AreaChart, BarChart } from "recharts";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver'
import { CSVLink } from "react-csv";
import "./Detailed.css";
import CustomizeTootip from "../../../../components/CustomizeTootip";
import { colors1, colors3 } from "../../../../colors/color";
import CustomizeLegend from "../../../../components/CustomizeLegend";
import { exportComponentAsJPEG } from "react-component-export-image";



const Detailed3 = () => {
  const { GHI_GTI_data, loading, error } = useSelector(state => state.GHI_GTI_data)
  const { energy } = useSelector(state => state.energy)

  const [progressValue, setProgressValue] = useState({
    progress_1: false,
    progress_2: false,
    progress_3: false
  })

  const [showPVsystContractualData, setShowPVsystContractualData] = useState({
    pvsystEnergy: true,
    contractualEnergy: true,
    all: true

  })
  const [showNetNormalisedShortfallData, setShowNetNormalisedShortfallData] = useState({
    netEnergy: true,
    normalisedEnergy: true,
    shortfall: true,
    all: true

  })
  const [showPvsystActualGTI, setShowPvsystActualGTI] = useState({
    PvsystGTI: true,
    ActualGTI: true,
    PvsystVsActualGTI: true,
    all: true

  })

  const [showPvsystActualGHI, setShowPvsystActualGHI] = useState({
    PvsystGHI: true,
    ActualGHI: true,
    PvsystVsActualGHI: true,
    all: true

  })

  const [progressValueAnimate, setProgressValueAnimate] = useState({
    progress1: false,
    progress2: false,
    progress3: false,
    progress4: false,
    progress5: false,
    progress6: false
  })

  const ref = useRef(null)
  const downloadRef1 = useRef(null);
  const downloadRef2 = useRef(null);
  const downloadRef3 = useRef(null);
  const downloadRef4 = useRef(null);

  const graphRef1 = useRef(null);
  const graphRef2 = useRef(null);
  const graphRef3 = useRef(null);
  const graphRef4 = useRef(null);

  const dispatch = useDispatch();

  //jpgDownload
  const jpgDownload = () => {
    setTimeout(async () => {
      const canvas = await html2canvas(ref.current);
      const data = canvas.toDataURL();
      saveAs(data, 'graph.jpg')
    }, 100);
  }

  // SVG Download
  const svgDownload = async () => {
    let chartSVG = document.getElementsByClassName("recharts-wrapper")[4];
    let chartSVG2 = document.getElementsByClassName("recharts-wrapper")[5];
    console.log(chartSVG)
    const svgData = await saveToSvg(chartSVG, 1000, 500)
    const svgData2 = await saveToSvg(chartSVG2, 1000, 500)
    saveAs(svgData, 'graph.svg')
    saveAs(svgData2, 'graph.svg')
  }


  useEffect(() => {
    dispatch(GHI_GTI_data_action())
    if (!energy) {
      dispatch(normalizedEnergyDetails())
    }
  }, [dispatch])



  return (
    <>
      {
        loading ? <SpinLoader /> :
          GHI_GTI_data?.data &&
          <Grid container paddingBottom={1} boxSizing={"border-box"} >

            <Grid
              sx={{ boxShadow: 2 }}
              item
              lg={11.7}
              style={{
                boxSizing: "border-box",
                borderWidth: "3px",
                borderRadius: "8px",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                padding: "2rem 1rem",
                gap: "1rem",
                height: "290px",
              }}
              className="detail_overview_container"


            >
              <div className="detail_overview_1">

                <div >

                  <div>
                    <div>
                      <progress className="progress_1"
                        style={{
                          accentColor: "green",
                          borderRadius: "14px",
                          border: progressValueAnimate.progress1 ? "3px solid red" : "none"
                        }}
                       value={parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2) || 0} max="2000" />

                    </div>
                    <div>
                      <span>PVsyst GTI (kWh/m^2)</span>
                      <span
                        style={{
                          position: "absolute",
                          left: `${parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2) * 100 / 2000 - 3}%`,
                          bottom: "60%"
                        }}
                      ><i class="fa-solid fa-caret-up"></i></span>

                      <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2) || 0}</span>
                    </div>

                  </div>
                  <div>
                    <div>
                      <progress className="progress_2" 
                       style={{
                        accentColor: "green",
                        borderRadius: "14px",
                        border: progressValueAnimate.progress2 ? "3px solid black" : "none"
                      }}
                      value={
                        parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GTI, 0)).toFixed(2)
                      } max="2000" />
                    </div>

                    <div>
                      <span>Actual GTI (kWh/m^2)</span>
                      <span
                        style={{
                          position: "absolute",
                          left: `${parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GTI, 0)).toFixed(2) * 100 / 2000 - 3}%`,
                          bottom: "60%"
                        }}
                      ><i class="fa-solid fa-caret-up"></i></span>

                      <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GTI, 0)).toFixed(2) || 0}</span>
                    </div>
                  </div>

                  <div>
                    <div>
                      <progress className="progress_3" style={{ accentColor: "green" }} value={

                        parseFloat((parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2) -
                          parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GTI, 0)).toFixed(2)) * 100 /
                          parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2)).toFixed(2) || 0
                      } max="100" />

                    </div>
                    <div>
                      <span>Excess/Shortfall (%)</span>
                      <span
                        style={{
                          position: "absolute",
                          left: `${(parseFloat((parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2) -
                            parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GTI, 0)).toFixed(2)) * 100 /
                            parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2)).toFixed(2) || 0)

                            - 3}%`,
                          bottom: "60%"
                        }}
                      ><i class="fa-solid fa-caret-up"></i></span>

                      <span>{parseFloat((parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2) -
                        parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GTI, 0)).toFixed(2)) * 100 /
                        parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2)).toFixed(2) || 0}</span>
                    </div>
                  </div>

                </div>
                <div>

                  <div>

                    <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GTI, 0)).toFixed(2)}</span>
                    <span>PVsyst GTI  (kWh/m^2) </span>
                    <div>
                      <BarChart width={100} height={40} data={GHI_GTI_data?.data || []} >
                        <XAxis dataKey="name" hide />
                        <Tooltip  content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["PVsyst GTI"]} />} />
                        <Bar barSize={4} radius={14} dataKey="pvsyst_GTI" fill="#8884d8" />
                      </BarChart>
                    </div>
                    <span className="progress_button_1" 
                    onMouseEnter={() => setProgressValueAnimate({ ...progressValueAnimate, progress1: true })}
                    onMouseOut={() => setProgressValueAnimate({ ...progressValueAnimate, progress1: false })}  
                    >View</span>

                  </div>
                  <div>
                    <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GTI, 0)).toFixed(2)}</span>
                    <span>Actual GTI (kWh/m^2) </span>
                    <div><BarChart width={100} height={40} data={GHI_GTI_data?.data || []} >
                      <XAxis dataKey="name" hide />
                      <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Actual GTI"]} />} />
                      <Bar barSize={4} radius={14} dataKey="Actual_GTI" fill="#8884d8" />
                    </BarChart></div>
                    <span 
                    onMouseEnter={() => setProgressValueAnimate({ ...progressValueAnimate, progress2: true })}
                    onMouseOut={() => setProgressValueAnimate({ ...progressValueAnimate, progress2: false })}
                     className="progress_button_2">View</span>

                  </div>
                </div>

              </div>
              <div className="detail_overview_1">

                <div >
                  <div>
                    <div>
                      <progress className="progress_4"
                        style={{
                          accentColor: "green",
                          borderRadius: "14px",
                          border: progressValueAnimate.progress4 ? "3px solid red" : "none"
                        }}
                        value={parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2)} max="2000" />

                    </div>
                    <div>
                      <span>PVsyst GHI (kWh/m^2)</span>
                      <span
                        style={{
                          position: "absolute",
                          left: `${parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2) * 100 / 2000 - 3}%`,
                          bottom: "60%"
                        }}
                      ><i class="fa-solid fa-caret-up"></i></span>

                      <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2)}</span>
                    </div>

                  </div>
                  <div>
                    <div>
                      <progress className="progress_5"
                        style={{
                          accentColor: "green",
                          borderRadius: "14px",
                          border: progressValueAnimate.progress5 ? "3px solid black" : "none"
                        }}
                        value={parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2) || 0} max="2000" />
                    </div>


                    <div>
                      <span>Actual GHI (kWh/m^2)</span>
                      {/* <span style={{fontSize:"1.2rem"}}><ArrowDropUpIcon  /></span> */}
                      <span
                        style={{
                          position: "absolute",
                          left: `${parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2) * 100 / 2000 - 3 || 0}%`,
                          bottom: "60%"
                        }}
                      ><i class="fa-solid fa-caret-up"></i></span>

                      <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2) || 0}</span>

                    </div>
                  </div>
                  <div>
                    <div>
                      <progress className="progress_3" style={{ accentColor: "blue" }} value={

                        parseFloat((parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2) -
                          parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2)) * 100 /
                          parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2)).toFixed(2) || 0

                      } max="100" />
                    </div>


                    <div>
                      <span>Excess/ShortFall (%)</span>
                      {/* <span style={{fontSize:"1.2rem"}}><ArrowDropUpIcon  /></span> */}
                      <span
                        style={{
                          position: "absolute",
                          left: `${parseFloat((parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2) -
                            parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2)) * 100 /
                            parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2)).toFixed(2) - 3

                            }%`,
                          bottom: "60%"
                        }}
                      ><i class="fa-solid fa-caret-up"></i></span>

                      <span>{parseFloat((parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2) -
                        parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2)) * 100 /
                        parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2)).toFixed(2) || 0}</span>
                    </div>
                  </div>

                </div>
                <div>

                  <div>

                    <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2) || 0}</span>
                    <span>PVSYST GHI (kWh/m^2)</span>
                    <div>
                      <BarChart width={100} height={40} data={GHI_GTI_data?.data || []} >
                        <XAxis dataKey="name" hide />
                        <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["PVsyst GHI"]} />} />
                        <Bar barSize={4} radius={14} dataKey="pvsyst_GHI" fill="#8884d8" />
                      </BarChart>
                    </div>
                    <span className="progress_button_1" 
                    onMouseEnter={() => setProgressValueAnimate({ ...progressValueAnimate, progress4: true })}
                    onMouseOut={() => setProgressValueAnimate({ ...progressValueAnimate, progress4: false })} 
                    >View</span>

                  </div>
                  <div>
                    <span>{parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2) || 0}</span>
                    <span>Actual GHI (kWh/m^2) </span>
                    <div><BarChart width={100} height={40} data={GHI_GTI_data?.data || []} >
                      <XAxis dataKey="name" hide />
                      <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Actual GHI"]} />} />
                      <Bar barSize={4} radius={14} dataKey="Actual_GHI" fill="#8884d8" />
                    </BarChart></div>
                    <span 
                    onMouseEnter={() => setProgressValueAnimate({ ...progressValueAnimate, progress5: true })}
                    onMouseOut={() => setProgressValueAnimate({ ...progressValueAnimate, progress5: false })}
                     className="progress_button_2">View</span>

                  </div>

                  {/* <div>
                  <span>{parseFloat((parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2) -
                    parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.Actual_GHI, 0)).toFixed(2)) * 100 /
                    parseFloat(GHI_GTI_data?.data?.reduce((acc, curr) => acc + curr.pvsyst_GHI, 0)).toFixed(2)).toFixed(2) || 0}</span>
                  <span>Excess/ShortFall (%)</span>
                  <div><BarChart width={100} height={40} data={

                    GHI_GTI_data?.data?.reduce((acc, curr) => {

                      acc.push({
                        name: curr.name,
                        shortfall: parseFloat((curr.pvsyst_GHI - curr.Actual_GHI) * 100 / curr.pvsyst_GHI).toFixed(2)
                      })
                      return acc;

                    }, []) ||
                    []} >
                    <XAxis dataKey="name" hide />
                    <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Excess/Shortfall"]} />} />
                    <Bar barSize={4} radius={14} dataKey="shortfall" fill="#8884d8" />
                  </BarChart></div>
                  <span className="progress_button_3">View</span>

                </div> */}


                </div>

              </div>
              <div className="gen_overview_2">

                <div>
                  <AreaChart
                    width={402}
                    height={140}
                    data={energy?.data4 || []}

                    margin={{
                      top: 20, right: 20, bottom: 20, left: 20,
                    }}
                  >
                    <XAxis dataKey="name" hide />
                    <YAxis type="number" hide
                      dataKey={() => Math.ceil(energy?.data4?.reduce((acc, curr, index) => Math.max(curr.pvsyst_module_temp, curr.actual_module_temp, acc), -Infinity))}
                      domain={[Math.floor(energy?.data4?.reduce((acc, curr, index) => Math.min(curr.pvsyst_module_temp, curr.actual_module_temp, acc), Infinity)), 'dataMax']}
                    />

                    <Area dataKey="pvsyst_module_temp" stroke="rgb(11, 165, 119)" strokeWidth={0.2} fill="rgb(20, 213, 149)" />
                    <Area dataKey="actual_module_temp" stroke="rgb(11, 165, 119)" strokeWidth={0.2} fill="rgb(91, 248, 201)" />
                    <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["PVsyst Module Temp", "Actual Module Temp"]} />} />
                  </AreaChart>

                </div>

                <div>

                  <div>
                    <span>{parseFloat(energy?.data4?.reduce((acc, curr) => acc + curr.pvsyst_module_temp, 0) / 12).toFixed(2) || 0}</span>
                    <span style={{ fontSize: "0.6rem" }}>PVsyst Module Temp (℃)</span>

                  </div>
                  <span style={{ width: "2px", background: "rgb(166, 176, 173)", height: "90%" }}></span>

                  <div>
                    <span>{parseFloat(energy?.data4?.reduce((acc, curr) => acc + curr.actual_module_temp, 0) / 12).toFixed(2) || 0}</span>

                    <span style={{ fontSize: "0.6rem" }}>Actual Module Temp (℃)</span>
                  </div>
                </div>

              </div>


            </Grid>
            <Grid item lg={11.7}
              borderRadius={"14px"}
              boxSizing={"border-box"}
              style={{
                background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                margin: "auto",
                marginLeft: "1.2rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.2rem 0.8rem"
              }}>

              <Grid container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}  >
                <Grid
                  item
                  lg={5.92}
                  // border={3}
                  // borderColor={"#ed7d31"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  position={"relative"}
                  bgcolor={"white"}
                  borderRadius={"14px"}
                  padding={"1rem"}
                >

                  <div
                    style={{
                      height: "max-content",
                      width: "max-content",
                      boxSizing: "border-box",
                      // position:"relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      // border:"2px solid black"
                    }}
                  >
                    <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
                      <Printer clickhandler={() => downloadRef1.current.link.click()}
                        jpgDownload={() =>
                          setTimeout(async () => {
                            exportComponentAsJPEG(graphRef1, { fileName: "graph" })
                          }, 100)
                        }
                        svgDownload={async () => {
                          const svgData = await saveToSvg(graphRef1.current.container)
                          saveAs(svgData, 'graph.svg')
                        }}
                      />
                    </div>
                    <CSVLink
                      data={GHI_GTI_data?.data?.reduce((acc, curr) => {
                        acc.push({
                          Month: curr.name,
                          PVsystGTI: curr.pvsyst_GTI,
                          ActualGTI: curr.Actual_GTI,
                          PVsystGTIvsActualGTI: curr.pvsyst_GTI_vs_Actual_GTI

                        })
                        return acc;
                      }, []) || []}
                      filename='data.csv'
                      className='hidden'
                      target='_blank'
                      ref={downloadRef1}
                    />

                    <h5 style={{ textAlign: "center", boxSizing: "border-box" }}>
                      PVsyst GTI (kWh/m^2) vs Actual GTI (kWh/m^2) vs PVsyst Vs Actual GTI (kWh/m^2)
                    </h5>
                    <ComposedChart
                      width={650}
                      height={300}
                      data={GHI_GTI_data?.data || []}
                      margin={{
                        top: 20,
                        right: 10,
                        bottom: 20,
                        left: 20,
                      }}
                      ref={graphRef1}


                    >
                      {/* <CartesianGrid stroke="#f5f5f5" /> */}
                      <CartesianGrid stroke="grey" strokeWidth={0.3} />


                      <XAxis
                        dataKey="name"
                        fontSize={10} fontWeight={600}
                        tickLine={false} axisLine={false} tickMargin={8}
                        interval={0}
                      />

                      <YAxis
                        tickFormatter={(v) => v >= 1000 ? parseFloat(v / 1000).toFixed(0) + "k" : v}
                        yAxisId="left-axis"
                        //  label={{ value: "Energy", angle: -90,x:20, position: "insideLeft"}} 
                        label={<AxisLabel axisType='yAxis' x={-25} y={-7}>PVsyst GTI & Actual GTI</AxisLabel>}

                        dataKey={() => Math.ceil(GHI_GTI_data?.data?.reduce((acc, curr, index) => Math.max(curr.pvsyst_GTI, curr.Actual_GTI, acc), -Infinity)) + 10}
                        domain={[Math.floor(GHI_GTI_data?.data?.reduce((acc, curr, index) => Math.min(curr.pvsyst_GTI, curr.Actual_GTI, acc), Infinity)) - 10, 'dataMax']}
                        tickLine={false} tickMargin={8}
                      />
                      <YAxis

                        yAxisId="right-axis"
                        orientation="right"
                        label={<AxisLabel axisType='yAxis' x={27} y={285}>PVsyst Vs Actual GTI</AxisLabel>}
                        tickLine={false} tickMargin={8}

                      />
                      <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["PVsyst GTI", "Actual GTI", "PVsyst GTI vs Actual GTI"]} />} />
                      <Legend
                        content={<CustomizeLegend active={false} payload={[]} LegendValues={["PVsyst GTI", "Actual GTI", "PVsyst GTI vs Actual GTI"]} data={showPvsystActualGTI} setData={setShowPvsystActualGTI} />}
                      />
                      <Bar
                        hide={showPvsystActualGTI.PvsystGTI ? false : true}
                        dataKey="pvsyst_GTI"
                        barSize={12}
                        // fill="#122b4f"
                        fill={`${colors3[0]}`}
                        yAxisId="left-axis"
                      />
                      <Bar
                        hide={showPvsystActualGTI.ActualGTI ? false : true}
                        dataKey="Actual_GTI"
                        barSize={12}
                        // fill="#ed7d31"
                        fill={`${colors3[1]}`}
                        yAxisId="left-axis"
                      />
                      <Line
                        hide={showPvsystActualGTI.PvsystVsActualGTI ? false : true}

                        type="monotone"
                        dataKey="pvsyst_GTI_vs_Actual_GTI"
                        strokeWidth={3}
                        stroke={`${colors1[4]}`}
                        yAxisId="right-axis"
                      />
                    </ComposedChart>
                  </div>


                </Grid>


                <Grid
                  item
                  lg={5.92}
                  // border={3}
                  // borderColor={"#ed7d31"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  position={"relative"}
                  bgcolor={"white"}
                  borderRadius={"14px"}
                  padding={"1rem"}

                >

                  <div
                    style={{
                      height: "max-content",
                      width: "max-content",
                      boxSizing: "border-box",
                      // position:"relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      // border:"2px solid black"
                    }}
                  >
                    <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
                      <Printer clickhandler={() => downloadRef2.current.link.click()}
                       jpgDownload={() =>
                        setTimeout(async () => {
                          exportComponentAsJPEG(graphRef2, { fileName: "graph" })
                        }, 100)
                      }
                        svgDownload={async () => {
                          const svgData = await saveToSvg(graphRef2.current.container)
                          saveAs(svgData, 'graph.svg')
                        }}
                      />
                    </div>
                    <CSVLink
                      data={GHI_GTI_data?.data?.reduce((acc, curr) => {
                        acc.push({
                          Month: curr.name,
                          PVsystGHI: curr.pvsyst_GHI,
                          ActualGHI: curr.Actual_GHI,
                          PVsystGHIvsActualGHI: curr.pvsyst_GHI_vs_Actual_GHI

                        })
                        return acc;
                      }, []) || []}
                      filename='data.csv'
                      className='hidden'
                      target='_blank'
                      ref={downloadRef2}
                    />

                    <h5 style={{ textAlign: "center", boxSizing: "border-box" }}>
                      PVsyst GHI (kWh/m^2) vs Actual GHI (kWh/m^2) vs PVsyst Vs Actual GHI (kWh/m^2)
                    </h5>
                    <ComposedChart
                      width={650}
                      height={300}
                      data={GHI_GTI_data?.data || []}
                      margin={{
                        top: 20,
                        right: 10,
                        bottom: 20,
                        left: 20,
                      }}
                      ref={graphRef2}


                    >
                      {/* <CartesianGrid stroke="#f5f5f5" /> */}
                      <CartesianGrid stroke="grey" strokeWidth={0.3} />

                      <XAxis
                        dataKey="name"
                        fontSize={10} fontWeight={600}
                        tickLine={false} axisLine={false} tickMargin={8}
                        interval={0}
                      />

                      <YAxis
                        tickFormatter={(v) => v >= 1000 ? parseFloat(v / 1000).toFixed(0) + "k" : v}
                        yAxisId="left-axis"
                        //  label={{ value: "Energy", angle: -90,x:20, position: "insideLeft"}} 
                        label={<AxisLabel axisType='yAxis' x={-25} y={-7}>PVsyst GHI & Actual GHI</AxisLabel>}

                        dataKey={() => Math.ceil(GHI_GTI_data?.data?.reduce((acc, curr, index) => Math.max(curr.pvsyst_GHI, curr.Actual_GHI, acc), -Infinity)) + 10}
                        domain={[Math.floor(GHI_GTI_data?.data?.reduce((acc, curr, index) => Math.min(curr.pvsyst_GHI, curr.Actual_GHI, acc), Infinity)) - 10, 'dataMax']}
                        tickLine={false} tickMargin={8}
                      />
                      <YAxis

                        yAxisId="right-axis"
                        orientation="right"
                        label={<AxisLabel axisType='yAxis' x={33} y={282}>PVsyst Vs Actual GHI</AxisLabel>}
                        tickLine={false} tickMargin={8}

                      />
                      <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["PVsyst GHI", "Actual GHI", "PVsyst GHI vs Actual GHI"]} />} />
                      <Legend
                        content={<CustomizeLegend active={false} payload={[]} LegendValues={["PVsyst GHI", "Actual GHI", "PVsyst GHI vs Actual GHI"]} data={showPvsystActualGHI} setData={setShowPvsystActualGHI} />}
                      />
                      <Bar
                        hide={showPvsystActualGHI.PvsystGHI ? false : true}
                        dataKey="pvsyst_GHI"
                        barSize={12}
                        // fill="#122b4f"
                        fill={`${colors3[0]}`}
                        yAxisId="left-axis"
                      />
                      <Bar
                        hide={showPvsystActualGHI.ActualGHI ? false : true}
                        dataKey="Actual_GHI"
                        barSize={12}
                        // fill="#ed7d31"
                        fill={`${colors3[1]}`}
                        yAxisId="left-axis"
                      />

                      <Line
                        hide={showPvsystActualGHI.PvsystVsActualGHI ? false : true}

                        type="monotone"
                        dataKey="pvsyst_GHI_vs_Actual_GHI"
                        strokeWidth={3}
                        stroke={`${colors1[4]}`}
                        yAxisId="right-axis"
                      />
                    </ComposedChart>
                  </div>


                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={11.7}
              borderRadius={"14px"}
              boxSizing={"border-box"}
              style={{
                background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                margin: "auto",
                marginLeft: "1.2rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem 0.8rem"
              }}>

              <Grid container display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"1rem"}  >
                <Grid
                  item
                  lg={5.92}
                  // border={3}
                  // borderColor={"#ed7d31"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  position={"relative"}
                  bgcolor={"white"}
                  borderRadius={"14px"}
                  padding={"1rem"}

                >

                  <div
                    style={{
                      height: "max-content",
                      width: "max-content",
                      boxSizing: "border-box",
                      // position:"relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      // border:"2px solid black"
                    }}
                  >
                    <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
                      <Printer clickhandler={() => downloadRef3.current.link.click()}
                        jpgDownload={() =>
                          setTimeout(async () => {
                            exportComponentAsJPEG(graphRef3, { fileName: "graph" })
                          }, 100)
                        }
                        svgDownload={async () => {
                          const svgData = await saveToSvg(graphRef3.current.container)
                          saveAs(svgData, 'graph.svg')
                        }}

                      />
                    </div>
                    <CSVLink
                      data={energy?.data2?.reduce((acc, curr) => {
                        acc.push({
                          Month: curr.name,
                          NetEnergy: curr.netEnergy,
                          NormalisedEnergy: curr.normalisedEnergy,
                          ExcessShortfall: curr.shortfall

                        })
                        return acc;
                      }, []) || []}
                      filename='data.csv'
                      className='hidden'
                      target='_blank'
                      ref={downloadRef3}
                    />

                    <h4 style={{ textAlign: "center", boxSizing: "border-box" }}>
                      Net Energy (KWh) vs Normalised Energy (KWh) vs Shortfall (%)
                    </h4>
                    <ComposedChart
                      width={650}
                      height={300}
                      data={energy?.data2 || []}
                      margin={{
                        top: 20,
                        right: 10,
                        bottom: 20,
                        left: 20,
                      }}

                      ref={graphRef3}


                    >
                      {/* <CartesianGrid stroke="#f5f5f5" /> */}
                      <CartesianGrid stroke="grey" strokeWidth={0.3} />

                      <XAxis
                        dataKey="name"
                        fontSize={10} fontWeight={600}
                        tickLine={false} axisLine={false} tickMargin={8}
                        interval={0}
                      />

                      <YAxis tickFormatter={(v) => v >= 1000 ? parseFloat(v / 1000).toFixed(0) + "k" : v} yAxisId="left-axis"
                        //  label={{ value: "Energy", angle: -90,x:20, position: "insideLeft"}} 
                        label={<AxisLabel axisType='yAxis' x={-25} y={-7}>Energy</AxisLabel>}

                        dataKey={() => Math.ceil(energy?.data2?.reduce((acc, curr, index) => Math.max(curr.netEnergy, curr.normalisedEnergy, acc), -Infinity)) + 100000}
                        domain={[Math.floor(energy?.data2?.reduce((acc, curr, index) => Math.min(curr.netEnergy, curr.normalisedEnergy, acc), Infinity)) - 100000, 'dataMax']}
                        tickLine={false} tickMargin={8}
                      />
                      <YAxis
                        yAxisId="right-axis"
                        orientation="right"
                        label={<AxisLabel axisType='yAxis' x={33} y={282}>Excess/Shortfall</AxisLabel>}
                        tickLine={false} tickMargin={8}

                      />
                      <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Net Energy", "Normalised Energy", "Shortfall"]} />} />
                      <Legend
                        content={<CustomizeLegend active={false} payload={[]} LegendValues={["Net Energy", "Normalised Energy", "Shortfall"]} data={showNetNormalisedShortfallData} setData={setShowNetNormalisedShortfallData} />}
                      />
                      <Bar
                        hide={showNetNormalisedShortfallData.netEnergy ? false : true}
                        dataKey="netEnergy"
                        barSize={12}
                        // fill="#122b4f"
                        fill={`${colors3[0]}`}
                        yAxisId="left-axis"
                      />
                      <Bar
                        hide={showNetNormalisedShortfallData.normalisedEnergy ? false : true}
                        dataKey="normalisedEnergy"
                        barSize={12}
                        // fill="#ed7d31"
                        fill={`${colors3[1]}`}
                        yAxisId="left-axis"
                      />
                      <Line
                        hide={showNetNormalisedShortfallData.shortfall ? false : true}

                        type="monotone"
                        dataKey="shortfall"
                        strokeWidth={3}
                        stroke={`${colors1[4]}`}
                        yAxisId="right-axis"
                      />
                    </ComposedChart>
                  </div>

                </Grid>
                <Grid
                  item
                  lg={5.92}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  position={"relative"}
                  bgcolor={"white"}
                  borderRadius={"14px"}
                  padding={"1rem"}
                >
                  <div
                    style={{
                      height: "max-content",
                      width: "max-content",
                      boxSizing: "border-box",
                      // position:"relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      // border:"2px solid black"
                    }}
                  >
                    <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
                      <Printer clickhandler={() => downloadRef4.current.link.click()}
                       jpgDownload={() =>
                        setTimeout(async () => {
                          exportComponentAsJPEG(graphRef4, { fileName: "graph" })
                        }, 100)
                      }
                        svgDownload={async () => {
                          const svgData = await saveToSvg(graphRef4.current.container)
                          saveAs(svgData, 'graph.svg')
                        }}

                      />
                    </div>
                    <CSVLink
                      data={energy?.data3?.reduce((acc, curr) => {
                        acc.push({
                          Month: curr.name,
                          PVsystEnergy: curr.pvsyst_Energy,
                          ContractualEnergy: curr.contractual_energy,

                        })
                        return acc;
                      }, []) || []}
                      filename='data.csv'
                      className='hidden'
                      target='_blank'
                      ref={downloadRef4}
                    />
                    <h4 style={{ textAlign: "center", boxSizing: "border-box" }}>
                      PVsyst Energy (KWh) vs Contratual Energy (KWh)
                    </h4>
                    <ComposedChart
                      width={600}
                      height={300}
                      data={energy?.data3 || []}
                      margin={{
                        top: 20,
                        right: 10,
                        bottom: 20,
                        left: 20,
                      }}
                      ref={graphRef4}
                    >
                      {/* <CartesianGrid stroke="#f5f5f5" /> */}
                      <CartesianGrid stroke="grey" strokeWidth={0.3} />

                      <XAxis
                        dataKey="name"
                        fontSize={10} fontWeight={600}
                        tickLine={false} axisLine={false} tickMargin={8}
                      />

                      <YAxis tickFormatter={(v) => v >= 1000 ? parseFloat(v / 1000).toFixed(0) + "k" : v} yAxisId="left-axis"
                        //  label={{ value: "Energy", angle: -90,x:20, position: "insideLeft"}} 
                        // label={<AxisLabel axisType='yAxis' x={-17} y={-7}>Energy</AxisLabel>}

                        dataKey={() => Math.ceil(energy?.data3?.reduce((acc, curr, index) => Math.max(curr.pvsyst_Energy, curr.contractual_energy, acc), -Infinity)) + 100000}
                        domain={[Math.floor(energy?.data3?.reduce((acc, curr, index) => Math.min(curr.pvsyst_Energy, curr.contractual_energy, acc), Infinity)) - 100000, 'dataMax']}
                        tickLine={false} tickMargin={8}
                      />
                      <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["PVsyst Energy", "Contractual Energy"]} />} />
                      <Legend
                        content={<CustomizeLegend active={false} payload={[]} LegendValues={["PVsyst Energy", "Contractual Energy"]} data={showPVsystContractualData} setData={setShowPVsystContractualData} />}
                      />
                      <Bar
                        hide={showPVsystContractualData.pvsystEnergy ? false : true}
                        dataKey="pvsyst_Energy"
                        barSize={12}
                        // fill="#122b4f"
                        fill={`${colors3[0]}`}
                        yAxisId="left-axis"
                      />
                      <Bar
                        hide={showPVsystContractualData.contractualEnergy ? false : true}


                        dataKey="contractual_energy"
                        barSize={12}
                        // fill="#ed7d31"
                        fill={`${colors3[1]}`}
                        yAxisId="left-axis"
                      />
                    </ComposedChart>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      }
    </>
  );
};


const saveToSvg = (svg, width, height) => {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    let xml = new XMLSerializer().serializeToString(svg);
    let dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(xml);
    resolve(dataUrl)
  });
};

const AxisLabel = ({ axisType, x = 10, y = 90, width = 50, height = 50, stroke, children }) => {
  console.log(axisType, x, y, width, height, stroke, children)
  const isVert = axisType === 'yAxis';
  const cx = isVert ? x : x + (width / 2);
  const cy = isVert ? (height / 2) + y : y + height + 10;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  return (
    <text className="animation_label" style={{ boxSizing: "border-box" }} enableBackground={true} x={`${cx}%`} y={`${cy}%`} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
      {children}
    </text>
  );
};

export default Detailed3;


