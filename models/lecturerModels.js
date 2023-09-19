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

  static create(lecturer) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          const id = lecturers[lecturers.length - 1].id + 1;
          const { name, subject, age, city } = lecturer;

          let lecturerClass = new Lecturer(id, name, subject, age, city);
          lecturers.push(lecturerClass);
          //   console.log(lecturers);
          this.save(lecturers);
          resolve(lecturerClass);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          lecturers = lecturers.filter((lecturer) => lecturer.id !== id);
          this.save(lecturers);
          resolve(`Lecturer with id ${id} has been deleted`);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static update(lecturerId, lecturer) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          const { name, subject, age, city } = lecturer;
          lecturers = lecturers.map((lecturer) => {
            if (lecturer.id === lecturerId) {
              lecturer.name = name;
              lecturer.subject = subject;
              lecturer.age = age;
              lecturer.city = city;
            }
            return lecturer;
          });
          this.save(lecturers);
          resolve(`Lecturer with id ${lecturerId} has been updated!`);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static search(searchQuery) {
    return new Promise((resolve, reject) => {
      this.getAllLecturer()
        .then((result) => {
          let lecturers = result;
          const { name, subject, age, city } = searchQuery;

          let findLecturer = lecturers.filter((lecturer) => {
            return (
              (name ? lecturer.name === name : true) &&
              (subject ? lecturer.subject === subject : true) &&
              (age ? lecturer.age === age : true) &&
              (city ? lecturer.city === city : true)
            );
          });

          resolve(findLecturer);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static save(lecturers) {
    fs.writeFileSync("./lecturers.json", JSON.stringify(lecturers, null, 2));
  }
}

module.exports = Lecturer;
