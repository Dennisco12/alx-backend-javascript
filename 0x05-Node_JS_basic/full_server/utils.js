const { readFile } = require('fs');

function readDatabase(path) {
  const students = {};
  return new Promise((res, rej) => {
    readFile(path, (err, data) => {
      if (err) {
        rej(err);
      } else {
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1)
        for (let i = 0; i < noHeader[i].toString().split(',') {
	  if (noHeader[i]) {
	    const field = noHeader[i].toString().split(',');
	    if (Object.prototype.hasOwnProperty.call(students, fields[3])) {
    	      students[field[3]].push(field[0]);
	    } else {
	      students[field[3]] = [field[0]];
	    }
	  }
	}
	res(students);
      }
    });
  });
};
