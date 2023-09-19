const lecturerRoute = require("express").Router();
const lecturerController = require("../controllers/LecturerController");

lecturerRoute.get("/", lecturerController.getLecturers);

lecturerRoute.post("/create", lecturerController.create);

lecturerRoute.get("/information/:userId", lecturerController.getInformation);

lecturerRoute.delete("/delete/:id", lecturerController.delete);

lecturerRoute.post("/update/:id", lecturerController.update);

lecturerRoute.get("/search", lecturerController.search);

module.exports = lecturerRoute;
