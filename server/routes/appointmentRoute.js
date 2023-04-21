const { getAppointment, getAppointments, bookAppointment, destroyAppointments } = require("../controllers/appointmentController")

const router = require("express").Router()

router
    .get("/", getAppointments)
    .get("/:aid", getAppointment)
    .post("/book", bookAppointment)
    .delete("/destroy", destroyAppointments)


module.exports = router