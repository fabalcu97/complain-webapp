export enum ComplainStatusEnum {
  ANSWERED = 'ANSWERED',
  UNANSWERED = 'UNANSWERED',
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
