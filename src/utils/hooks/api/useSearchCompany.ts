import { useQuery } from 'react-query';
import { searchCompaniesRequest } from 'utils/api/company/searchCompany';
import { CompanyType } from 'utils/types/company';

export function useSearchCompany(searchValue: string) {
  return useQuery<CompanyType[]>(
    ['searchCompanies', searchValue],
    () => searchCompaniesRequest(searchValue),
    {},
  );
}
