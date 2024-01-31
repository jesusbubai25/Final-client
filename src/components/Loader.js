import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", position: "absolute", background: "rgba(5, 45, 45, 0.968)", opacity: "0.5", alignItems: "center", justifyContent: "center", zIndex: 5 }}>
            {/* <span className="loader" ></span> */}
            <div class="module">
                <div class="throbber sun">
                    <div class="loading-container">
                        <div class="loader">
                            <div class="spoke-center"></div>
                            <div class="loading-spokes"> <div class="spoke-container"><div class="spoke"></div></div>
                                <div class="spoke-container"><div class="spoke"></div></div>
                                <div class="spoke-container"><div class="spoke"></div></div>
                                <div class="spoke-container"><div class="spoke"></div></div>
                                <div class="spoke-container"><div class="spoke"></div></div>
                                <div class="spoke-container"><div class="spoke"></div></div>
                                <div class="spoke-container"><div class="spoke"></div></div>
                                <div class="spoke-container"><div class="spoke"></div></div>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>



    )
}

export default Loader