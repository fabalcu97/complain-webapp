import { generateComplain } from 'temporal/complains';
import { ComplainType } from 'utils/types/complain';

type CompanyComplainsResponse = {
  data: ComplainType[];
  count: number;
  offset?: string | number;
};

type ListParams = {
  sort: {
    attr: 'DATE_CREATED' | 'ANSWERED' | 'UNANSWERED';
    order: 'ASC' | 'DESC';
  };
  offset: string | number;
  limit: number;
};

const defaultListParams: ListParams = {
  sort: {
    attr: 'DATE_CREATED',
    order: 'ASC',
  },
  limit: 20,
  offset: 0,
};

export function getCompanyComplains(
  companyId: string,
  params: ListParams = defaultListParams,
): Promise<CompanyComplainsResponse> {
  const { limit } = params;
  const complains: ComplainType[] = [];

  for (let count = 0; count < limit; count++) {
    complains.push(generateComplain(companyId));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ count: 1452, data: complains });
    }, 2000);
  });
}
