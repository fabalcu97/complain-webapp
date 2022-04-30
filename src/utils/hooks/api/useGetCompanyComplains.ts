import { useQuery } from "react-query";
import { getCompanyComplains } from "utils/api/company/getComplains";

export function useGetCompanyComplains(companyId: string) {
  return useQuery(['getCompanyComplains', companyId], () => getCompanyComplains(companyId))
}