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

  static create(student) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          const id = students[students.length - 1].id + 1;
          const { name, major, semester, city } = student;

          let studentClass = new Student(id, name, major, semester, city);
          students.push(studentClass);
          //   console.log(students);
          this.save(students);
          resolve(studentClass);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          students = students.filter((student) => student.id !== id);
          this.save(students);
          resolve(`Student with id ${id} has been deleted`);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static update(studentId, student) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          const { name, major, semester, city } = student;
          students = students.map((student) => {
            if (student.id === studentId) {
              student.name = name;
              student.major = major;
              student.semester = semester;
              student.city = city;
            }
            return student;
          });
          this.save(students);
          resolve(`student with id ${studentId} has been updated!`);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static search(searchQuery) {
    return new Promise((resolve, reject) => {
      this.getAllStudent()
        .then((result) => {
          let students = result;
          const { name, major, semester, city } = searchQuery;

          let findStudent = students.filter((student) => {
            return (
              (name ? student.name === name : true) &&
              (major ? student.major === major : true) &&
              (semester ? student.semester === semester : true) &&
              (city ? student.city === city : true)
            );
          });

          resolve(findStudent);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  static save(students) {
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
  }
}

module.exports = Student;
