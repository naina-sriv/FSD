const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filepath = path.join(__dirname, 'message.txt');
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading file\n');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
