import React, { useState } from 'react'
import "./ProjOverView.css";
import { Link } from 'react-router-dom';
import PageURL from '../../../../constants/PageURL';
import DownloadIcon from '@mui/icons-material/Download';
import datasheet from '../../../../fonts and images/data-sheet.png'
import datasheet2 from '../../../../fonts and images/Datasheet-Icon.png'
import excelsheet from '../../../../fonts and images/Excel-Icon.png'
import transformer_doc_1 from "../../../../constants/transformer/25 Kva Aux Trafor- WBREDA.pdf"
import transformer_doc_2 from "../../../../constants/transformer/100 KVA Aux Trafo - WBREDA.pdf"
import cabel_doc_1 from "../../../../constants/cables/LUMINO JUPITER SOLAR FOR WBSWDCL (D-GM-0619-123) -TP-GF (R-2)(04.07.2019....xls"
import cabel_doc_2 from "../../../../constants/cables/QAP (WBREDA) -APAR.pdf"
import inverter_doc_1 from "../../../../constants/inverters/2_5mw_solar_inverter_gad.pdf"
import inverter_doc_2 from "../../../../constants/inverters/DelCEN 2500HV_Inverter Cooling Technology.pdf"
import inverter_doc_3 from "../../../../constants/inverters/DelCEN2500 HV Protection features.pdf"
import module_doc_1 from "../../../../constants/modules/5bb 345p marked Annexure-IV.pdf"
import sld_ac_doc_1 from "../../../../constants/SLD/AC SLD/6-19-6098-PV-EE-PL - AC SLD.pdf"
import sld_dc_doc_1 from "../../../../constants/SLD/DC SLD/DC SLD_WBREDA_10907.4kWp Approved Through Letter 1.pdf"
import pvsyst_doc_1 from "../../../../constants/PVsyst/PVsyst_V1_SOVA_DELTA_T20°_P7.5_L1.09 1.pdf"
const paths = [
    {
        type: "Datasheet",
        name: "Modules",
        lname: "Inverter",
        path: [module_doc_1]
    },
    {
        type: "Datasheet",
        name: "Inverter",
        lname: "Inverter",
        path: [inverter_doc_1,
            inverter_doc_2,
            inverter_doc_3
        ]
    },
    {
        type: "Datasheet",
        lname: "Inverter",
        name: "Transformer",
        path: [transformer_doc_1, transformer_doc_2]
    },
    {
        type: "Cables",
        name: "Cables",
        lname: "Cables",
        path: [cabel_doc_1, cabel_doc_2]
    },
    {
        type: "SLD",
        name: "Sld_Ac",
        lname: "SLD AC",
        path: [sld_ac_doc_1]
    },
    {
        type: "SLD",
        name: "Sld_Dc",
        lname: "SLD DC",
        path: [sld_dc_doc_1]
    },
    {
        type: "PVsyst",
        name: "PVsyst",
        lname: "PVsyst",
        path: [pvsyst_doc_1]
    },
    {
        type: "String_Configuration",
        name: "String_Configuration",
        lname: "String Configuration",
        path: []
    },
    {
        type: "Warranty",
        name: "Warranty",
        lname: "Warranty",
        path: []
    },
    {
        type: "OM_Cantact",
        name: "OM_Cantact",
        lname: "OM Cantact",
        path: []
    }

]

