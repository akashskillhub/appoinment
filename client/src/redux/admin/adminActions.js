import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const getAllAppoinments = createAsyncThunk("admin/get/appoinments", async (bookingData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/appointment")
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const getSerchAppoinments = createAsyncThunk("admin/serch/appoinments", async (term, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/search", { term })
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})