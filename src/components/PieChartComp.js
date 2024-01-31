/* import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#ed7d31", "#122b4f", "#047e7ef7", "#FF8042"];

export default function PieChartComp(props) {
  return (
    <PieChart
      width={props?.width}
      height={props?.height}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Pie
        data={props?.data}
        cx={450}
        cy={200}
        innerRadius={100}
        outerRadius={150}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        <h3 style={{ textAlign: "center" }}>{props?.title}</h3>
        {props?.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
} */

import React, { useCallback, useContext, useEffect, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { colors1 } from "../colors/color";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const RenderActiveShape = (prop) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = prop;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";
  prop?.setRate((percent * 100).toFixed(2))
  return (
    <g>
      <text style={{ color: "black", fontWeight: "700", fontSize: "0.9rem" }} x={cx} y={cy} dy={8} textAnchor="middle" >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={"#047e7ef7"}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"  />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#122b4f"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#122b4f"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function PieChartComp(props) {
  const [Rate, setRate] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      props.setPercentage((_?.percent * 100).toFixed(2))
      setActiveIndex(index);
    },
    [setActiveIndex, props]
  );

  props?.setname(props?.data[activeIndex].name)
  props?.setValue(props?.data[activeIndex].value)
  props?.setPercentage(Rate)


  return (
    <PieChart width={props?.width} height={props?.height}>
      <Pie
        activeIndex={activeIndex}
        activeShape={<RenderActiveShape setRate={setRate} />}
        data={props?.data}
        cx={450}
        cy={200}
        innerRadius={100}
        outerRadius={170}
        // fill="#ed7d31"
        fill={colors1[2]}
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}
