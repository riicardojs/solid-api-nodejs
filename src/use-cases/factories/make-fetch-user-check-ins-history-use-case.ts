import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository';
import { GetUserMetricsUseCase } from '../get-user-metrics';
import { FetchCheckInsHistoryUseCase } from '../fetch-user-check-ins-history';

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository();
  const useCase = new FetchCheckInsHistoryUseCase(checkInsRepository);

  return useCase;
}
