import { generateBadCompanies } from 'pages/home/constants';
import { CompanyType } from 'utils/types/company';

export async function searchCompaniesRequest(
  searchValue: string,
): Promise<CompanyType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateBadCompanies());
    }, 2000);
  });
}
