const express = require("express");
const { registerEmployee, deleteEmployee, getAllEmployees, updateEmployee } = require("../controllers/employeeController");

const router = express.Router();

router.route("/register").post(registerEmployee);
router.route("/getAll").get(getAllEmployees);
router.route("/update/:id").put(updateEmployee);
router.route("/delete/:id").post(deleteEmployee);

module.exports = router;