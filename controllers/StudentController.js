class StudentController {
  static getStudent(req, res) {
    res.send("Student Page List");
  }

  static create(req, res) {
    res.send("Create Student Page");
  }

  static getInformation(req, res) {
    const id = Number(req.params.userId);

    if (typeof id === "number" && isNaN(id) === false) {
      res.send(`Information Page ${id}`);
    } else {
      res.send("Id must be a number!");
    }
  }
}

module.exports = StudentController;
