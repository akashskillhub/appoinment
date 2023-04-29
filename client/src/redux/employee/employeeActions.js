import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const getDoctorAppoinments = createAsyncThunk("employee/get/appointmnets", async (employeeData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/employee/bookings")
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})