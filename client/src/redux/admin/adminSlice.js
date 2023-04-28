import { createSlice } from "@reduxjs/toolkit"
import { getAllAppoinments, getSerchAppoinments } from "./adminActions"
const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state[payload] = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllAppoinments.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllAppoinments.fulfilled, (state, { payload }) => {
                state.loading = false
                state.bookings = payload
            })
            .addCase(getAllAppoinments.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(getSerchAppoinments.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getSerchAppoinments.fulfilled, (state, { payload }) => {
                state.loading = false
                state.bookings = payload
            })
            .addCase(getSerchAppoinments.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export const { invalidate } = adminSlice.actions
export default adminSlice.reducer