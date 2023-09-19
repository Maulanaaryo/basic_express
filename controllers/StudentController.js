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
    // res.send("Create Student Page");
    student
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

    student
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

    student
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
    student
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
    student
      .search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      });
  }
}

module.exports = StudentController;
