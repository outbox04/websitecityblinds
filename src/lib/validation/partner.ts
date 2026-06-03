import { z } from "zod";

// Server-side validation for partner registration and CRM attribution fields.
export const partnerRegistrationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().regex(/^[0-9+\s.-]{8,20}$/),
  email: z.string().trim().email().optional().or(z.literal("")),
  companyName: z.string().trim().min(2).max(160),
  province: z.string().trim().min(2).max(80),
  businessModel: z.string().trim().min(2).max(120),
  interestedProducts: z.array(z.string().trim().min(1)).min(1).max(8),
  note: z.string().trim().max(1000).optional().or(z.literal("")),
  sourcePage: z.string().trim().max(180).optional(),
  formLocation: z.string().trim().max(120).optional(),
  utmSource: z.string().trim().max(120).optional(),
  utmMedium: z.string().trim().max(120).optional(),
  utmCampaign: z.string().trim().max(120).optional(),
  referrerUrl: z.string().trim().max(500).optional(),
  currentUrl: z.string().trim().max(500).optional(),
  deviceType: z.string().trim().max(40).optional()
});

export type PartnerRegistrationInput = z.infer<typeof partnerRegistrationSchema>;
