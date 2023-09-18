const fs = require("fs");

class Student {
  constructor(id, name, major, semester, city) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.semester = semester;
    this.city = city;
  }

  static getAllStudent() {
    return new Promise((resolve, reject) => {
      fs.readFile("./students.json", "utf8", (e, data) => {
        if (e) {
          reject(e);
        } else {
          let students = JSON.parse(data);
          students = students.map((student) => {
            const { id, name, major, semester, city } = student;
            return new Student(id, name, major, semester, city);
          });
          resolve(students);
        }
      });
    });
  }

  static getInformation(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          let findOneStudent = students.filter((student) => student.id === id);

          if (findOneStudent.length !== 0) {
            resolve(findOneStudent[0]);
          } else {
            throw {
              message: `Student with id ${id} not found`,
            };
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}

module.exports = Student;
