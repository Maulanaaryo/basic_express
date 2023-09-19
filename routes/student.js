const studentRoute = require("express").Router();
const studentController = require("../controllers/StudentController");

studentRoute.get("/", studentController.getStudent);

studentRoute.get("/create", studentController.create);

studentRoute.get("/information/:userId", studentController.getInformation);

studentRoute.delete("/delete/:id", studentController.delete);

studentRoute.post("/update/:id", studentController.update);

studentRoute.get("/search", studentController.search);

module.exports = studentRoute;
