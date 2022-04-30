import { generateCompanies } from 'temporal/homeConstants';
import { CompanyType } from 'utils/types/company';

export async function searchCompaniesRequest(
  searchValue: string,
): Promise<CompanyType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateCompanies());
    }, 2000);
  });
}
