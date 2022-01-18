const server = require('../../index.js');
let testServer = server.app.listen(3001);
const supertest = require('supertest');
const request = supertest(testServer);
const mongoose = require('mongoose');

afterAll(()=>{ mongoose.connection.close();});


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
  const urlArray = ['/products', '/products/1', '/products/1/related', '/products/1/styles'];

  for (url of urlArray) {
    it(`gets the '${url}' endpoint with status code 200`, async () => {
      const response = await request
        .get(url)
      expect(response.status).toEqual(200);
    });
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('Should return products for any product id between 1 and 1000011', () => {
  let urlArray = [];
  for (let i = 0; i < 5; i++) {
    urlArray.push('/products/' + getRandomInt(1, 1000011).toString());
  }
  for (url of urlArray) {
    it(`gets the '${url}' endpoint with status code 200`, async () => {
      const response = await request
        .get(url)
      expect(response.status).toEqual(200);
    });
  }
});

describe('Checking response times:', () => {

  test('Response time under 100 ms', async () => {
    const startTime = performance.now();
    const response = await request
      .get('/products')
    expect(response.status).toEqual(200);
    expect(performance.now() - startTime).toBeLessThan(100);
  });

});

testServer.close();