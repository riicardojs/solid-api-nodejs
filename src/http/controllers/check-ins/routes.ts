import { jwtVerify } from '@/http/middlewares/verify-jwt';
import { verifyUseRole } from '@/http/middlewares/verify-use-role';
import { FastifyInstance } from 'fastify';
import { create } from './create';
import { history } from './history';
import { metrics } from './metrics';
import { validate } from './validate';

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', jwtVerify);

  app.get('/check-ins/history', history);
  app.get('/check-ins/metrics', metrics);

  app.post('/gyms/:gymId/check-ins', create);
  app.patch(
    '/check-ins/:checkInId/validate',
    { onRequest: [verifyUseRole('ADMIN')] },
    validate
  );
}
