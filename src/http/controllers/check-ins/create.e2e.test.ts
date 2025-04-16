import { app } from '@/app';
import { prisma } from '@/lib/prisma';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

describe('Create Check-in (e2e)', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Should be able to create check-in', async () => {
    const { token } = await createAndAuthenticateUser(app);

    const gym = await prisma.gym.create({
      data: {
        title: 'Javascript Gym',
        latitude: -23.5514897,
        longitude: -46.5066368,
      },
    });

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/check-ins`)
      .set({
        Authorization: `Bearer ${token}`,
      })
      .send({
        latitude: -23.5514897,
        longitude: -46.5066368,
      });

    expect(response.statusCode).toEqual(201);
  });
});
