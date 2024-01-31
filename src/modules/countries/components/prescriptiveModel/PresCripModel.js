import React, { useRef, useState } from "react";
import "../CountryDefault.css";
import CountryHeader from "../CountryHeader";
import Table from "../../../../components/Table";
import Charts from "../../../../components/Charts";
import LineBarChart from "../../../../components/LineBarChart";
import { Grid } from "@mui/material";
import Printer from "../../../../components/Printer";
import ProjectDetailsHeader from "../ProjectDetails/ProjectDetailBody";
import CountryHeader2 from "../ProjectDetails/CountryHeader2";
import { Bar, BarChart, CartesianGrid, LabelList, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { colors3 } from "../../../../colors/color";
import CustomizeTootip from "../../../../components/CustomizeTootip";
import CustomizeLegend from "../../../../components/CustomizeLegend";
import { CSVLink } from "react-csv";
import { saveToSvg } from "../diagonistic/SCBSMB";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver'

const data = [
  {
    name: "Module",
    Loss: 5.25,
    // fill: "#FF0000"
    fill: "#de425b"
  },
  {
    name: "Soiling",
    Loss: 3.5,
    // fill:"rgb(227, 94, 27)"
    fill: "#e18745"
  },
  {
    name: "Shadow",
    Loss: 1.3,
    // fill: "#FFA500"
    fill: "#dac767"
  },
  {
    name: "Resistance",
    Loss: 1,
    // fill:"rgb(223, 200, 51)"
    fill: "#78ab63"
  },
  {
    name: "Overheating",
    Loss: 1,
    // fill: "rgb(27, 84, 227)"
    // fill: "rgb(24, 134, 245)"
    // fill:"rgb(252, 237, 107)" 
    // fill:"rgb(94, 216, 253)"
    fill: "#488f31"
  },
];

const PresCripModel = () => {
  const [dataSet, setDataSet] = useState(data);
  const [showCheckBox, setShowCheckBox] = useState({
    Module: true,
    Soiling: true,
    Shadow: true,
    Resistance: true,
    Overheating: true,
  });

  const [showLoss, setShowLoss] = useState({
    loss: true,
    all: true
  })
  const lossDownloadRef = useRef(null)
  const downloadRef1=useRef(null)

  const onChangeCheckBox = ({ name }) => {

    try {
      const newData1 = data?.filter((item) => {
        if (item?.name != name) {
          if (showCheckBox[item?.name]) return item;
        } else {
          if (!showCheckBox[item?.name]) return item;
        }
      });

      const checked = { ...showCheckBox };
      checked[name] = !checked[name];
      setShowCheckBox(checked);
      setDataSet(newData1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className="country-header"> */}
      {/* <ProjectDetailsHeader/> */}
      {/* <CountryHeader /> */}
      {/* <CountryHeader2/> */}
      {/* </div> */}
      <div>
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-around" }}
          paddingBottom={2}
        >
          <Grid
            item
            lg={6}
            style={{ borderStyle: "solid", borderColor: "#ed7d31", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Table onChange={onChangeCheckBox} />
            </div>
          </Grid>
          <Grid
            item
            lg={5.5}
            style={{
              padding: "1.5rem",
              background: "linear-gradient(to bottom, rgb(3, 99, 125),rgb(4, 128, 162),rgb(4, 135, 172))",
              borderRadius: "14px"
            }}
          >
            <div style={{ borderRadius: "14px", background: "white", paddingBottom: "1rem", position: "relative" }}>

              <CSVLink
                data={dataSet?.reduce((acc, curr) => {
                  acc.push({
                    name: curr.name,
                    LossPercentage: curr.Loss
                  })
                  return acc;
                }, []) || []}
                filename='data.csv'
                className='hidden'
                ref={lossDownloadRef}
                target='_blank'
              />

              <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
                <Printer clickhandler={() => lossDownloadRef.current.link.click()}

                  jpgDownload={() => {
                    setTimeout(async () => {
                      const canvas = await html2canvas(downloadRef1.current.container);
                      const dataURL = canvas.toDataURL('image/jpg');
                      saveAs(dataURL, 'graph.jpg')
                    }, 100);
                  }}
                  svgDownload={async () => {
                    const svgData = await saveToSvg(downloadRef1.current.container)
                    saveAs(svgData, 'graph.svg')
                  }}

                />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", boxSizing: "border-box", paddingTop: "1rem" }}>

                <h3 style={{ textAlign: "center" }}>
                  Actual PR
                </h3>



                <div style={{ boxSizing: "border-box" }}>

                  <BarChart width={600} height={490} data={dataSet || []} ref={downloadRef1} >

                    <XAxis fontSize={12} interval={0} dataKey="name" tickLine={false} axisLine={false} tickMargin={5}

                    />
                    {/* <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" /> */}
                    <CartesianGrid stroke="grey" strokeWidth={0.2} />


                    <YAxis type="number"
                      dataKey={() => Math.ceil(dataSet?.reduce((acc, curr, index) => curr.Loss > acc ? curr.Loss : acc, -Infinity)) + 1}
                      domain={[Math.floor(dataSet?.reduce((acc, curr, index) => curr.Loss < acc ? curr.Loss : acc, Infinity)) - 1, 'dataMax']}
                      tickLine={false} tickMargin={8}
                    />
                    <Legend content={<CustomizeLegend active={false} payload={[]} label={""} LegendValues={["Loss"]} data={showLoss} setData={setShowLoss} />}
                    />
                    <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={["Loss"]} />} contentStyle={{ fontSize: "0.7rem" }} />

                    {
                      <Bar barSize={50} spacing={0.5} hide={showLoss.loss ? false : true} dataKey="Loss" fill={colors3[0]} onTransitionEnd={"1s all"} >
                        <LabelList dataKey="Loss" position="top" fontSize={"1.2rem"} fontWeight={600} fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" />
                      </Bar>
                    }

                  </BarChart>
                </div>

              </div>

            </div>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                backgroundColor:"white",
                borderRadius:"14px"
              }}
            >

              {
                dataSet?.length > 0 ?
                  <Charts
                    data={dataSet}
                    width={560}
                    height={500}
                    title="Loss Contribution"
                    xdataKey="name"
                    YAxisLabel="Percentage of Losses"
                    position={0}
                  />
                  :
                  <h3>Select an option to view Graph</h3>
              }
            </div> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PresCripModel;
