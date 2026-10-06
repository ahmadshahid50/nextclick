/**
 * Shared shape for the contact enquiry form. Kept out of the "use server"
 * module because server action files may only export async functions.
 */

export type EnquiryField =
  | "name"
  | "email"
  | "phone"
  | "service"
  | "message";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<EnquiryField, string>>;
};

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  message: "",
  errors: {},
};

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
] as const;
