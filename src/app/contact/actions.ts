"use server";

import { services } from "@/data/services";
import { EMAIL_PATTERN, type EnquiryState } from "@/lib/enquiry";

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const value = (key: string) => String(formData.get(key) ?? "").trim();

  const name = value("name");
  const email = value("email");
  const phone = value("phone");
  const service = value("service");
  const budget = value("budget");
  const message = value("message");

  const errors: EnquiryState["errors"] = {};

  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email address.";
  if (phone && phone.replace(/\D/g, "").length < 8) {
    errors.phone = "That phone number looks too short.";
  }
  if (service && !services.some((item) => item.title === service)) {
    errors.service = "Choose a service from the list.";
  }
  if (message.length < 20) {
    errors.message =
      "A little more detail helps us quote accurately (20+ characters).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
    };
  }

  // The enquiry is validated on the server and recorded here. Connect your
  // transactional email provider or CRM at this point (Resend, SendGrid,
  // HubSpot) to deliver it to the sales inbox.
  console.info("[enquiry]", {
    name,
    email,
    phone: phone || null,
    service: service || null,
    budget: budget || null,
    message,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: `Thanks ${name.split(" ")[0]} — your enquiry is in. We reply to every message within one working day.`,
    errors: {},
  };
}
