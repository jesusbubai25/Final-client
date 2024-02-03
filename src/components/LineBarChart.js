import React, { useRef } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { colors1, colors3 } from "../colors/color";
import Printer from "./Printer";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver';
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";
import CustomizeTootip from "./CustomizeTootip";
import CustomizeLegend from "./CustomizeLegend";


export default function LineBarChart(props) {
  const storeElem = useRef(null)
  const csvRef = useRef(null)

  //Jpg download
  const jpgDownload = () => {
    setTimeout(async () => {
      const canvas = await html2canvas(storeElem.current);
      const data = canvas.toDataURL();
      saveAs(data, 'graph.jpg')
    }, 100);
  }

  //   const jpgDownload = async () => {
  //   let chartSVG = ReactDOM.findDOMNode(storeElement).children[0]
  //   // let chartSVG =document.getElementsByClassName("recharts-wrapper")[0]
  //     console.log("value is ",chartSVG)
  //   const pngData = await svgToJpg(chartSVG, props?.width, props?.height)
  //   saveAs(pngData, 'graph.jpg')
  // }

  //Csv download
  const csv_Download = () => {
    csvRef.current.link.click()
  }

  //Svg download

  const svgDownload = async () => {
    let chartSVG = document.getElementsByClassName("recharts-wrapper")[props?.position];
    console.log(chartSVG)
    const svgData = await saveToSvg(chartSVG, props?.width, props?.height)
    console.log("svg data is ", svgData)
    saveAs(svgData, 'graph.svg')

  }

  const CSV_Data = () => {
    let newarr = [];
    let str = "dataKey"
    let i = 1;
    while (props && props[str + `${i}`]) {
      newarr.push(str + `${i}`);
      i++;
    }
    return props.data?.reduce((acc, curr) => {
      return (
        [...acc, {
          month: curr.name,
          [props?.dataKey1]: curr[props?.dataKey1],
          [props?.dataKey2]: curr[props?.dataKey2],
          [props?.dataKey3]: curr[props?.dataKey3]
        }]
      )

    }, [])
  }
  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: Math.round,
        anchor: "end",
        offset: -20,
        align: "start"
      }
    },
    legend: {
      display: false
    }
  };

  if (!props?.data) return null;
  return (
    <div
      style={{
        height: "max-content",
        width: "max-content",
        // position:"relative"
      }}
      ref={storeElem}
    >
      {!props.hidePrintIcon &&
        <div style={{ width: "100%", textAlign: "end", position: "absolute", right: "10px", top: "20px" }}>
          <Printer jpgDownload={jpgDownload} clickhandler={csv_Download} svgDownload={svgDownload} />
        </div>
      }
      <CSVLink
        data={CSV_Data(props?.data)}
        filename='data.csv'
        className='hidden'
        ref={csvRef}
        target='_blank'
      />

      <h3 style={{ textAlign: "center" }}>
        {props?.title}
      </h3>
      <ComposedChart
        width={props?.width}
        height={props?.height}
        data={props?.data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}

         options={options}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          fontSize={10} fontWeight={600}
        // label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
        // scale="band"
        />

        <YAxis tickFormatter={(v) => v >= 1000 ? parseFloat(v / 1000) + "k" : v} yAxisId="left-axis" label={{ value: `${props?.y_axis_label_value1 || ""}`, angle: -90, position: "insideBottomLeft" }} />
        <YAxis

          yAxisId="right-axis"
          orientation="right"
          label={{
            value: `${props?.y_axis_label_value2 || ""}`,
            angle: -90,
            position: "insideTopRight",
            color: "yellow"
          }}

        />
        {/* anchor: "end",
offset: -20,
align: "start" */}
        {props?.TooltipValues ?
          <Tooltip content={<CustomizeTootip active={false} payload={[]} label={""} TooltipValues={props?.TooltipValues} />} /> :
          <Tooltip />}
        {/* <Tooltip content={({ payload }) => {
        return (
          <Button
           size="small"
           >
          </Button>
        );
      }} /> */}


        {/* data.map(
         (item, index) => ({
             id: item.name,
              type: "square",
              value: `${item.name} (${item.value}%)`,
             color: colors[index % colors.length]
             })
          ) */}

        {props?.LegendValues ? <Legend
        
          content={<CustomizeLegend active={false} payload={[]} LegendValues={props?.LegendValues}
          
           />}
        /> :

          <Legend />}
        {props?.value1 && (
          <Bar
            dataKey={props?.dataKey1}
            barSize={props?.barsize || 20}
            // fill="#122b4f"
            fill={`${colors3[0]}`}
            yAxisId="left-axis"


          />
        )}
        {props?.value2 && (
          <Bar

            dataKey={props?.dataKey2}
            barSize={props?.barsize || 20}
            // fill="#ed7d31"
            fill={`${colors3[1]}`}
            yAxisId="left-axis"
          />
        )}
        {props?.value3 && (
          <Line
            type="monotone"
            dataKey={props?.dataKey3}
            strokeWidth={3}
            // stroke="#047e7ef7"
            stroke={`${colors1[4]}`}
            yAxisId="right-axis"
          />
        )}
      </ComposedChart>
    </div>
  );
}


//Save To Jpg

const svgToJpg = (svg, width, height) => {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    let xml = new XMLSerializer().serializeToString(svg);
    let dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(xml);
    let img = new Image(width, height);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      let imageData = canvas.toDataURL('image/jpg', 1.0);
      resolve(imageData)
    }
    img.onerror = () => reject();
    img.src = dataUrl;
  });
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

//colors1- Index - [3,2,4]
//colors2- Index - [1,2,3]
