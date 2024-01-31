import React from "react";
import AuthGuard from "./guards/AuthGuard";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";
import PageURL from "../../constants/PageURL";
import SignUp from "./components/SignUp";
import LoginComponent from "./components/LoginComponent";
import ForgotPassword from "./components/ForgotPassword";
import OtpComponent from "./components/OtpComponent";

const AuthModule = () => {
    const location = useLocation();

    switch (location.pathname) {
        case PageURL.BASE:
            return (
                <AuthGuard>
                    <Login >
                        <LoginComponent />
                    </Login>
                </AuthGuard>
            )
        case PageURL.SIGN_UP:
            return (
                <AuthGuard>
                    <Login>
                        <SignUp />
                    </Login>
                </AuthGuard>
            )
        case PageURL.FORGOT_PASSWORD:
            return (
                <AuthGuard>
                    <Login>
                        <ForgotPassword />
                    </Login>
                </AuthGuard>
            )
            case PageURL.OTP_VERIFICATION:
                return (
                    <AuthGuard>
                        <Login>
                            <OtpComponent />
                        </Login>
                    </AuthGuard>
                )    
    }

}

export default AuthModule;