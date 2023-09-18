const studentRoute = require("express").Router();
const studentController = require("../controllers/StudentController");

studentRoute.get("/", studentController.getStudent);

studentRoute.get("/create", studentController.create);

studentRoute.get("/information/:userId", studentController.getInformation);

module.exports = studentRoute;
