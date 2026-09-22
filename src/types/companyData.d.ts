export declare global {
  type CompanyData = {
    company: {
      name: string;
    };
    taxId: string;
    registrations: {
      number: string;
    }[];
    founded: string;
    address: {
      number: string;
      state: string;
      street: string;
      zip: string;
      district: string;
      details: string;
      city: string;
    };
    phones: {
      area: string;
      number: string;
    }[];
    emails: {
      address: string;
    }[];
  };
}
