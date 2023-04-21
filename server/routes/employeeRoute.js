const { registerEmployee, getEmployee, getEmployees, destroy } = require("../controllers/employeeController")

const router = require("express").Router()

router
    .get("/", getEmployees)
    .get("/:eid", getEmployee)
    .post("/register", registerEmployee)
    .delete("/destory", destroy)


module.exports = router