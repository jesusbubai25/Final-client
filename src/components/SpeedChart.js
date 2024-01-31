import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { colors1, colors3 } from "../colors/color";

const SpeedChart = (props) => {
  return (
    <div>
      <ReactSpeedometer
        maxValue={props?.maxValue || 0}
        minValue={props?.minValue || 0}
        value={props?.value || 0}
        segments={props?.segments}
        segmentColors={["#00D2FC","#00E1ED","#22EED1","#78F6AD","#B9FA8A","#F9F871"]}
        // segmentColors={[colors3[0],colors3[1],colors3[2],colors3[3],colors3[4],colors3[5]]}
        // startColor={`${colors1[3]}`}
        // needleColor={`${colors1[1]}`}
        // endColor={`${colors1[2]}`}
        height={250}
        width={400}
        needleTransition="easeSinIn"
        ringWidth={70}
        
      // fluidWidth={true} // For Responsive. It will take parent div height,width
      />
      <h3 style={{ textAlign: "center" }}>
        {props?.title}
      </h3>
    </div>
  );
};

export default SpeedChart;
