const student = require("../models/studentModels");

class StudentController {
  static getStudent(req, res) {
    student
      .getAllStudent()
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }

  static create(req, res) {
    res.send("Create Student Page");
  }

  static getInformation(req, res) {
    const id = Number(req.params.userId);

    student
      .getInformation(id)
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }
}

module.exports = StudentController;
