import faker from '@faker-js/faker';
import { CompanyDetailType } from 'utils/types/companyDetail';

export function getCompanyDetail(): CompanyDetailType {
  return {
    about: faker.lorem.paragraph(),
    registeredAt: faker.date.past().toISOString(),
    logoUrl: faker.image.business(),
    name: faker.company.companyName(),
    legalId: faker.random.alphaNumeric(11),
    contactEmail: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    facebookPage: faker.internet.url(),
    instagramPage: faker.internet.url(),
    stats: {
      feeling: {
        happy: faker.datatype.float({ max: 1 }),
        neutral: faker.datatype.float({ max: 1 }),
        unhappy: faker.datatype.float({ max: 1 }),
      },
      wouldDoBusinessAgain: faker.datatype.float({ max: 1 }),
      complains: {
        total: 13,
        answered: 9,
        pending: 4,
      },
    },
  };
}
