const lecturer = require("../models/lecturerModels");

class LecturerController {
  static getLecturers(req, res) {
    // res.send("Lecturer Page List");
    lecturer
      .getAllLecturer()
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }

  static create(req, res) {
    res.send("Create Lecturer Page");
  }

  static getInformation(req, res) {
    const id = Number(req.params.userId);

    lecturer
      .getInformation(id)
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }
}

module.exports = LecturerController;
