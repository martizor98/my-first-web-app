const http = require('http');

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World from Azure Node.js 20! Patch 1');
};

const port = process.env.PORT || 3000;
const server = http.createServer(requestHandler);

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = requestHandler;
