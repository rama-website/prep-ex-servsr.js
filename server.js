const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    // If the root path is requested
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.end('Error reading the file');
      } else {
        res.end(data); // Serve the HTML file
      }
    });
  } else if (req.url === '/index.js') {
    // If the "/index.js" path is requested
    fs.readFile('index.js', (err, data) => {
      if (err) {
        res.end(err.message); // Serve any errors
      } else {
        res.setHeader('Content-Type', 'text/javascript');
        res.end(data); // Serve the JavaScript file
      }
    });
  } else {
    // For any other path
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

