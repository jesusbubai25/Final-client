import React, { memo, useEffect, useState } from 'react'
import GaugeChart from 'react-gauge-chart'
import ReactApexChart from 'react-apexcharts'
import ReactSpeedometer from "react-d3-speedometer";
import { colors1 } from '../../../../colors/color';



const GaugeChartComp = (props) => {

  console.log(props.value)

  const [series, setSeries] = useState([props.value]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          // value: {
          //   valueToPercent(val) {
          //     return (val * 100) / max
          //   },

          //   color: '#111',
          //   fontSize: '20px',
          //   show: true,
          // }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
  })





  useEffect(() => {

  }, [props])

  return (
    // <GaugeChart
    //   id={props.id}
    //   // nrOfLevels={4}
    //   // colors={props?.colors || ['#EA4228', '#F5CD19', '#5BE12C']}
    //   colors={['rgb(227, 86, 86)', 'rgb(247, 227, 13)', 'rgb(76, 226, 156)', 'rgb(13, 247, 138)']}
    //   arcWidth={0.2}
    //   percent={props.value || 0}
    //   style={{ width: "90%", fontSize: "0.1rem" }}
    //   textColor="black"
    //   formatTextValue={(value) => value + ""}

    // />
    // <div >
    //   <ReactApexChart options={options} series={series} type="radialBar" height={170} width={150} />
    // </div>

    <ReactSpeedometer
      maxValue={props?.maxValue}
      minValue={props?.minValue}
      value={props?.value}
      needleHeightRatio={0.58}

      // segmentColors={["red","blue","yellow"]}
      // segmentColors={["#00D2FC","#00E1ED","#22EED1","#78F6AD","#B9FA8A","#F9F871"]}
      // segmentColors={[colors3[0],colors3[1],colors3[2],colors3[3],colors3[4],colors3[5]]}
      startColor={`${"#188fa7"}`}
      // needleColor={`${colors1[1]}`}
      endColor={`${colors1[2]}`}
      height={150}
      width={200}
      needleTransition="easeSinIn"
      ringWidth={20}
      segments={1}
      needleColor='#10126d'


    // fluidWidth={true} // For Responsive. It will take parent div height,width
    />

  )
}

export default memo(GaugeChartComp)