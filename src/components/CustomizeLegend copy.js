import React, { Fragment } from 'react'
import './Customize.css'

const CustomizeLegend = ({ active, payload, LegendValues,showPR,setShowPR }) => {

    if (payload?.length) {
        return (
            <span style={{ backgroundColor: "white", color: "black", display: "flex", alignItems: "center",boxSizing:"border-box", justifyContent: "center", margin: "0", padding: "0" }}>
                {payload?.map((ele, index) => {
                    return (
                        <div  onClick={()=>setShowPR(!showPR)} key={index} style={{ display: "flex", boxSizing: "border-box", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ height: "10px", width: "10px", background: `${ele.color}`,boxSizing:"border-box",marginTop:"0.150rem"}}></span>
                            <li style={{ color: `${ele.color}`, listStyleType: "square",
                             padding: "0 0.5rem",boxSizing:"border-box",textDecoration:showPR?"none":"line-through"}} key={index}> {LegendValues[index]} </li>
                        </div>
                    )
                })}
            </span>
        )
    } else return null;
}

export default CustomizeLegend