require("dotenv").config({ path: ".env" })
const mongoose = require("mongoose")
const express = require("express")
const { connectDB } = require("./config/db")
connectDB()
const app = express()
app.use(express.json())
app.use("/api/user", require("./routes/userRoutes"))

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED")
    app.listen(process.env.PORT || 5000, err => {
        if (err) {
            return console.log("UNABLE TO START SERVER ", err)
        }
        console.log(`SERVER RUNNING ON http://localhost:${process.env.PORT || 5000}`);
    })
})
mongoose.connection.on("error", err => {
    console.log("DB CONNECTION ERROR ", err)
})


