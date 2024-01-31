import React, { useEffect, useRef, useState } from "react";
import "../CountryHeader.css";
import GreenLogo from "../../../../newLogo.PNG";
import { useNavigate } from "react-router-dom";
import PageURL from "../../../../constants/PageURL";
import '../../../../components/Dropdown.css'

import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from "@mui/material";
import CountryDefaultBody from "../CountryDefaultBody";

const data1 = [
    {
        country: "India",
        projectName: [
            {
                name: "Bhajanghat",
                blocks: [
                    {
                        name: "block_1",
                        details: [
                            {
                                header: "Details",
                                subHeader: ["PorjectOverView", "GenerationSummery", "PrecriptiveModel"]
                            },
                            {
                                header: "DiagnosticModel",
                                subHeader: ["DetailSummery", "LossFlowDiagram"]

                            },
                            {
                                header: "Inverters",
                                subHeader: ["InverterEfficiency"]
                            },
                            {
                                header: "Inverter1",
                                subHeader: ["SCB/SMB1", "SCB/SMB2", "SCB/SMB3", "SCB/SMB4", "SCB/SMB5",
                                    "SCB/SMB6", "SCB/SMB7", "SCB/SMB8", "SCB/SMB9", "SCB/SMB10", "SCB/SMB11"]
                            },
                            {
                                header: "Inverter2",
                                subHeader: ["SCB/SMB1", "SCB/SMB2", "SCB/SMB3", "SCB/SMB4", "SCB/SMB5",
                                    "SCB/SMB6", "SCB/SMB7", "SCB/SMB8", "SCB/SMB9", "SCB/SMB10", "SCB/SMB11"]
                            },
                            {
                                header: "Inverter3",
                                subHeader: ["SCB/SMB1", "SCB/SMB2", "SCB/SMB3", "SCB/SMB4", "SCB/SMB5",
                                    "SCB/SMB6", "SCB/SMB7", "SCB/SMB8", "SCB/SMB9", "SCB/SMB10", "SCB/SMB11"]
                            },
                            {
                                header: "Inverter4",
                                subHeader: ["SCB/SMB1", "SCB/SMB2", "SCB/SMB3", "SCB/SMB4", "SCB/SMB5",
                                    "SCB/SMB6", "SCB/SMB7", "SCB/SMB8", "SCB/SMB9", "SCB/SMB10", "SCB/SMB11"]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    // , {
    //     country: "Uk",
    //     projectName: ["uk_Project1", "uk_Project2", "uk_Project3", "uk_Project4"],
    //     block: ["uk_block1", "uk_block2"]

    // }, {
    //     country: "France",
    //     projectName: ["Project1", "Project2", "Project3", "Project4"],
    //     block: ["block1", "block2"],

    // }, {
    //     country: "India",
    //     projectName: ["Italy", "Project2", "Project3", "Project4"],
    //     block: ["block1", "block2"],

    // }, {
    //     country: "Thailand",
    //     projectName: ["Project1", "Project2", "Project3", "Project4"],
    //     block: ["block1", "block2"],

    // }
]


const ProjectDetailBody = (props) => {

    const navigate = useNavigate();
    const [data, setdata] = useState(data1)
    const [country, setCountry] = useState("")
    const [projectName, setprojectName] = useState("")
    const [block, setBlock] = useState("")
    const [projectDetail, setProjectDetail] = useState("")

    const handleChange1 = (event) => {

    };
    const handleChange2 = (event) => {
        setprojectName(event.target.value)
    };
    const handleChange3 = (event) => {
        setBlock(event.target.value)
    };

    const [checkedData, setCheckedData] = React.useState({
        projectDetail: false,
        Diagonistic: false,
        Inverter: false,
        Inverter1: false,
        Inverter2: false,
        Inverter3: false,
        Inverter4: false,
        checkedData: false

    })
    const onclickHandler = (name) => {
        let checked = { ...checkedData };
        for (let key in checked) {
            if (key === name) {
                checked[key] = !checked[key];
            } else {
                checked[key] = false
            }
        }
        setCheckedData(checked)
    }
 

    useEffect(() => {

    }, [country])

    return (
        <div className="country-body">
        <CountryDefaultBody/>

        </div>
        // <div className="header" style={{ justifyContent: "space-around" }}>
        //     <div className="logo">
        //         <img onClick={() => navigate(PageURL.COUNTRYDEFAULT)}
        //             src={GreenLogo}
        //             style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
        //             alt="Greenenco-Logo"
        //         />
        //     </div>

        //     <div className="title" style={{ width: "80%", justifyContent: "space-between" }}  >
        //         <div>
        //             <h1 style={{ color: "#ed7d31", fontSize: "140%" }}>
        //                 Creating Climate To Live In A Better World
        //             </h1>
        //         </div>
        //         <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>

        //             <div className="dropdown">

        //                 <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
        //                     <InputLabel id="demo-simple-select-filled-label" style={{ color: "black", fontWeight: "800" }}>Country</InputLabel>
        //                     <Select
        //                         labelId="demo-simple-select-filled-label"
        //                         id="demo-simple-select-filled"
        //                         value={country}
        //                         onChange={(e) => setCountry(e.target.value)}
        //                         style={{ backgroundColor: "#ed7d31" }}
        //                     >
        //                         <MenuItem ><em>None</em> </MenuItem>

        //                         {
        //                             data.map((value, index) => {
        //                                 return <MenuItem key={index} value={index}>{value.country}</MenuItem>
        //                             })
        //                         }
        //                     </Select>
        //                 </FormControl>

        //             </div>
        //             <div className="dropdown">
        //                 <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
        //                     <InputLabel id="demo-simple-select-filled-label1" style={{ color: "black", fontWeight: "800" }}>Project Name</InputLabel>
        //                     <Select
        //                         labelId="demo-simple-select-filled-label1"
        //                         id="demo-simple-select-filled1"
        //                         onChange={(e) => setprojectName(e.target.value)}
        //                         value={projectName}
        //                         style={{ backgroundColor: "#ed7d31" }}
        //                     >
        //                         {/* {!data[country]?.projectName && <MenuItem><em>None</em> </MenuItem>} */}
        //                         <MenuItem><em>None</em> </MenuItem>

        //                         {
        //                             data[country]?.projectName.map((value, index) => {
        //                                 return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
        //                             })
        //                         }
        //                     </Select>
        //                 </FormControl>
        //             </div>
        //             <div className="dropdown">
        //                 <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
        //                     <InputLabel id="demo-simple-select-filled-label2" style={{ color: "black", fontWeight: "800" }}>Block</InputLabel>
        //                     <Select
        //                         labelId="demo-simple-select-filled-label2"
        //                         id="demo-simple-select-filled2"
        //                         onChange={(e) => setBlock(e.target.value)}
        //                         value={block}
        //                         style={{ backgroundColor: "#ed7d31" }}
        //                     >
        //                         {/* {!data[country]?.projectName?.find(e => e.name === projectName)?.blocks && <MenuItem><em>None</em> </MenuItem>} */}
        //                          <MenuItem><em>None</em> </MenuItem>
        //                         {
        //                             data[country]?.projectName?.find(e => e.name === projectName)?.blocks?.map((value, index) => {
        //                                 return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>

        //                             })
        //                         }
        //                     </Select>
        //                 </FormControl>
        //             </div>
        //             <div className="dropdown">
        //                 <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}  >
        //                     <InputLabel
        //                         id="demo-simple-select-filled-label3"
        //                         style={{ color: "black", fontWeight: "bolder" }}
        //                     >
        //                         projectDetail
        //                     </InputLabel>
        //                     <Select
        //                         labelId="demo-simple-select-filled-label3"
        //                         id="demo-simple-select-filled3"
        //                         onChange={(e) => setProjectDetail(e.target.value)}
        //                         value={projectDetail}
        //                         style={{ backgroundColor: "#ed7d31" }}
        //                     >

        //                         {/* {!data[country]?.projectName?.find(e => e.name === projectName)?.blocks.find(e => e.name === block)?.details
        //                             && <MenuItem><em>None</em> </MenuItem>
        //                         } */}
        //                         {/* {
        //                             data[country]?.projectName?.find(e => e.name === projectName)?.blocks.find(e => e.name === block)?.details
        //                             &&

        //                             <> */}
        //                                 <ListSubheader className="SubHeader"

        //                                 >
        //                                     <span
        //                                         // onClick={() => setProjectDetail(!projectDetail)}
        //                                         onClick={() => onclickHandler("projectDetail")}
        //                                     >Details<i class={`fa-solid fa-angle-${checkedData.projectDetail ? "up" : "down"}`}></i></span>

        //                                 </ListSubheader>
        //                                 {
        //                                     checkedData.projectDetail &&
        //                                     <>
        //                                         <MenuItem
        //                                             value={1}
        //                                             onClick={() => {
        //                                                 navigate(PageURL.INDIA_PROJ_OVERVIEW);
        //                                             }}
        //                                         >
        //                                             Project OverView
        //                                         </MenuItem>
        //                                         <MenuItem
        //                                             value={2}
        //                                             onClick={() => {
        //                                                 navigate(PageURL.INDIA_GEN_SUMMARY);
        //                                             }}
        //                                         >
        //                                             Generation Summary
        //                                         </MenuItem>
        //                                         <MenuItem
        //                                             value={3}
        //                                             onClick={() => {
        //                                                 navigate(PageURL.INDIA_PRES_MODEL);
        //                                             }}
        //                                         >
        //                                             Prescriptive Model
        //                                         </MenuItem>
        //                                     </>
        //                                 }
        //                                 <ListSubheader className="SubHeader"><span
        //                                     // onClick={() => setDiagonistic(!Diagonistic)}
        //                                     onClick={() => onclickHandler('Diagonistic')}
        //                                 >Diagonistic Model <i class={`fa-solid fa-angle-${checkedData.Diagonistic ? "up" : "down"}`}></i></span> </ListSubheader>
        //                                 {
        //                                     checkedData.Diagonistic &&

        //                                     <MenuItem

        //                                         value={5}
        //                                         onClick={() => {
        //                                             navigate(PageURL.INDIA_DIAGONISTIC_DETAILED);
        //                                         }}
        //                                     >
        //                                         Detailed Summary
        //                                     </MenuItem>
        //                                 }
        //                                 {
        //                                     checkedData.Diagonistic && <MenuItem
        //                                         value={6}
        //                                         onClick={() => {
        //                                             navigate(PageURL.INDIA_LOSS_FLOW);
        //                                         }}
        //                                     >
        //                                         Loss Flow Diagram
        //                                     </MenuItem>
        //                                 }

        //                                 {/* {
        //                             checkedData.Diagonistic &&
        //                             <>
        //                                 <MenuItem
        //                                     value={5}
        //                                     onClick={() => {
        //                                         navigate(PageURL.INDIA_DIAGONISTIC_DETAILED);
        //                                     }}
        //                                 >
        //                                     Detailed Summary
        //                                 </MenuItem>

        //                                 <MenuItem
        //                                     value={6}
        //                                     onClick={() => {
        //                                         navigate(PageURL.INDIA_LOSS_FLOW);
        //                                     }}
        //                                 >
        //                                     Loss Flow Diagram
        //                                 </MenuItem>
        //                             </>

        //                         } */}

        //                                 <ListSubheader className="SubHeader"><span onClick={() =>
        //                                     onclickHandler('Inverter')
        //                                     //  setInverter(!Inverter)
        //                                 } >Inverters <i class={`fa-solid fa-angle-${checkedData.Inverter ? "up" : "down"}`}></i></span>  </ListSubheader>

        //                                 {
        //                                     checkedData.Inverter &&

        //                                     <MenuItem
        //                                         value={7}
        //                                         onClick={() => {
        //                                             navigate(PageURL.INDIA_INVERTER_EFFICIENCY);
        //                                         }}
        //                                     >
        //                                         Inverter Efficiency
        //                                     </MenuItem>

        //                                 }

        //                                 <ListSubheader className="SubHeader"> <span
        //                                     onClick={() =>
        //                                         onclickHandler('Inverter1')
        //                                         // setInverter1(!Inverter1)
        //                                     } >Inverter1 <i class={`fa-solid fa-angle-${checkedData.Inverter1 ? "up" : "down"}`}></i></span></ListSubheader>
        //                                 {checkedData.Inverter1 &&
        //                                     <>
        //                                         <MenuItem
        //                                             value={8}
        //                                             onClick={() => {
        //                                                 navigate(PageURL.INDIA_INVERTER1_SCB_SMB1);
        //                                             }}
        //                                         >
        //                                             SCB/SMB1
        //                                         </MenuItem>
        //                                         <MenuItem
        //                                             value={9}
        //                                             onClick={() => {
        //                                                 navigate(PageURL.INDIA_INVERTER1_SCB_SMB2);
        //                                             }}
        //                                         >
        //                                             SCB/SMB2
        //                                         </MenuItem>
        //                                         <MenuItem
        //                                             value={10}
        //                                             onClick={() => {
        //                                                 navigate(PageURL.INDIA_INVERTER1_SCB_SMB2);
        //                                             }}
        //                                         >
        //                                             SCB/SMB3
        //                                         </MenuItem>
        //                                         <MenuItem value={11}>SCB/SMB4</MenuItem>
        //                                         <MenuItem value={12}>SCB/SMB5</MenuItem>
        //                                         <MenuItem value={13}>SCB/SMB6</MenuItem>
        //                                         <MenuItem value={14}>SCB/SMB7</MenuItem>
        //                                         <MenuItem value={15}>SCB/SMB8</MenuItem>
        //                                         <MenuItem value={16}>SCB/SMB9</MenuItem>
        //                                         <MenuItem value={17}>SCB/SMB10</MenuItem>
        //                                         <MenuItem value={18}>SCB/SMB11</MenuItem>
        //                                         <MenuItem value={19}>String Loss Diagram</MenuItem>
        //                                     </>
        //                                 }
        //                                 <ListSubheader className="SubHeader"> <span

        //                                     onClick={() => onclickHandler('Inverter2')}
        //                                 //  onClick={() => setInverter2(!Inverter2)} 
        //                                 >Inverter2 <i class={`fa-solid fa-angle-${checkedData.Inverter2 ? "up" : "down"}`}></i></span></ListSubheader>
        //                                 {
        //                                     checkedData.Inverter2 &&
        //                                     <>

        //                                         <MenuItem value={20}>SCB/SMB1</MenuItem>
        //                                         <MenuItem value={21}>SCB/SMB2</MenuItem>
        //                                         <MenuItem value={22}>SCB/SMB3</MenuItem>
        //                                         <MenuItem value={23}>SCB/SMB4</MenuItem>
        //                                         <MenuItem value={24}>SCB/SMB5</MenuItem>
        //                                         <MenuItem value={25}>SCB/SMB6</MenuItem>
        //                                         <MenuItem value={26}>SCB/SMB7</MenuItem>
        //                                         <MenuItem value={27}>SCB/SMB8</MenuItem>
        //                                         <MenuItem value={28}>SCB/SMB9</MenuItem>
        //                                         <MenuItem value={29}>SCB/SMB10</MenuItem>
        //                                         <MenuItem value={30}>String Loss Diagram</MenuItem>
        //                                     </>
        //                                 }
        //                                 <ListSubheader className="SubHeader"><span
        //                                     onClick={() => onclickHandler('Inverter3')}
        //                                 //  onClick={() => setInverter3(!Inverter3)}
        //                                 >Inverter3 <i class={`fa-solid fa-angle-${checkedData.Inverter3 ? "up" : "down"}`}></i></span> </ListSubheader>
        //                                 {
        //                                     checkedData.Inverter3 &&
        //                                     <>

        //                                         <MenuItem value={31}>SCB/SMB1</MenuItem>
        //                                         <MenuItem value={32}>SCB/SMB2</MenuItem>
        //                                         <MenuItem value={33}>SCB/SMB3</MenuItem>
        //                                         <MenuItem value={34}>SCB/SMB4</MenuItem>
        //                                         <MenuItem value={35}>SCB/SMB5</MenuItem>
        //                                         <MenuItem value={36}>SCB/SMB6</MenuItem>
        //                                         <MenuItem value={37}>SCB/SMB7</MenuItem>
        //                                         <MenuItem value={38}>SCB/SMB8</MenuItem>
        //                                         <MenuItem value={39}>SCB/SMB9</MenuItem>
        //                                         <MenuItem value={40}>SCB/SMB10</MenuItem>
        //                                         <MenuItem value={41}>SCB/SMB11</MenuItem>
        //                                         <MenuItem value={42}>String Loss Diagram</MenuItem>
        //                                     </>
        //                                 }
        //                                 <ListSubheader className="SubHeader last_item"> <span
        //                                     onClick={() => onclickHandler('Inverter4')}
        //                                 //  onClick={() => setInverter4(!Inverter4)}
        //                                 >Inverter3 <i class={`fa-solid fa-angle-${checkedData.Inverter4 ? "up" : "down"}`}></i></span></ListSubheader>
        //                                 {
        //                                     checkedData.Inverter4 &&
        //                                     <>

        //                                         <MenuItem value={43}>SCB/SMB1</MenuItem>
        //                                         <MenuItem value={44}>SCB/SMB2</MenuItem>
        //                                         <MenuItem value={45}>SCB/SMB3</MenuItem>
        //                                         <MenuItem value={46}>SCB/SMB4</MenuItem>
        //                                         <MenuItem value={47}>SCB/SMB5</MenuItem>
        //                                         <MenuItem value={48}>SCB/SMB6</MenuItem>
        //                                         <MenuItem value={49}>SCB/SMB7</MenuItem>
        //                                         <MenuItem value={50}>SCB/SMB8</MenuItem>
        //                                         <MenuItem value={51}>SCB/SMB9</MenuItem>
        //                                         <MenuItem value={52}>SCB/SMB10</MenuItem>
        //                                         <MenuItem value={53}>SCB/SMB11</MenuItem>
        //                                         <MenuItem value={54}>String Loss Diagram</MenuItem>
        //                                     </>
        //                             //     }
        //                             // </>
        //                         }
        //                     </Select>
        //                 </FormControl>
        //                 {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
        //                     <InputLabel id="demo-simple-select-filled-label4" style={{ color: "black", fontWeight: "800" }}>Project Details</InputLabel>
        //                     <Select
        //                         labelId="demo-simple-select-filled-label4"
        //                         id="demo-simple-select-filled4"
        //                         onChange={handleChange4}
        //                         value={projectDetails}
        //                         style={{ backgroundColor: "#ed7d31" }}
        //                     >
        //                         <MenuItem>None</MenuItem>
        //                         {
        //                             data[country]?.projectName?.find(e => e.name === projectName)?.blocks.find(e => e.name === block)?.details?.map((value, index) => {

        //                                 return (
        //                                     <>
        //                                         <ListSubheader>{value.header}</ListSubheader>
        //                                         {
        //                                             value?.subHeader.map((e, i) => {
        //                                                 return <MenuItem key={i} value={e}>{e}</MenuItem>
        //                                             })

        //                                         }

        //                                     </>
        //                                 )
        //                             })
        //                         }
        //                     </Select>
        //                 </FormControl> */}
        //             </div>
        //         </div>
        //     </div>

        // </div>
    );
};

export default ProjectDetailBody;
