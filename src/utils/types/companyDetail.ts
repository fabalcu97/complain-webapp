export type CompanyDetailType = {
  name: string;
  logoUrl: string;
  about: string;
  stats: {
    feeling: {
      happy: number;
      neutral: number;
      unhappy: number;
    };
    wouldDoBusinessAgain: number;
    complains: {
      total: number;
      answered: number;
      pending: number;
    };
  };
};
