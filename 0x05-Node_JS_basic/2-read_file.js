const fs = require('fs');

function countStudents(path) {
  try {
    let fileLength = 0;
    const students = {};
    const fields = {};
    const content = fs.readFileSync(path, 'utf-8');
    const lines = content.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        fileLength += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const l = fileLength - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, val] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${val}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
