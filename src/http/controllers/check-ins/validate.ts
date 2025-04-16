import { makeValidateCheckInsUseCase } from '@/use-cases/factories/make-validate-check-in-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const createCheckInParamsSchema = z.object({
    checkInId: z.string().uuid(),
  });

  const { checkInId } = createCheckInParamsSchema.parse(request.params);

  const useCase = makeValidateCheckInsUseCase();

  await useCase.execute({
    checkInId,
  });

  return reply.status(204).send();
}
