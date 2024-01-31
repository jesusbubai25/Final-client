import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './printer.css'

const Printer = ({ clickhandler, jpgDownload,svgDownload }) => {
    const [open, setOpen] = useState(false)
    return (

        <div style={{ textAlign: "end", paddingRight: "0.9rem", position: "relative" }} >
            <div style={{ position: "absolute", right: "10px", display: "flex" }} >
                <div id='hide_content' onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='links_div' style={{
                   boxSizing:"border-box",
                   height:open?"auto":"0",
                   padding:open?"0.5rem 0.9rem":"0",
                   flexDirection:"column"
                }} >
                    {/* <Link><i className="fa-solid fa-download"></i> In JPG</Link>
                    <Link><i className="fa-solid fa-download"></i> In png</Link>
                    <Link><i className="fa-solid fa-download"></i> In Csv</Link> */}

                    <Link onClick={() => {
                        setOpen(false)
                        jpgDownload && jpgDownload();
                    }
                    }

                    >Download JPG</Link>
                    <Link onClick={()=>{
                        setOpen(false);
                        svgDownload && svgDownload();
                    }} >Download SVG</Link>
                    <Link onClick={() => {
                        setOpen(false);
                        clickhandler && clickhandler();
                    }
                    }>Download CSV</Link>

                </div>
                <div className='print_icon_div'>
                    <i onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} style={{ paddingLeft: "0.3rem", fontSize: "1.1rem", fontWeight: "700", cursor: "pointer" }} className="fa-solid fa-download"></i>
                </div>



            </div>

        </div>
    )
}

export default Printer