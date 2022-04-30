import faker from '@faker-js/faker';
import { CompanyType } from 'utils/types/company';

export const generateCompanies = (
  amount = 10,
  isGood = true,
): CompanyType[] => {
  return Array.from(Array(amount)).map((_, idx) => ({
    id: idx,
    name: faker.company.companyName(),
    logoUrl: faker.image.business(),
    rating: isGood
      ? faker.datatype.number({ min: 3, max: 5, precision: 2 })
      : faker.datatype.number({ min: 0, max: 2.9, precision: 2 }),
  }));
};
