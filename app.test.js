const http = require('http');
const server = require('./app');

test('Server responds with HTML content', (done) => {
  http.get('http://localhost:3000', (res) => {
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
    server.close(done);
  });
});
