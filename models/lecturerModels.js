const fs = require("fs");

class Lecturer {
  constructor(id, name, subject, age, city) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.age = age;
    this.city = city;
  }

  static getAllLecturer() {
    return new Promise((resolve, reject) => {
      fs.readFile("./lecturers.json", "utf8", (e, data) => {
        if (e) {
          reject(e);
        } else {
          let lecturers = JSON.parse(data);
          lecturers = lecturers.map((lecturer) => {
            const { id, name, subject, age, city } = lecturer;
            return new Lecturer(id, name, subject, age, city);
          });
          resolve(lecturers);
        }
      });
    });
  }

  static getInformation(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          let findOneLecturer = lecturers.filter(
            (lecturer) => lecturer.id === id
          );

          if (findOneLecturer.length !== 0) {
            resolve(findOneLecturer[0]);
          } else {
            throw {
              message: `Lecturer with id ${id} not found`,
            };
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}

module.exports = Lecturer;
