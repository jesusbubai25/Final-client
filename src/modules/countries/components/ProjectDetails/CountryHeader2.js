import React, { useEffect, useRef, useState } from "react";
import "../CountryHeader.css";
import GreenLogo from "../../../../newLogo.PNG";
import { useLocation, useNavigate } from "react-router-dom";
import PageURL from "../../../../constants/PageURL";
import '../../../../components/Dropdown.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from "@mui/material";

const data1 = [
    {
        country: "India",
        partnersName: [
            {
                name: "Luminous",
                blocks: [
                    {
                        name: "Bhajanghat",
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
    //     partnersName: ["uk_Project1", "uk_Project2", "uk_Project3", "uk_Project4"],
    //     block: ["uk_block1", "uk_block2"]

    // }, {
    //     country: "France",
    //     partnersName: ["Project1", "Project2", "Project3", "Project4"],
    //     block: ["block1", "block2"],

    // }, {
    //     country: "India",
    //     partnersName: ["Italy", "Project2", "Project3", "Project4"],
    //     block: ["block1", "block2"],

    // }, {
    //     country: "Thailand",
    //     partnersName: ["Project1", "Project2", "Project3", "Project4"],
    //     block: ["block1", "block2"],

    // }
]


const CountryHeader2 = (props) => {

    const navigate = useNavigate();
    const [data, setdata] = useState(data1)
    const [country, setCountry] = useState("")
    const [partnersName, setpartnersName] = useState("")
    const [block, setBlock] = useState("")
    const [projectDetail, setProjectDetail] = useState("")

    const location = useLocation();

    const handleChange1 = (event) => {

    };
    const handleChange2 = (event) => {
        setpartnersName(event.target.value)
    };
    const handleChange3 = (event) => {
        setBlock(event.target.value)
    };

    const [checkedData, setCheckedData] = React.useState({
        projectDetail: false,
        Diagonistic: false,
        Efficiency: false,
        checkedData: false,
        Prescritive: false,
        string_smb: false,
        correctiveAction: false

    })
    const [checkedData2, setCheckedData2] = React.useState({
        block1: false,
        block2: false

    })
    const [checkedData3, setCheckedData3] = React.useState({
        Inverter1: false,
        Inverter2: false,
        Inverter3: false,
        Inverter4: false

    })
    const onclickBlockHandler = (name) => {
        let checked = { ...checkedData2 };
        for (let key in checked) {
            if (key === name) {
                checked[key] = !checked[key];
            } else {
                checked[key] = false
            }
        }
        setCheckedData2(checked)
    }

    const onclickInverterHandler = (name) => {
        let checked = { ...checkedData3 };
        for (let key in checked) {
            if (key === name) {
                checked[key] = !checked[key];
            } else {
                checked[key] = false
            }
        }
        setCheckedData3(checked)
    }
    const onclickHandler = (name) => {
        let checked = { ...checkedData };
        for (let key in checked) {
            if (key === name) {
                checked[key] = !checked[key];
            } else {
                checked[key] = false
            }
        }
        setCheckedData2({
            ...checkedData2,
            block1: false, block2: false

        })
        setCheckedData3({
            ...checkedData3,
            Inverter1: false,
            Inverter2: false,
            Inverter3: false,
            Inverter4: false
        })
        setCheckedData(checked)
    }


    useEffect(() => {
        // if (projectDetail === "") {
        //     navigate(PageURL.PROJECT_DETAILS)
        // }
    }, [country])

    return (
        <div className="header" style={{ justifyContent: "space-around" }}>
            <div className="logo">
                <img onClick={() => navigate(PageURL.COUNTRYDEFAULT)}
                    src={GreenLogo}
                    style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                    alt="Greenenco-Logo"
                />
            </div>

            <div className="title" style={{ width: "80%", justifyContent: "space-between" }}  >
                <div>
                    <h1 style={{ color: "#ed7d31", fontSize: "130%" }}>
                    Creating A Better World In A Changing Climate
                    </h1>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", paddingRight: "0.5rem" }}>

                    <div className="dropdown" >

                        <FormControl variant="filled" sx={{ m: 1, minWidth: 165 }}>
                            <InputLabel id="demo-simple-select-filled-label" style={{ color: "black", fontWeight: "800" }}>Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={country}
                                onChange={(e) => {
                                    if (e.target.value === "None") {
                                        setBlock(""); setpartnersName(""); setProjectDetail("");
                                        setCheckedData({
                                            ...checkedData, projectDetail: false,
                                            Diagonistic: false,
                                            Efficiency: false,
                                            checkedData: false,
                                            Prescritive: false,
                                            string_smb: false,
                                            correctiveAction: false
                                        })
                                        setCheckedData2({
                                            ...checkedData2,
                                            block1: false, block2: false

                                        })
                                        setCheckedData3({
                                            ...checkedData3,
                                            Inverter1: false,
                                            Inverter2: false,
                                            Inverter3: false,
                                            Inverter4: false
                                        })
                                        setCountry("")
                                    } else {
                                        setCountry(e.target.value)
                                    }


                                }
                                }
                                style={{ backgroundColor: "rgb(236, 85, 15)" }}
                            >
                                <MenuItem value={"None"}><em>None</em> </MenuItem>

                                {
                                    data.map((value, index) => {
                                        return <MenuItem key={index} value={index}>{value.country}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>

                    </div>
                    <div className="dropdown">
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 165 }}>
                            <InputLabel id="demo-simple-select-filled-label1" style={{ color: "black", fontWeight: "800", fontSize: "0.95rem" }}>Partners Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label1"
                                id="demo-simple-select-filled1"
                                onChange={(e) => {
                                    if (e.target.value === "None") {
                                        setBlock(""); setProjectDetail(""); setpartnersName("")
                                        setCheckedData({
                                            ...checkedData, projectDetail: false,
                                            Diagonistic: false,
                                            Efficiency: false,
                                            checkedData: false,
                                            Prescritive: false,
                                            string_smb: false,
                                            correctiveAction: false
                                        })
                                        setCheckedData2({
                                            ...checkedData2,
                                            block1: false, block2: false

                                        })
                                        setCheckedData3({
                                            ...checkedData3,
                                            Inverter1: false,
                                            Inverter2: false,
                                            Inverter3: false,
                                            Inverter4: false
                                        })
                                        setpartnersName("")
                                    } else setpartnersName(e.target.value)
                                }}
                                value={partnersName}
                                style={{ backgroundColor: "rgb(236, 85, 15)" }}
                            >
                                {/* {!data[country]?.partnersName && <MenuItem><em>None</em> </MenuItem>} */}
                                <MenuItem value={"None"}><em>None</em> </MenuItem>

                                {
                                    data[country]?.partnersName.map((value, index) => {
                                        return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className="dropdown">
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 165 }}>
                            <InputLabel id="demo-simple-select-filled-label2" style={{ color: "black", fontWeight: "800" }}>Project Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label2"
                                id="demo-simple-select-filled2"
                                onChange={(e) => {
                                    if (e.target.value === "None") {
                                        setProjectDetail("");
                                        setCheckedData({
                                            ...checkedData, projectDetail: false,
                                            Diagonistic: false,
                                            Efficiency: false,
                                            checkedData: false,
                                            Prescritive: false,
                                            string_smb: false,
                                            correctiveAction: false
                                        })
                                        setCheckedData2({
                                            ...checkedData2,
                                            block1: false, block2: false

                                        })
                                        setCheckedData3({
                                            ...checkedData3,
                                            Inverter1: false,
                                            Inverter2: false,
                                            Inverter3: false,
                                            Inverter4: false
                                        })
                                        setBlock("")
                                    } else setBlock(e.target.value)


                                }}
                                value={block}
                                style={{ backgroundColor: "rgb(236, 85, 15)" }}
                            >
                                {/* {!data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks && <MenuItem><em>None</em> </MenuItem>} */}
                                <MenuItem value={"None"} ><em>None</em> </MenuItem>
                                {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks?.map((value, index) => {
                                        return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>

                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className="dropdown">
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 165 }}  >
                            <InputLabel
                                id="demo-simple-select-filled-label3"
                                style={{ color: "black", fontWeight: "bolder" }}
                            >
                                Project Detail
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label3"
                                id="demo-simple-select-filled3"
                                onChange={(e) => { setProjectDetail(e.target.value) }}
                                value={projectDetail}
                                style={{ backgroundColor: "rgb(236, 85, 15)" }}
                            >

                                {!data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details
                                    &&
                                    <MenuItem value={"none"}><em>None</em> </MenuItem>
                                }

                                {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details?.length > 0
                                    &&
                                    <ListSubheader className="SubHeader" >
                                        <span onClick={() => onclickHandler("projectDetail")}>Overview Details
                                            <i className={`fa-solid fa-angle-${checkedData.projectDetail ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }


                                {
                                    checkedData.projectDetail &&

                                    <MenuItem
                                        value={1}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_PROJ_OVERVIEW);
                                        }}
                                    >

                                        Project OverView
                                    </MenuItem>}
                                {checkedData.projectDetail && <MenuItem
                                    value={2}
                                    onClick={() => {
                                        navigate(PageURL.INDIA_GEN_SUMMARY);
                                    }}
                                >
                                    Generation Summary
                                </MenuItem>}


                                {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details?.length > 0
                                    &&
                                    <ListSubheader className="SubHeader">
                                        <span onClick={() => onclickHandler('Diagonistic')}>Diagonistic Model
                                            <i className={`fa-solid fa-angle-${checkedData.Diagonistic ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }
                                {
                                    checkedData.Diagonistic &&

                                    <MenuItem

                                        value={5}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_DIAGONISTIC_DETAILED);
                                        }}
                                    >
                                        Detailed Summary
                                    </MenuItem>
                                }
                                {
                                    checkedData.Diagonistic && <MenuItem
                                        value={6}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_LOSS_FLOW);
                                        }}
                                    >
                                        Loss Flow Diagram
                                    </MenuItem>
                                }

                                {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details?.length > 0
                                    &&

                                    <ListSubheader className="SubHeader">
                                        <span onClick={() => onclickHandler('Efficiency')} >Inverter Efficiency
                                            <i className={`fa-solid fa-angle-${checkedData.Efficiency ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }

                                {
                                    checkedData.Efficiency &&

                                    <MenuItem
                                        value={7}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER_EFFICIENCY);
                                        }}
                                    >
                                        Inverter Efficiency
                                    </MenuItem>

                                }
                                {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details?.length > 0
                                    &&

                                    <ListSubheader className="SubHeader">
                                        <span onClick={() => onclickHandler('string_smb')} >String / SMB
                                            <i className={`fa-solid fa-angle-${checkedData.string_smb ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }
                                {
                                    checkedData.string_smb &&

                                    <ListSubheader className="SubHeader">
                                        <span onClick={() => onclickBlockHandler('block1')} >Block 1
                                            <i className={`fa-solid fa-angle-${checkedData2.block1 ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }

                                {
                                    checkedData2.block1 && checkedData.string_smb &&
                                    <ListSubheader className="SubHeader">
                                        <span onClick={() => onclickInverterHandler('Inverter1')} >Inverter1
                                            <i className={`fa-solid fa-angle-${checkedData3.Inverter1 ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }

                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem
                                        value={8}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB1);
                                        }}
                                    >
                                        SCB/SMB1
                                    </MenuItem>
                                }
                                {checkedData3.Inverter1 && checkedData2.block1 &&

                                    <MenuItem
                                        value={9}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB2);
                                        }}
                                    >
                                        SCB/SMB2
                                    </MenuItem>
                                }
                                {checkedData3.Inverter1 && checkedData2.block1 &&

                                    <MenuItem
                                        value={10}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB3);
                                        }}
                                    >
                                        SCB/SMB3
                                    </MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={11}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB4);
                                        }}
                                    >SCB/SMB4</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={12}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB5);
                                        }}
                                    >SCB/SMB5</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={13}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB6);
                                        }}
                                    >SCB/SMB6</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={14}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB7);
                                        }}
                                    >SCB/SMB7</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={15}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB8);
                                        }}
                                    >SCB/SMB8</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={16}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB9);
                                        }}
                                    >SCB/SMB9</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={17}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB10);
                                        }}
                                    >SCB/SMB10</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={18}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER1_SCB_SMB11);
                                        }}
                                    >SCB/SMB11</MenuItem>}
                                {checkedData3.Inverter1 && checkedData2.block1 &&
                                    <MenuItem value={19}
                                    onClick={() => {
                                        navigate(PageURL.INDIA_INVERTER1_HEATMAP_DIAGRAM);
                                    }}

                                    >HeatMap Diagram</MenuItem>
                                }
                                {
                                    checkedData2.block1 && checkedData.string_smb &&
                                    <ListSubheader className="SubHeader">
                                        <span onClick={() => onclickInverterHandler('Inverter2')}>Inverter2
                                            <i className={`fa-solid fa-angle-${checkedData3.Inverter2 ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }

                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem
                                        value={8}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB1);
                                        }}
                                    >
                                        SCB/SMB1
                                    </MenuItem>
                                }
                                {checkedData3.Inverter2 && checkedData2.block1 &&

                                    <MenuItem
                                        value={9}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB2);
                                        }}
                                    >
                                        SCB/SMB2
                                    </MenuItem>
                                }
                                {checkedData3.Inverter2 && checkedData2.block1 &&

                                    <MenuItem
                                        value={10}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB3);
                                        }}
                                    >
                                        SCB/SMB3
                                    </MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={11}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB4);
                                        }}
                                    >SCB/SMB4</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={12}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB5);
                                        }}
                                    >SCB/SMB5</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={13}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB6);
                                        }}
                                    >SCB/SMB6</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={14}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB7);
                                        }}
                                    >SCB/SMB7</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={15}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB8);
                                        }}
                                    >SCB/SMB8</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={16}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB9);
                                        }}
                                    >SCB/SMB9</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={17}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB10);
                                        }}
                                    >SCB/SMB10</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={18}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB11);
                                        }}
                                    >SCB/SMB11</MenuItem>}

                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={19}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER2_SCB_SMB12);
                                        }}
                                    >SCB/SMB12</MenuItem>}
                                {checkedData3.Inverter2 && checkedData2.block1 &&
                                    <MenuItem value={20}
                                    onClick={() => {
                                        navigate(PageURL.INDIA_INVERTER2_HEATMAP_DIAGRAM);
                                    }}
                                    >HeatMap Diagram</MenuItem>
                                }
                                {checkedData.string_smb && <ListSubheader className="SubHeader">
                                    <span onClick={() => onclickBlockHandler('block2')} >Block 2
                                        <i className={`fa-solid fa-angle-${checkedData2.block2 ? "up" : "down"}`}></i>
                                    </span>
                                </ListSubheader>
                                }
                                {
                                    checkedData2.block2 &&
                                    <ListSubheader className="SubHeader">
                                        <span onClick={() => onclickInverterHandler('Inverter3')}>Inverter3
                                            <i className={`fa-solid fa-angle-${checkedData3.Inverter3 ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }
                               {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem
                                        value={8}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB1);
                                        }}
                                    >
                                        SCB/SMB1
                                    </MenuItem>
                                }
                                {checkedData3.Inverter3 && checkedData2.block2 &&

                                    <MenuItem
                                        value={9}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB2);
                                        }}
                                    >
                                        SCB/SMB2
                                    </MenuItem>
                                }
                                {checkedData3.Inverter3 && checkedData2.block2 &&

                                    <MenuItem
                                        value={10}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB3);
                                        }}
                                    >
                                        SCB/SMB3
                                    </MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={11}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB4);
                                        }}
                                    >SCB/SMB4</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={12}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB5);
                                        }}
                                    >SCB/SMB5</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={13}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB6);
                                        }}
                                    >SCB/SMB6</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={14}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB7);
                                        }}
                                    >SCB/SMB7</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={15}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB8);
                                        }}
                                    >SCB/SMB8</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={16}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB9);
                                        }}
                                    >SCB/SMB9</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={17}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB10);
                                        }}
                                    >SCB/SMB10</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={18}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB11);
                                        }}
                                    >SCB/SMB11</MenuItem>}

                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={19}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER3_SCB_SMB12);
                                        }}
                                    >SCB/SMB12</MenuItem>}
                                {checkedData3.Inverter3 && checkedData2.block2 &&
                                    <MenuItem value={20}
                                    onClick={() => {
                                        navigate(PageURL.INDIA_INVERTER3_HEATMAP_DIAGRAM);
                                    }}

                                    >HeatMap Diagram</MenuItem>
                                }
                                {
                                    checkedData2.block2 &&
                                    <ListSubheader className="SubHeader"> <span
                                        onClick={() => onclickInverterHandler('Inverter4')}
                                    >Inverter4 <i className={`fa-solid fa-angle-${checkedData3.Inverter4 ? "up" : "down"}`}></i></span></ListSubheader>
                                }
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem
                                        value={8}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB1);
                                        }}
                                    >
                                        SCB/SMB1
                                    </MenuItem>
                                }
                                {checkedData3.Inverter4 && checkedData2.block2 &&

                                    <MenuItem
                                        value={9}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB2);
                                        }}
                                    >
                                        SCB/SMB2
                                    </MenuItem>
                                }
                                {checkedData3.Inverter4 && checkedData2.block2 &&

                                    <MenuItem
                                        value={10}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB3);
                                        }}
                                    >
                                        SCB/SMB3
                                    </MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={11}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB4);
                                        }}
                                    >SCB/SMB4</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={12}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB5);
                                        }}
                                    >SCB/SMB5</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={13}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB6);
                                        }}
                                    >SCB/SMB6</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={14}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB7);
                                        }}
                                    >SCB/SMB7</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={15}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB8);
                                        }}
                                    >SCB/SMB8</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={16}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB9);
                                        }}
                                    >SCB/SMB9</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={17}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB10);
                                        }}
                                    >SCB/SMB10</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={18}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB11);
                                        }}
                                    >SCB/SMB11</MenuItem>}

                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={19}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_INVERTER4_SCB_SMB12);
                                        }}
                                    >SCB/SMB12</MenuItem>}
                                {checkedData3.Inverter4 && checkedData2.block2 &&
                                    <MenuItem value={20}
                                    onClick={() => {
                                        navigate(PageURL.INDIA_INVERTER4_HEATMAP_DIAGRAM);
                                    }}
                                    >HeatMap Diagram</MenuItem>
                                }

                                {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details?.length > 0
                                    &&
                                    <ListSubheader className="SubHeader last_item"> <span
                                        onClick={() => onclickHandler('Prescritive')}
                                    >Prescriptive Model <i className={`fa-solid fa-angle-${checkedData.Prescritive ? "up" : "down"}`}></i></span></ListSubheader>
                                }
                                {
                                    checkedData.Prescritive &&

                                    <MenuItem
                                        value={55}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_PRES_MODEL_Fault_Tree);
                                        }}
                                    >
                                        Fault Tree Diagram
                                    </MenuItem>
                                }

                                {
                                    checkedData.Prescritive &&

                                    <MenuItem
                                        value={56}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_PRES_MODEL_Loss_Flow);
                                        }}
                                    >
                                        Loss Flow Diagram
                                    </MenuItem>
                                }
                                {/* {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details?.length > 0
                                    &&

                                    <ListSubheader className="SubHeader ">
                                        <span onClick={() => onclickHandler('correctiveAction')} >Corrective Action
                                            <i className={`fa-solid fa-angle-${checkedData.correctiveAction ? "up" : "down"}`}></i>
                                        </span>
                                    </ListSubheader>
                                }
                                {
                                    checkedData.correctiveAction &&
                                    <MenuItem
                                        value={56}
                                        onClick={() => {
                                            navigate(PageURL.INDIA_PRES_MODEL_Loss_Flow);
                                        }}
                                    >
                                        Action Plan
                                    </MenuItem>
                                } */}

                            </Select>
                        </FormControl>
                        {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
                            <InputLabel id="demo-simple-select-filled-label4" style={{ color: "black", fontWeight: "800" }}>Project Details</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label4"
                                id="demo-simple-select-filled4"
                                onChange={handleChange4}
                                value={projectDetails}
                                style={{ backgroundColor: "#ed7d31" }}
                            >
                                <MenuItem>None</MenuItem>
                                {
                                    data[country]?.partnersName?.find(e => e.name === partnersName)?.blocks.find(e => e.name === block)?.details?.map((value, index) => {

                                        return (
                                            <>
                                                <ListSubheader>{value.header}</ListSubheader>
                                                {
                                                    value?.subHeader.map((e, i) => {
                                                        return <MenuItem key={i} value={e}>{e}</MenuItem>
                                                    })

                                                }

                                            </>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl> */}
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CountryHeader2;
