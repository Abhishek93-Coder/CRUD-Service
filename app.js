const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json())
app.use(cookieParser());

// Route imports
const employee = require("./routes/employeeRoutes");

app.use("/api/v1", employee);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app