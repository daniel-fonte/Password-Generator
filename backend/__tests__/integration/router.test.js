
import express from 'express';
import supertest from 'supertest';

import routes from '../../src/routes';

describe('testing route core', () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(routes);
  let response;

  beforeAll(async () => {
    response = await supertest(app).post('/').send({
      Length: 10, Uppercase: true, Numbers: false, Symbols: false,
    });
  });

  test('should return object with password', () => {
    expect(response.body).toHaveProperty('password', expect.any(String));
  });

  test('should return object password containing Uppercase Letters', async () => {
    const res = await supertest(app).post('/').send({
      Length: 10, Uppercase: true, Numbers: false, Symbols: false,
    });
    const regex = expect.stringMatching(/[A-Za]/);
    expect(res.body.password).toEqual(regex);
  });

  test('should return passord containing Numbers', async () => {
    const res = await supertest(app).post('/').send({
      Length: 10, Uppercase: false, Numbers: true, Symbols: false,
    });
    const regex = expect.stringMatching(/[a-z]\d/);
    expect(res.body.password).toEqual(regex);
  });

  test('should return passord containing Symbols', async () => {
    const res = await supertest(app).post('/').send({
      Length: 10, Uppercase: false, Numbers: false, Symbols: true,
    });
    // eslint-disable-next-line no-useless-escape
    const regex = expect.stringMatching(/(\!|\@|\#|\$|\&|\*|\=|\(|\)|\[|\]|\<|\>|\||\/|\?|)/gm);
    const regex2 = expect.stringMatching(/[a-z]/);
    expect(res.body.password).toEqual(regex);
    expect(res.body.password).toEqual(regex2);
  });

  test('should return error', async () => {
    const res = await supertest(app).post('/').send({
      Length: 1, Uppercase: true, Numbers: false, Symbols: false,
    });
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toBe('Password length minimum 3');
  });
});
