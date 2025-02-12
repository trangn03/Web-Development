import axios from "axios";
import { 
    loginStart, 
    loginSuccess, 
    loginFailed, 
    registerStart,
    registerSuccess,
    registerFailed,
} from "./authSlice";

import {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed,
} from "./userSlice";

export const loginUser = async (user, dispatch, navigate ) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        console.log("Sending request to backend:", user);  // Log frontend request
        const res = await axios.post("/v1/auth/register", user, {
            headers: { "Content-Type": "application/json" }  // Ensure JSON format
        });
        console.log("Registration successful:", res.data);  // Log backend response
        dispatch(registerSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(registerFailed());
        console.error("Registration failed:", err.response?.data || err);  // Log backend error
    }
};

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUsersStart());
    try {
        console.log("Fetching users...");
        const res = await axiosJWT.get("/v1/user", {
        headers: { token: `Bearer ${accessToken}` },
    });
        console.log("Users fetched:", res.data);
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        console.error("Fetching users failed:", err.response?.data || err);
        dispatch(getUsersFailed());
    }
};