const AsBuiltDiagram = () => {
    const [pathData, setPathData] = useState(paths)
    const [path, setPath] = useState("Modules")
    const [showModule, setShowModule] = useState(false)
    const [showSLD, setShowSLD] = useState(false)
    const [documentName, setDocumentName] = useState({
        type: "Datasheet",
        name: "Modules"
    })


    const [checkedData, setCheckedData] = useState({
        Datasheet: true,
        Cables: false,
        SLD: false,
        String_Configuration: false,
        Warranty: false,
        PVsyst: false,
        OM_Cantact: false
    })
    const selectPathHandler = (name) => {
        let data = pathData.find(e => e.name === name)
        setDocumentName({ ...documentName, name: data.lname, type: data.type })
        setPath(name)
    }

    // const [pdfData, setPdfData] = useState({
    //     Modules: true,
    //     Inverter: false,
    //     Transformer: false,
    //     Dc_sld: false,
    //     Ac_sld: false,
    //     String_Configuration: false,
    //     Warranty: false,
    //     PVsyst: false,
    //     OM_Cantact: false
    // })


    const changeLinkHandler = (name) => {
        let newdata = {};
        for (let i in checkedData) {
            if (name === i) newdata[name] = true;
            else newdata[i] = false;
        }
        setCheckedData(newdata)
    }

    const downloadPdf = async (path) => {

        await fetch(path).then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                let name = path?.split("/")
                name = name[name.length - 1];
                alink.download = name;
                alink.click();
            });
        });
    }
    return (
        <div className='asbuilt_div'>
            <div>
                <span>GreenEnco</span>
                <span>Creating A Better World In A Changing Climate</span>
            </div>

            <div>
                <div >
                    <span style={{ fontSize: "1.7rem", padding: "1rem 0.5rem", borderBottom: "3px solid black", width: "60%", textAlign: "end", fontWeight: "800" }}>Categories</span>
                    <ul >
                        <Link to={PageURL.INDIA_PROJ_OVERVIEW}
                            onClick={() => changeLinkHandler("Datasheet")}
                            style={{ color: checkedData.Datasheet && "red" }} onMouseOver={() => setShowModule(true)} onMouseOut={() => setShowModule(false)} >

                            Datasheet
                            <div className='module_div' style={{
                                width: showModule ? "100%" : "0",
                                padding: showModule ? "0.5rem 0.8rem" : "0",

                            }}
                            >
                                <Link onClick={() => {
                                    selectPathHandler("Modules")
                                }}>Modules</Link>
                                <Link onClick={() => {
                                    selectPathHandler("Inverter")
                                }}
                                >Inverter</Link>
                                <Link onClick={() => {
                                    selectPathHandler("Transformer")
                                }}
                                >Transformer</Link>

                            </div>
                        </Link>
                        <Link onClick={() => {
                            changeLinkHandler("Cables")
                            selectPathHandler("Cables")
                        }
                        }
                            style={{ color: checkedData.Cables && "red" }}

                        >Cables</Link>
                        <Link
                            onClick={() => changeLinkHandler("SLD")}
                            style={{ color: checkedData.SLD && "red" }}
                            onMouseOver={() => setShowSLD(true)} onMouseOut={() => setShowSLD(false)}
                        >
                            SLD
                            <div className='sld_div' style={{
                                width: showSLD ? "100%" : "0",
                                padding: showSLD ? "0.5rem 1.5rem" : "0"

                            }}
                            >
                                <Link
                                    onClick={() => {
                                        selectPathHandler("Sld_Dc")
                                    }}
                                >DC SLD</Link>
                                <Link
                                    onClick={() => {
                                        selectPathHandler("Sld_Ac")
                                    }}

                                >AC SLD</Link>

                            </div>
                        </Link>
                        <Link
                            onClick={() => {
                                selectPathHandler("String_Configuration")
                                changeLinkHandler("String_Configuration")
                            }
                            }
                            style={{ color: checkedData.String_Configuration && "red" }}
                        >
                            String Configuration</Link>
                        <Link style={{ color: checkedData.Warranty && "red" }}
                            onClick={() => {
                                selectPathHandler("Warranty")
                                changeLinkHandler("Warranty")
                            }
                            }
                        >Warranty</Link>
                        <Link style={{ color: checkedData.PVsyst && "red" }}
                            onClick={() => {
                                changeLinkHandler("PVsyst")
                                selectPathHandler("PVsyst")
                            }}


                        >PVsyst</Link>
                        <Link style={{ color: checkedData.OM_Cantact && "red" }}
                            onClick={() => {
                                changeLinkHandler("OM_Cantact")
                                selectPathHandler("OM_Cantact")
                            }
                            }

                        >O&M Contract</Link>

                    </ul>
                </div>
                <div>

                    {pathData && pathData?.find(e => e.name === path)?.path?.length > 0 ?
                        pathData?.find(e => e.name === path)?.path?.map((el, i) => {
                            return (
                                <div key={i}>
                                    <div>
                                        <div style={{ height: "100%", width: "100%", boxSizing: "border-box" }}>
                                            {/* <img src={datasheet} alt='Data-Sheet' style={{ maxHeight: "100%", maxWidth: "100%", background: "white" }} /> */}
                                            {/* <p style={{position:"absolute",bottom:"-2em",padding:"0.5em 0.8em",boxSizing:"border-box"}} >{el}</p> */}

                                            <span>Document Type :</span>
                                            <span> {documentName.type}</span>
                                            <span>Document Name :  </span>
                                            {/* <span>{documentName.name}</span> */}
                                            <span style={{ wordBreak: "break-word", boxSizing: "border-box", textAlign: "center", fontSize: "0.8rem", padding: "0 0.5rem" }}>{getDocumentName(el)}</span>
                                        </div>

                                        <div id={path === "Cables" && i == 0 ? "excel_button" : ""} style={{ background: path === "Cables" && i == 0 ? "#05c059" : "rgb(248, 95, 65)" }} onClick={() => downloadPdf(el)}>
                                            <Link style={{ color: "black" }}>Download</Link> In<i className={`fa-solid fa-file-${path === "Cables" && i == 0 ? "excel" : "pdf"}`}></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                        <h1> Data Not Available </h1>
                    }
                </div>
            </div>


        </div>
    )
}

export default AsBuiltDiagram

const getDocumentName = (value) => {
    let arr = value?.split("/");
    return arr[arr.length - 1];

}