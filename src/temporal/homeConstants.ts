import { random } from 'lodash';
import { CompanyType } from 'utils/types/company';

export const generateGoodCompanies = (amount = 10): CompanyType[] => {
  return Array.from(Array(amount)).map((_, idx) => ({
    id: idx,
    name: `Business ${idx}`,
    logoUrl:
      'https://www.pinclipart.com/picdir/big/51-511102_feather-arrow-clip-art.png',
    rating: random(3, 5, true),
  }));
};

export const generateBadCompanies = (amount = 10): CompanyType[] => {
  return Array.from(Array(amount)).map((_, idx) => ({
    id: idx,
    name: `Business ${idx}`,
    logoUrl:
      'https://www.pinclipart.com/picdir/big/51-511102_feather-arrow-clip-art.png',
    rating: random(0, 2.5, true),
  }));
};
