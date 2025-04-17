import { app } from '@/app';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Should be able to create gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    const response = await request(app.server)
      .post('/gyms')
      .set({
        Authorization: `Bearer ${token}`,
      })
      .send({
        title: 'Javascript Gym',
        description: 'Some description',
        phone: '11999999999',
        latitude: -23.5514897,
        longitude: -46.5066368,
      });

    expect(response.statusCode).toEqual(201);
  });
});
