export type CompanyDetailType = {
  id: string;
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
  registeredAt: string;
  legalId: string;
  contactEmail: string;
  phoneNumber: string;
  facebookPage: string;
  instagramPage: string;
};
