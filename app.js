const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Docker CI/CD!');
}).listen(3000);