const server = require('../index.js');
let testServer = server.app.listen(server.port);

const supertest = require('supertest');
const { Mongoose } = require('mongoose');
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

describe('Our basic product routes return status code 200', () => {
  const urlArray = ['/products','/products/1', '/products/1/related', '/products/1/styles'];

  for (url of urlArray) {
    it(`gets the '${url}' endpoint with status code 200`, async () => {
      const response = await request
      .get(url)
      expect(response.status).toEqual(200);
    });
  }
});

mongoose.connection.close();
testServer.close();