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
    // console.log(req.body);
    // res.send("Create Lecturer Page");
    lecturer
      .create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
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

  static delete(req, res) {
    const id = Number(req.params.id);

    lecturer
      .delete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    lecturer
      .update(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }

  static search(req, res) {
    console.log(req.query);
    lecturer
      .search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }
}

module.exports = LecturerController;
