export enum ComplainStatusEnum {
  ANSWERED = 'ANSWERED',
  UNANSWERED = 'UNANSWERED',
}

export type ComplainType = {
  id: string;
  title: string;
  summary: string;
  reasons: string[];
  createdDate: string;
  status: ComplainStatusEnum;
  companyId: string;

  response?: string;
};
