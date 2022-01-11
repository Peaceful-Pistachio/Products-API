const server = require('../index.js');
let testServer = server.app.listen(server.port);

const supertest = require('supertest');
const request = supertest(testServer);

describe('Basic testing of tests and server:', () => {

  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  });

  it('gets the hello world endpoint', async () => {
    const response = await request
    .get('/hello-world')
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Hello World!');
  });
});

testServer.close();