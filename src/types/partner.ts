// Partner CRM model captures both submitted fields and attribution tracking.
export type PartnerRegistration = {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  companyName: string;
  province: string;
  businessModel: string;
  interestedProducts: string[];
  note?: string;
  sourcePage?: string;
  formLocation?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrerUrl?: string;
  currentUrl?: string;
  deviceType?: string;
  createdAt: string;
};
