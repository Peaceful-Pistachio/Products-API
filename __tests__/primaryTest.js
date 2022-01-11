const app = require('../index.js');
let server = app.listen(3000);

const supertest = require('supertest');
const request = supertest(server);

describe('Basic testing of tests and server:', () => {

  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  });

  it('gets the hello world endpoint', async () => {
    const response = await request
    .get('/hello-world')
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Hello World!');
  })

});

server.close();