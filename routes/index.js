const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello!");
});

const lecturerRoutes = require("./lecturer");
route.use("/lecturers", lecturerRoutes);

const studentRoutes = require("./student");
route.use("/students", studentRoutes);

module.exports = route;
