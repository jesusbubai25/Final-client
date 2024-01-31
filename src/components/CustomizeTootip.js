import React, { Fragment } from 'react'

const CustomizeTootip = ({ active, payload, label, TooltipValues }) => {
    if (active && payload?.length) {
        return (
            <div style={{  backgroundColor: "white", display:"flex",flexDirection:"column",gap:"0.2rem",color: "black", padding: "0.6rem", opacity: "1.3", boxShadow: "2px 2px 3px black" }}>
                <span>{label}</span>
                {payload?.map((ele, index) => {
                    return (
                        < Fragment key={index}>
                            <small style={{ color: `${ele.color}` }} > {TooltipValues[index]} : {ele.value} </small>
                        </Fragment>
                    )
                })}
            </div>
        )
    } else return null;
}

export default CustomizeTootip