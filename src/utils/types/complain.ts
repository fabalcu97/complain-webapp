export enum ComplainStatusEnum {
  ANSWERED = 'ANSWERED',
  NOT_ANSWERED = 'NOT_ANSWERED',
}

export type ComplainType = {
  id: string;
  companyId: string;
  title: string;
  summary: string;
  reasons: string[];
  createdDate: string;
  status: ComplainStatusEnum;
};
