const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Employee = require("../models/employeeModel");

// Register a Employee
exports.registerEmployee = catchAsyncErrors(async (req, res, next) => {
  const { name, email, age } = req.body;

  const employee = await Employee.create({
    name,
    email,
    age,
    
  });
  res.status(200).json({
    success: true,
    message: "Registerd Successfully",
  });
});

// Get all Employees
exports.getAllEmployees = catchAsyncErrors(async (req, res, next) => {
  const employees = await Employee.find();

  res.status(200).json({
    success: true,
    data: employees,
  });
});

// Update Employee
exports.updateEmployee = catchAsyncErrors(async (req, res, next) => {
  const { name, email, age } = req.body;

  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(
      new ErrorHandler(`Employee does not exist with Id: ${req.params.id}`, 400)
    );
  }

  // Update employee properties
  employee.name = name;
  employee.email = email;
  employee.age = age;

  await employee.save();

  res.status(200).json({
    success: true,
    message: "Employee Updated Successfully",
  });
});


// Delete Employee 
exports.deleteEmployee = catchAsyncErrors(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(
      new ErrorHandler(`Employee does not exist with Id: ${req.params.id}`, 400)
    );
  }
  await employee.remove();

  res.status(200).json({
    success: true,
    message: "Employee Deleted Successfully",
  });
});