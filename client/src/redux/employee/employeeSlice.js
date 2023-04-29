import { createSlice } from "@reduxjs/toolkit"

import { getDoctorAppoinments } from "./employeeActions"
const employeeSlice = createSlice({
    name: "employee",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state[payload] = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getDoctorAppoinments.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getDoctorAppoinments.fulfilled, (state, { payload }) => {
                state.loading = false
                state.bookings = payload
            })
            .addCase(getDoctorAppoinments.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export const { invalidate } = employeeSlice.actions
export default employeeSlice.reducer