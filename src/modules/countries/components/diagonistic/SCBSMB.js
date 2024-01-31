import React, { useEffect, useRef, useState } from "react";
import Charts, { getColourPicker } from "../../../../components/Charts";
import { Grid } from "@mui/material";
import { data1 } from "../../../../constants/Data";
import { data2 } from "../../../../constants/Data";
import { useLocation } from "react-router-dom";
import PageURL from "../../../../constants/PageURL";
import { useDispatch, useSelector } from "react-redux";
import { All_SCBSMB, InverterSmbMonthlyLoss, InverterSmbYearlyLoss } from "../../../../actions/inverterActions";
import SpinLoader from "../../../../components/SpinLoader";
import CustomizeTootip from "../../../../components/CustomizeTootip";
import CustomizeLegend from "../../../../components/CustomizeLegend";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart, LabelList, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";
import { AxisLabel } from "../generationOverView/GenOverView2";
import { colors3 } from "../../../../colors/color";
import Printer from "../../../../components/Printer";
import { CSVLink } from "react-csv";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver'




const SCBSMB = () => {

  const [inverter, setInverter] = useState(0)
  const [smb, setSmb] = useState(0)
  const [showEfficiencyYearlyLoss, setShowEfficiencyYearlyLoss] = useState({ loss: true, all: true })
  const [showEfficiencyMonthlyLoss, setShowEfficiencyMonthlyLoss] = useState({
    smbNo1: true,
    smbNo2: true,
    smbNo3: true,
    smbNo4: true,
    smbNo5: true,
    smbNo6: true,
    smbNo7: true,
    smbNo8: true,
    smbNo9: true,
    smbNo10: true,
    smbNo11: true,
    smbNo12: true,
    all: true
  })

  const { inverterSmbYearlyLoss, loading, error } = useSelector(state => state.inverterSmbYearlyLoss)
  const { inverterSmbMonthlyLoss, loading2, error2 } = useSelector(state => state.inverterSmbMonthlyLoss)

  const dispatch = useDispatch();
  const location = useLocation();

  const downloadRef1 = useRef(null)
  const downloadRef2 = useRef(null)

  const graphRef1 = useRef(null)
  const graphRef2 = useRef(null)

  useEffect(() => {
    const pathKeywords = location.pathname.split('/')

    let SMB = pathKeywords[5].split("")?.reduce((acc, curr) => {
      if (acc >= '0' && acc <= '9') return acc + curr;
      else return curr;
    }, "")
    setInverter(pathKeywords[4][pathKeywords[4]?.length - 1]);
    setSmb(SMB)
    dispatch(InverterSmbYearlyLoss(pathKeywords[4][pathKeywords[4]?.length - 1], SMB));
    dispatch(InverterSmbMonthlyLoss(pathKeywords[4][pathKeywords[4]?.length - 1], SMB));
  }, [dispatch, location])

  return (
    <>
      {loading ? <SpinLoader /> :
      <Grid container lg={12} boxSizing={"border-box"} spacing={2} gap={2} marginTop={2}>
        {/* <Grid item lg={12} style={{ display: "flex", justifyContent: "center" }}> */}
        <Grid item lg={11.7}
          borderRadius={"14px"}
          boxSizing={"border-box"}
          style={{
            background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
            margin: "auto",
            marginLeft: "2.3rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem"
          }}>

          <Grid lg={12}
            style={{
              background: "white",
              borderRadius: "14px"
            }}
          >

            <div
              style={{
                height: "max-content",
                width: "max-content",
                position: "relative"
              }}
            >
              <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "-10px", top: "8px" }}>
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
                data={inverterSmbYearlyLoss?.data?.reduce((acc, curr) => {
                  acc.push({
                    Month: curr.name,
                    LossPercentage: curr.loss
                  })
                  return acc;
                }, []) || []}
                filename='data.csv'
                className='hidden'
                target='_blank'
                ref={downloadRef1}
              />

              <h3 style={{ textAlign: "center" }}>
                SMB (String) Average Yearly Loss
              </h3>
              <ComposedChart

                width={1400}
                height={500}
                data={inverterSmbYearlyLoss?.data || []}
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
                  fontSize={15} fontWeight={600}
                  tickLine={false} axisLine={false} tickMargin={4}
                />

                <YAxis yAxisId="left-axis"

                  dataKey={() => (Math.ceil(inverterSmbYearlyLoss?.maxValue)) === 0 ? 0 : Math.ceil(inverterSmbYearlyLoss?.maxValue) + 1 || 0}
                  domain={[Math.floor(inverterSmbYearlyLoss?.minValue) - 1 || 0, 'dataMax']}
                  tickLine={false}

                />
                <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Loss"]} />} />
                <Legend
                  content={<CustomizeLegend active={false} payload={[]} LegendValues={["Loss"]} data={showEfficiencyYearlyLoss} setData={setShowEfficiencyYearlyLoss} />}
                />
                <Bar
                  hide={showEfficiencyYearlyLoss.loss ? false : true}
                  dataKey="loss"
                  barSize={42}
                  // fill="#122b4f"
                  fill={`${colors3[0]}`}
                  yAxisId="left-axis"
                >
                  <LabelList dataKey="loss" position="top" fontSize={"0.65rem"} fontWeight={600} fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" />


                </Bar>
              </ComposedChart>
            </div>
          </Grid>
        </Grid>

        <Grid item lg={11.7}
          borderRadius={"14px"}
          boxSizing={"border-box"}
          style={{
            background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
            margin: "auto",
            marginLeft: "2.3rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem"
          }}>

          <Grid lg={12}
            style={{
              background: "white",
              borderRadius: "14px"
            }}
          >


            <div
              style={{
                height: "max-content",
                width: "max-content",
                position: "relative"
              }}
            >
              <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "-10px", top: "8px" }}>
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
              data={inverterSmbMonthlyLoss?.data || []}
                filename='data.csv'
                className='hidden'
                target='_blank'
                ref={downloadRef2}
              />

              <h3 style={{ textAlign: "center" }}>
              SMB (String) Average Monthly Loss
              </h3>
              <ComposedChart

                width={1400}
                height={500}
                data={inverterSmbMonthlyLoss?.data || []}
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
                  fontSize={15} fontWeight={600}
                  tickLine={false} axisLine={false}  tickMargin={4}
                />

                <YAxis yAxisId="left-axis"

                  dataKey={() => (Math.ceil(inverterSmbMonthlyLoss?.maxValue)) === 0 ? 0 : Math.ceil(inverterSmbMonthlyLoss?.maxValue) + 1 || 0}
                  domain={[Math.floor(inverterSmbMonthlyLoss?.minValue) - 1 || 0, 'dataMax']}
                  tickLine={false}

                />
                <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""}

                  TooltipValues={[`smb${inverter}_${smb}_1`, `smb${inverter}_${smb}_2`, `smb${inverter}_${smb}_3`, `smb${inverter}_${smb}_4`, `smb${inverter}_${smb}_5`,
                  `smb${inverter}_${smb}_6`, `smb${inverter}_${smb}_7`, `smb${inverter}_${smb}_8`, `smb${inverter}_${smb}_9`, `smb${inverter}_${smb}_10`,
                  `smb${inverter}_${smb}_11`, `smb${inverter}_${smb}_12`]}
                />} />
                <Legend
                  content={<CustomizeLegend active={false} payload={[]}
                    LegendValues={[`smb${inverter}_${smb}_1`, `smb${inverter}_${smb}_2`, `smb${inverter}_${smb}_3`, `smb${inverter}_${smb}_4`, `smb${inverter}_${smb}_5`,
                    `smb${inverter}_${smb}_6`, `smb${inverter}_${smb}_7`, `smb${inverter}_${smb}_8`, `smb${inverter}_${smb}_9`, `smb${inverter}_${smb}_10`,
                    `smb${inverter}_${smb}_11`, `smb${inverter}_${smb}_12`]}
                    data={showEfficiencyMonthlyLoss} setData={setShowEfficiencyMonthlyLoss} />}
                />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo1 ? false : true} dataKey={`smb${inverter}_${smb}_1`}  fill={getColourPicker(0)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo2 ? false : true} dataKey={`smb${inverter}_${smb}_2`}  fill={getColourPicker(1)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo3 ? false : true} dataKey={`smb${inverter}_${smb}_3`}  fill={getColourPicker(2)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo4 ? false : true} dataKey={`smb${inverter}_${smb}_4`}  fill={getColourPicker(3)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo5 ? false : true} dataKey={`smb${inverter}_${smb}_5`}  fill={getColourPicker(4)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo6 ? false : true} dataKey={`smb${inverter}_${smb}_6`}  fill={getColourPicker(5)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo7 ? false : true} dataKey={`smb${inverter}_${smb}_7`}  fill={getColourPicker(6)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo8 ? false : true} dataKey={`smb${inverter}_${smb}_8`}  fill={getColourPicker(7)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo9 ? false : true} dataKey={`smb${inverter}_${smb}_9`}  fill={getColourPicker(8)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo10 ? false : true} dataKey={`smb${inverter}_${smb}_10`}  fill={getColourPicker(9)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo11 ? false : true} dataKey={`smb${inverter}_${smb}_11`}  fill={getColourPicker(10)} yAxisId="left-axis" />
                <Bar hide={showEfficiencyMonthlyLoss.smbNo12 ? false : true} dataKey={`smb${inverter}_${smb}_12`}  fill={getColourPicker(11)} yAxisId="left-axis" />

              </ComposedChart>
            </div>

          </Grid>
        </Grid>
      </Grid>
       } 
    </>
  );
};

export default SCBSMB;


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
