import React, { useEffect, useMemo, useRef, useState } from "react";
import Charts from "../../../../components/Charts";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { All_Inverter_Efficiency_Monthly, Inverter_Efficiency } from "../../../../actions/inverterActions";
import SpinLoader from "../../../../components/SpinLoader";
import CustomizeTootip from "../../../../components/CustomizeTootip";
import { colors1, colors3 } from "../../../../colors/color";
import CustomizeLegend from "../../../../components/CustomizeLegend";
import { Bar, CartesianGrid, ComposedChart, LabelList, Legend, Tooltip, XAxis, YAxis } from "recharts";
import Printer from "../../../../components/Printer";
import { CSVLink } from "react-csv";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver'


const InverterEfficiency = () => {
  const dispatch = useDispatch();
  const { efficiencies, loading } = useSelector(state => state.efficiency)
  const { monthly_inverter_efficiency,loading2 } = useSelector(state => state.monthly_inverter_efficiency)
  const [InverterData, setInverterData] = useState(null)
  const [InverterMonthlyData, setInverterMonthlyData] = useState(null)
  const [showEfficiency, setShowEfficiency] = useState({ efficiency: true, all: true })
  const [showEfficiencyMonthly, setShowEfficiencyMonthly] = useState({
    inverter1: true,
    inverter2: true,
    inverter3: true,
    inverter4: true,
    all: true
  });
  const downloadRef1 = useRef(null)
  const downloadRef2 = useRef(null)

  const graphRef1 = useRef(null)
  const graphRef2 = useRef(null)

  useMemo(() => {
    setInverterData(efficiencies)
    setInverterMonthlyData(monthly_inverter_efficiency)
  }, [efficiencies, monthly_inverter_efficiency])



  useEffect(() => {
    dispatch(Inverter_Efficiency())
    dispatch(All_Inverter_Efficiency_Monthly())
  }, [dispatch])


  return (
    <>
      {
        loading || loading2 ? <SpinLoader /> :
          <>
            {InverterData && InverterMonthlyData &&
              <Grid container lg={12} boxSizing={"border-box"}
                style={{
                  paddingBottom: "1rem"
                }}
              >


                <Grid item lg={11.8}
                  borderRadius={"14px"}
                  boxSizing={"border-box"}
                  style={{
                    background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    marginLeft: "0.8rem",
                    padding: "1rem"
                  }}>

                  <Grid
                    item
                    lg={5.9}
                    // border={3}
                    // borderColor={"#ed7d31"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    position={"relative"}
                    bgcolor={"white"}
                    borderRadius={"14px"}
                    padding={"1rem 0"}

                  >



                    <div
                      style={{
                        height: "max-content",
                        width: "max-content",
                        // position:"relative"
                      }}
                    >
                      <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
                        <Printer clickhandler={() => downloadRef1.current.link.click()} jpgDownload={() => {
                          setTimeout(async () => {
                            const canvas = await html2canvas(graphRef1.current.container);
                            const dataURL = canvas.toDataURL('image/jpg');
                            saveAs(dataURL, 'graph.jpg')
                          }, 100);
                        }}
                          svgDownload={async () => {
                            const svgData = await saveToSvg(graphRef1.current.container)
                            saveAs(svgData, 'graph.svg')
                          }}
                        />
                      </div>
                      <CSVLink
                        data={efficiencies?.reduce((acc, curr) => {
                          acc.push({
                            Month: curr.name,
                            Efficiency:curr.Efficiency
                          })
                          return acc;
                        }, []) || []}
                        filename='data.csv'
                        className='hidden'
                        target='_blank'
                        ref={downloadRef1}
                      />

                      <h3 style={{ textAlign: "center" }}>
                        Efficiency
                      </h3>
                      <ComposedChart

                        width={650}
                        height={500}
                        data={efficiencies || []}
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
                          fontSize={13} fontWeight={600}
                          tickLine={false} axisLine={false} tickMargin={8}
                        />

                        <YAxis yAxisId="left-axis"
                          //  label={{ value: "Energy", angle: -90,x:20, position: "insideLeft"}} 
                          // label={<AxisLabel axisType='yAxis' x={-17} y={-7}>Energy</AxisLabel>}

                          dataKey={() => Math.ceil(efficiencies?.reduce((acc, curr, index) => Math.max(curr.Efficiency, acc), -Infinity))}
                          domain={[Math.floor(efficiencies?.reduce((acc, curr, index) => Math.min(curr.Efficiency, acc), Infinity)), 'dataMax']}
                          tickLine={false} tickMargin={8}
                        />
                        <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Efficiency"]} />} />
                        <Legend
                          content={<CustomizeLegend active={false} payload={[]} LegendValues={["Efficiency"]} data={showEfficiency} setData={setShowEfficiency} />}
                        />
                        <Bar
                          hide={showEfficiency.efficiency ? false : true}
                          dataKey="Efficiency"
                          barSize={50}
                          // fill="#122b4f"
                          fill={`${colors3[0]}`}
                          yAxisId="left-axis"
                        >
                          <LabelList dataKey="Efficiency" position="top" fontSize={"0.9rem"} fontWeight={600} fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" />


                        </Bar>
                      </ComposedChart>
                    </div>

                  </Grid>
                  <Grid
                    item
                    lg={5.9}
                    // border={3}
                    // borderColor={"#ed7d31"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    position={"relative"}
                    bgcolor={"white"}
                    borderRadius={"14px"}
                    padding={"1rem 0"}
                  >


                    <div
                      style={{
                        height: "max-content",
                        width: "max-content",
                        // position:"relative"
                      }}
                    >
                      <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
                      <Printer clickhandler={() => downloadRef2.current.link.click()} jpgDownload={() => {
                          setTimeout(async () => {
                            const canvas = await html2canvas(graphRef2.current.container);
                            const dataURL = canvas.toDataURL('image/jpg');
                            saveAs(dataURL, 'graph.jpg')
                          }, 100);
                        }}
                          svgDownload={async () => {
                            const svgData = await saveToSvg(graphRef2.current.container)
                            saveAs(svgData, 'graph.svg')
                          }}
                        />
                      </div>
                      <CSVLink
                        data={monthly_inverter_efficiency?.reduce((acc, curr) => {
                          acc.push({
                            Month: curr.name,
                            Inveter1:curr.Inverter1,
                            Inveter2:curr.Inverter2,
                            Inveter3:curr.Inverter3,
                            Inveter4:curr.Inverter4
                          })
                          return acc;
                        }, []) || []}
                        filename='data.csv'
                        className='hidden'
                        target='_blank'
                        ref={downloadRef2}
                      />

                      <h3 style={{ textAlign: "center" }}>
                        Inverter Efficiency Monthly
                      </h3>
                      <ComposedChart

                        width={700}
                        height={500}
                        data={monthly_inverter_efficiency || []}
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
                          tickLine={false} axisLine={false} tickMargin={5}
                        />

                        <YAxis yAxisId="left-axis"
                          //  label={{ value: "Energy", angle: -90,x:20, position: "insideLeft"}} 
                          // label={<AxisLabel axisType='yAxis' x={-17} y={-7}>Energy</AxisLabel>}
                          dataKey={() => 98} domain={[96, 'dataKey']} tickCount={11}
                          tickLine={false} tickMargin={8}
                        // tickCount={11}
                        // dataKey={() => Math.ceil(monthly_inverter_efficiency?.reduce((acc, curr, index) => Math.max(curr.Inverter1, curr.Inverter2,curr.Inverter3,curr.Inverter4, acc), -Infinity))}
                        // domain={[Math.floor(monthly_inverter_efficiency?.reduce((acc, curr, index) => Math.min(curr.Inverter1,curr.Inverter2,curr.Inverter3,curr.inverter4, acc), Infinity)), 'dataMax']}
                        />
                        <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Inverter 1", "Inverter 2", "Inverter 3", "Inverter 4"]} />} />
                        <Legend
                          content={<CustomizeLegend active={false} payload={[]} LegendValues={["Inverter 1", "Inverter 2", "Inverter 3", "Inverter 4"]} data={showEfficiencyMonthly} setData={setShowEfficiencyMonthly} />}
                        />
                        <Bar
                          hide={showEfficiencyMonthly.inverter1 ? false : true}
                          dataKey="Inverter1"
                          // fill="#122b4f"
                          fill={`${colors3[0]}`}
                          yAxisId="left-axis"
                        />
                        <Bar
                          hide={showEfficiencyMonthly.inverter2 ? false : true}
                          dataKey="Inverter2"
                          // fill="#ed7d31"
                          fill={`${colors3[2]}`}
                          yAxisId="left-axis"
                        />
                        <Bar
                          hide={showEfficiencyMonthly.inverter3 ? false : true}
                          dataKey="Inverter3"
                          // fill="#ed7d31"
                          fill={`${colors3[3]}`}
                          yAxisId="left-axis"
                        />
                        <Bar
                          hide={showEfficiencyMonthly.inverter4 ? false : true}
                          dataKey="Inverter4"
                          // fill="#ed7d31"
                          fill={`${colors3[1]}`}
                          yAxisId="left-axis"
                        />
                      </ComposedChart>
                    </div>

                    
                  </Grid>
                </Grid>
              </Grid>
            }
          </>

      }
    </>
  );
};
export default InverterEfficiency;

export const saveToSvg = (svg, width, height) => {
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
