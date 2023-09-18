const lecturerRoute = require("express").Router();
const lecturerController = require("../controllers/LecturerController");

lecturerRoute.get("/", lecturerController.getLecturers);

lecturerRoute.get("/create", lecturerController.create);

lecturerRoute.get("/information/:userId", lecturerController.getInformation);

module.exports = lecturerRoute;
