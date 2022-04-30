import { faker } from '@faker-js/faker';
import { ComplainStatusEnum, ComplainType } from 'utils/types/complain';
export function generateComplains(id: string, companyId: string): ComplainType {
  return {
    id,
    companyId,
    title: faker.lorem.words(4),
    summary: faker.lorem.paragraph(),
    reasons: faker.lorem.words(5).split(' '),
    createdDate: faker.date.recent(100).toISOString(),
    status: faker.helpers.uniqueArray<ComplainStatusEnum>(
      [ComplainStatusEnum.ANSWERED, ComplainStatusEnum.NOT_ANSWERED],
      1,
    )[0],
  };
}
