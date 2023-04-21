import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"
export const registerUser = createAsyncThunk("public/register", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/register", userData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})
export const loginUser = createAsyncThunk("public/login", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/login", userData)
        localStorage.setItem("info", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})