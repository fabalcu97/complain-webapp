import { faker } from '@faker-js/faker';
import { getCompanyDetail } from 'temporal/company';
import { ComplainStatusEnum, ComplainType } from 'utils/types/complain';

export function generateComplain(): ComplainType {
  return {
    companyId: faker.datatype.uuid(),
    id: faker.datatype.uuid(),
    title: faker.lorem.words(4),
    summary: faker.lorem.paragraph(),
    reasons: faker.lorem.words(2).split(' '),
    createdDate: faker.date.recent(100).toISOString(),
    status: faker.helpers.uniqueArray<ComplainStatusEnum>(
      [ComplainStatusEnum.ANSWERED, ComplainStatusEnum.UNANSWERED],
      1,
    )[0],
    response: faker.lorem.paragraphs(),
    company: getCompanyDetail(),
  };
}
