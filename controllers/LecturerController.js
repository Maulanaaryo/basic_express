class LecturerController {
  static getLecturers(req, res) {
    res.send("Lecturer Page List");
  }

  static create(req, res) {
    res.send("Create Lecturer Page");
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

module.exports = LecturerController;
