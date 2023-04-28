import { configureStore } from "@reduxjs/toolkit"
import publicSlice from "./public/publicSlice"
import adminSlice from "./admin/adminSlice"


const reduxStore = configureStore({
    reducer: {
        public: publicSlice,
        admin: adminSlice
    }
})

export default reduxStore