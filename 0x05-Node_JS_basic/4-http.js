const http = require('http');

const hostname = '127.0.0.1';
const port = 1245

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!')
})
app.listen(port, hostname, () => {
  console.log('App is running');
})

module.exports = app;
