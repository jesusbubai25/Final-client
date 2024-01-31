import React, { memo, useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Printer from "./Printer";
import { CSVLink } from 'react-csv'
import ReactDOM from 'react-dom'
import { saveAs } from 'file-saver';
import html2canvas from "html2canvas";
import { colors1, colors3 } from "../colors/color";
import domtoimage from 'dom-to-image';
import fileDownload from "js-file-download";

// const colours = ["#122b4f", "#ed7d31", "#047e7ef7", "rgb(32, 148, 243)"];
const colours = colors1;


const Charts = (props) => {

  const [data, setData] = useState(props?.data);
  let keys;
  if (props.data?.length > 0) {
    keys = Object.keys(props?.data[0])?.filter((i) => i != "name");
  }
  const downloadRef = useRef(null)
  const chartRef = useRef(null)
  const [storeElement, setstoreElement] = useState(null)
  useEffect(() => {
    setData(props?.data);

  }, [props?.data]);

  if (!props.data && props.data.length < 1) return;

  //Csv Download
  const clickhandler = () => {
    downloadRef.current.link.click();
  }

  // JPG Download
  const jpgDownload = async () => {
    // let chartSVG = ReactDOM.findDOMNode(storeElement).children[0]
    // const pngData = await svgToJpg(chartSVG, props?.width, props?.height)
    // saveAs(pngData, 'graph.jpg')
    domtoimage.toBlob(storeElement, { bgcolor: "white" })
      .then(function (blob) {
        fileDownload(blob, 'dom-to-image.png');
      });

  }

  // SVG Download
  const svgDownload = async () => {
    let chartSVG = document.getElementsByClassName("recharts-wrapper")[props?.position];
    const svgData = await saveToSvg(chartSVG, props?.width, props?.height)
    saveAs(svgData, 'graph.svg')

  }
  return (

    <div
      style={{
        height: "max-content",
        width: "max-content",
        // borderStyle: "solid",
        // borderColor: "#ed7d31",
        // borderColor: colours[3],
        // borderWidth: "3px",
        // borderRadius: "5px",
        // padding: "0.8rem 0"
        paddingBottom:"0.8rem"


      }}

    >
      <div

      style={{
        height: "max-content",
        width: "max-content",
        // padding: "0.8rem 0"
        // paddingTop:"0.8rem",
        paddingBottom:"0.5rem",
        // border:"2px solid black"

      }}

        ref={(chart) => setstoreElement(chart)}

      >

        <Printer clickhandler={clickhandler} jpgDownload={jpgDownload} svgDownload={svgDownload} />

        <CSVLink
          data={data}
          filename='data.csv'
          className='hidden'
          ref={downloadRef}
          target='_blank'
        />
        <h3
          style={{
            textAlign: "center",
          }}
        >
          <span>{props?.title}</span>
        </h3>
        <BarChart
          ref={(chart) => setstoreElement(chart)}
          width={props?.width}
          height={props?.height}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis interval={0} fontSize={12} fontWeight={600} dataKey={props?.xdataKey} />

          {props.size ?
            // <YAxis label={{ value: props?.YAxisLabel, angle: -90 }} tickCount={10}   domain={[props.size?.minValue,`dataMax+1.22`] } allowDataOverflow={true}/>
            <YAxis type="number" dataKey={() => parseInt(props.size.maxValue)} tickCount={11} domain={[props.size?.minValue, `dataMax`]} />
            :
            <YAxis label={{ value: props?.YAxisLabel, angle: -90 }} />
          }
          <Tooltip />
          <Legend display={true} />
          {keys?.length > 0 && keys?.map((item, index) => {
            if (item === "Inverter1") {
              if (props?.m_checkBoxChecked?.m_Inverter1) {
                return <Bar key={index}  dataKey={item} fill={getColourPicker(index)} />;
              }
            }
            else if (item === "Inverter2") {
              if (props?.m_checkBoxChecked?.m_Inverter2) {
                return <Bar key={index} dataKey={item} fill={getColourPicker(index)} />;
              }
            }
            else if (item === "Inverter3") {
              if (props?.m_checkBoxChecked?.m_Inverter3) {
                return <Bar key={index} dataKey={item} fill={getColourPicker(index)} />;
              }
            }
            else if (item === "Inverter4") {
              if (props?.m_checkBoxChecked?.m_Inverter4) {
                return <Bar key={index} dataKey={item} fill={getColourPicker(index)} />;
              }
            } else if (item === "Actual_GHI") {
              if (props?.Ghi_Gti_data?.actual_GHI) {
                return <Bar key={index} dataKey={item} fill={getColourPicker(index)} />;
              }
            } else if (item === "Actual_GTI") {
              if (props?.Ghi_Gti_data?.actual_GTI) {
                return <Bar key={index} dataKey={item} fill={getColourPicker(index)} />;
              }
            } else if (item === "pvsyst_GHI") {
              if (props?.Ghi_Gti_data?.pvsyst_GHI) {
                return <Bar key={index} dataKey={item} fill={getColourPicker(index)} />;
              }
            } else if (item === "pvsyst_GTI") {
              if (props?.Ghi_Gti_data?.pvsyst_GTI) {
                return <Bar key={index} dataKey={item} fill={getColourPicker(index)} />;
              }
            }
            else {
              if (item != "fill") {
                return <Bar key={index}  dataKey={item}

                  fill={getColourPicker(index)}
                />;
              }

            }
          })}
        </BarChart>
      </div>
      {props?.children}

    </div>
  );
}
const getRandomNumber = () => {
  try {
    return Math.round(Math.random() * 9);
  } catch (error) {
    console.log(error);
  }
};

const getRandomLetter = () => {
  try {
    const charList = "ABCDEFabcdef";
    const index = Math.round(Math.random() * (charList?.length - 1));
    return charList[index];
  } catch (error) {
    console.log(error);
  }
};
export const getColourPicker = (index) => {
  const hexColourLength = 6;
  let colourCode = "#";
  try {
    if (index < colors3.length) return colors3[index];
    else {
      for (let i = 0; i < hexColourLength; i++) {
        const isLetter = Math.round(Math.random());
        if (isLetter) {
          colourCode = colourCode + getRandomLetter();
        } else {
          colourCode = colourCode + getRandomNumber();
        }
      }
      return colourCode;
    }
  } catch (error) {
    console.log(error);
  }
};


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

//Save To Svg
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

export default memo(Charts)
