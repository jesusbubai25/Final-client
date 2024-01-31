import React, { Fragment, useEffect } from 'react'
import './Customize.css'

const CustomizeLegend = ({ active, payload, LegendValues, data, setData }) => {

    let keys = data && Object.keys(data) || [];

    const changeData = (val) => {
        if (val === "all") {
            let newData = { ...data };
            newData[val] = !newData[val]

            for (let i in newData) {
                if (newData[val]) newData[i] = true;
                else newData[i] = false;
            }
            setData(newData);
        } else {
            let newData = { ...data };
            newData[val] = !newData[val]
            let check = false;
            for (let i in newData) {
                if (i != "all") {
                    if (newData[i]) check = true;
                }
            }
            if (check) newData["all"] = true;
            else newData["all"] = false;
            setData(newData);
        }
    }

    if (payload?.length && keys?.length > 0) {
        return (
            <span id='legend' style={{ backgroundColor: "white", color: "black", display: "flex", alignItems: "center", boxSizing: "border-box", justifyContent: "center", margin: "0", padding: "0" }}>
                {payload?.map((ele, index) => {
                    return (
                        <div onClick={() => changeData(keys[index])} key={index} style={{zIndex:10, display: "flex", boxSizing: "border-box", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ height: "10px", width: "10px", background: `${ele.color}`, boxSizing: "border-box", marginTop: "0.1rem" }}></span>
                            <span style={{
                                color: `${ele.color}`, listStyleType: "square",
                                padding: "0 0.5rem", boxSizing: "border-box", textDecoration: data[keys[index]] ? "none" : "line-through"
                            }} key={index}> {LegendValues[index]} </span>
                        </div>
                    )
                })}
                {keys?.length > 2 &&
                    <div onClick={() => changeData("all")} style={{ display: "flex", boxSizing: "border-box", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ height: "10px", width: "10px", background: `red`, boxSizing: "border-box", marginTop: "0.150rem" }}></span>
                        <span style={{
                            color: `red`, listStyleType: "square",
                            padding: "0 0.5rem", boxSizing: "border-box", textDecoration: data["all"] ? "none" : "line-through"
                        }}>Select All </span>
                    </div>
                }
            </span>
        )
    } else if (payload?.length) {
        return (
            <span style={{ backgroundColor: "white", color: "black", display: "flex", alignItems: "center", boxSizing: "border-box", justifyContent: "center", margin: "0", padding: "0" }}>
                {payload?.map((ele, index) => {
                    return (
                        <div key={index} style={{ display: "flex", boxSizing: "border-box", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ height: "10px", width: "10px", background: `${ele.color}`, boxSizing: "border-box", marginTop: "0.150rem" }}></span>
                            <li style={{
                                color: `${ele.color}`, listStyleType: "square",
                                padding: "0 0.5rem", boxSizing: "border-box"
                            }} key={index}> {LegendValues[index]} </li>
                        </div>
                    )
                })}
            </span>
        )

    } return null;

}

export default CustomizeLegend