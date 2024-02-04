import {
    allow_user_fail,
    allow_user_request,
    allow_user_reset,
    allow_user_sucess,
    clear_errors,
    delete_user_fail,
    delete_user_request,
    delete_user_reset,
    delete_user_sucess,
    get_user_fail,
    get_user_request,
    get_user_sucess,
    registerd_user_fail,
    registerd_user_request,
    registerd_user_sucess,
    resend_otp_fail,
    resend_otp_request,
    resend_otp_reset,
    resend_otp_sucess,
    send_otp_fail,
    send_otp_request,
    send_otp_reset,
    send_otp_sucess,
    user_login_fail,
    user_login_request,
    user_login_reset,
    user_login_sucess,
    user_logout_fail,
    user_logout_request,
    user_logout_reset,
    user_logout_sucess,
    user_signup_fail,
    user_signup_request,
    user_signup_reset,
    user_signup_sucess,
    verify_otp_fail,
    verify_otp_request,
    verify_otp_reset,
    verify_otp_sucess
} from "../constants/dataConstants"

export const user = (state = { user: null }, action) => {

    switch (action.type) {
        case user_signup_request:
        case user_login_request:
        case get_user_request:
        case user_logout_request:
        case send_otp_request:
        case verify_otp_request:
        case resend_otp_request:
            return {
                ...state,
                loading: true
            };

        case send_otp_sucess: {
            return {
                ...state,
                loading: false,
                isSendOtp: action.payload
            }
        }
        case resend_otp_sucess: {
            return {
                ...state,
                loading: false,
                isResendOtp: action.payload
            }
        }
        case verify_otp_sucess: {
            return {
                ...state,
                loading: false,
                isVerifiedOtp: action.payload
            }
        }
        case user_signup_sucess:
            return {
                ...state,
                loading: false,
                sucess: action.payload
            };

        case user_logout_sucess:
            return {
                ...state,
                loading: false,
                isLogout: action.payload,
            };

        case get_user_sucess:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case user_login_sucess:
            return {
                ...state,
                loading: false,
                user: action.payload?.user,
                isLogin: true,
                auth_token: action.payload?.auth_token
            };
        case user_signup_fail:
        case user_login_fail:
        case user_logout_fail:
        case send_otp_fail:
        case verify_otp_fail:
        case resend_otp_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case get_user_fail:
            return {
                ...state,
                error: null,
                loading: false
            }

        case user_signup_reset:
            return {
                ...state,
                loading: false,
                sucess: false
            }

        case user_login_reset:
            return {
                ...state,
                loading: false,
                isLogin: false
            }
        case user_logout_reset:
            return {
                ...state,
                loading: false,
                isLogout: false
            }
        case send_otp_reset: {
            return {
                ...state,
                loading: false,
                isSendOtp: false
            }
        }

        case resend_otp_reset: {
            return {
                ...state,
                loading: false,
                isResendOtp: false
            }
        }

        case verify_otp_reset: {
            return {
                ...state,
                loading: false,
                isVerifiedOtp: false
            }
        }
        case clear_errors:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state;
    }

}


export const registred_users = (state = { registred_users: null }, action) => {

    switch (action.type) {
        case registerd_user_request:
            return {
                ...state,
                loading: true
            };
        case registerd_user_sucess:
            return {
                ...state,
                loading: false,
                registred_users: action.payload
            };

        case registerd_user_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case clear_errors:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state;
    }

}


export const allow_user = (state = { allow_user: null }, action) => {

    switch (action.type) {
        case allow_user_request:
        case delete_user_request:
            return {
                ...state,
                loading2: true
            };
        case allow_user_sucess:
            return {
                ...state,
                loading2: false,
                isAllowed: action.payload
            };
        case delete_user_sucess:
            return {
                ...state,
                loading2: false,
                isDeleted: action.payload
            };

        case allow_user_fail:
        case delete_user_fail:
            return {
                ...state,
                loading2: false,
                error: action.payload
            };
        case allow_user_reset:
            return {
                ...state,
                loading2: false,
                isAllowed: false
            }

        case delete_user_reset:
            return {
                ...state,
                loading2: false,
                isDeleted: false
            }
        case clear_errors:
            return {
                ...state,
                loading2: false,
                error: null
            }
        default:
            return state;
    }

}