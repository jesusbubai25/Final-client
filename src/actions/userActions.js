import axios from "axios";
import {
    user_signup_fail, user_signup_request, user_signup_sucess, user_login_fail,
    user_login_request, user_login_sucess, registerd_user_request, registerd_user_sucess,
    registerd_user_fail, get_user_request, get_user_sucess, get_user_fail, user_logout_request,
    user_logout_sucess, user_logout_fail, allow_user_request, allow_user_sucess, allow_user_fail,
    delete_user_request, delete_user_sucess, delete_user_fail, send_otp_request, send_otp_sucess, send_otp_fail, verify_otp_request, verify_otp_sucess, verify_otp_fail, resend_otp_request, resend_otp_sucess, resend_otp_fail
} from "../constants/dataConstants";


// axios.create({
//     baseURL: "http://localhost:8000",
//     withCredentials: true
// })



// axios.create({
//     baseURL: "http://195.35.21.41:8000",
//     withCredentials: true
// })

export const userSignup = (data) => async (dispatch) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        userLevel
    } = data
    try {
        dispatch({ type: user_signup_request })

        // const { data } = await axios.post(`/sign-up`,
        const { data } = await axios.post(`http://195.35.21.41:8000/sign-up`,
            { firstName, lastName, email, phoneNumber, userLevel: userLevel },{withCredentials:true}
        );
        dispatch({ type: user_signup_sucess, payload: data.sucess })

    } catch (error) {
        dispatch({ type: user_signup_fail, payload: error?.response?.data?.error || error?.message })
    }
}

export const userLogin = (data) => async (dispatch) => {
    const {
        userName,
        password
    } = data
    try {
        dispatch({ type: user_login_request })

        // const { data } = await axios.post(`/login`,
        const { data } = await axios.post(`http://195.35.21.41:8000/login`,
            { userName, password }, { withCredentials: true }
        );
        console.log("data is ",data)
        dispatch({ type: user_login_sucess, payload: { user: data.user, auth_token: data.auth_token } })
    } catch (error) {

        dispatch({ type: user_login_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const userLogout = () => async (dispatch) => {
    try {
        dispatch({ type: user_logout_request })
        const token = localStorage.getItem("auth_token")
        if (token) {
            localStorage.removeItem("auth_token")
            dispatch({ type: user_logout_sucess, payload: true })
        } else dispatch({ type: user_logout_fail, payload: "User not found" })

    } catch (error) {
        dispatch({ type: user_logout_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const getUser = () => async (dispatch) => {
    try {
    const token = localStorage.getItem("auth_token")

        dispatch({ type: get_user_request })

        // const { data } = await axios.get(`/getuser`);
        const { data } = await axios.post(`http://195.35.21.41:8000/getuser`,
        { auth_token: token },{withCredentials:true}

        );
        dispatch({ type: get_user_sucess, payload: data.user })

    } catch (error) {
        dispatch({ type: get_user_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const registredUsers = () => async (dispatch) => {
    try {
        dispatch({ type: registerd_user_request })

        // const { data } = await axios.get(`/admin/registered-users`);
        const { data } = await axios.get(`http://195.35.21.41:8000/admin/registered-users`);
        dispatch({ type: registerd_user_sucess, payload: data.users })

    } catch (error) {
        dispatch({ type: registerd_user_fail, payload: error?.response?.data?.error || error?.message })
    }
}

export const allowUser = (email_ID) => async (dispatch) => {
    console.log(email_ID)

    try {
        dispatch({ type: allow_user_request })

        // const { data } = await axios.post(`/admin/allow-user`,
        const { data } = await axios.post(`http://195.35.21.41:8000/admin/allow-user`,
            { email_ID },{withCredentials:true}
        );
        dispatch({ type: allow_user_sucess, payload: data.sucess })

    } catch (error) {
        dispatch({ type: allow_user_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const deleteUser = (email_ID) => async (dispatch) => {
    try {
        dispatch({ type: delete_user_request })

        // const { data } = await axios.delete(`/admin/delete-user/${email_ID}`);
        const { data } = await axios.delete(`http://195.35.21.41:8000/admin/delete-user/${email_ID}`);
        dispatch({ type: delete_user_sucess, payload: data.sucess })

    } catch (error) {
        dispatch({ type: delete_user_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const sendOtp = (email_ID) => async (dispatch) => {
    try {
        dispatch({ type: send_otp_request })

        // const { data } = await axios.post(`/send-otp`, { email_ID }, { withCredentials: true });
        const { data } = await axios.post(`http://195.35.21.41:8000/send-otp`, { email_ID },{withCredentials:true});
        dispatch({ type: send_otp_sucess, payload: data.sucess })

    } catch (error) {
        dispatch({ type: send_otp_fail, payload: error?.response?.data?.error || error?.message })
    }
}

export const ResendOtp = (email_ID) => async (dispatch) => {
    try {
        dispatch({ type: resend_otp_request })

        // const { data } = await axios.post(`/resend-otp`, { email_ID }, { withCredentials: true });
        const { data } = await axios.post(`http://195.35.21.41:8000/resend-otp`, { email_ID },{withCredentials:true});
        dispatch({ type: resend_otp_sucess, payload: data.sucess })

    } catch (error) {
        dispatch({ type: resend_otp_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const verifyOtp = (otp, email_ID) => async (dispatch) => {
    try {
        dispatch({ type: verify_otp_request })

        // const { data } = await axios.post(`/verify-otp`, { otp, email_ID }, { withCredentials: true });
        const { data } = await axios.post(`http://195.35.21.41:8000/verify-otp`, { otp, email_ID },{withCredentials:true});
        dispatch({ type: verify_otp_sucess, payload: data.sucess })

    } catch (error) {
        dispatch({ type: verify_otp_fail, payload: error?.response?.data?.error || error?.message })
    }
}

