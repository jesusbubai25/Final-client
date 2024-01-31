import React from 'react'
import ButtonsComp from '../../components/ButtonsComp';
import { useLocation } from 'react-router-dom';

const Notfound = () => {
    const location=useLocation();
    return (
        <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center",flexDirection:"column", justifyContent: "center" }}>
            <h2>Page Not Found</h2>
            <ButtonsComp
                type="outlined"
                buttonType="primary"
                buttonText="Go Back"
                onClick={() => {
                    window.history.go(-1)
                }}>
            </ButtonsComp>
        </div>
    )
}

export default Notfound