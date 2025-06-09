const http = require('http');
const requestHandler = require('../index');

test('responds with Hello World message', done => {
  const req = new http.IncomingMessage();
  const res = new http.ServerResponse(req);

  // Mock end() method to test response
  res.end = (message) => {
    expect(message).toBe('Hello, World from Azure Node.js 20! Patch 1');
    done();
  };

  requestHandler(req, res);
});
