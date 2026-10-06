"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitEnquiry } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { budgetOptions, initialEnquiryState } from "@/lib/enquiry";

const fieldBase =
  "w-full rounded-xl border bg-white px-4 text-[14.5px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending..." : "Send Enquiry"}
      {!pending && <ArrowRight className="h-4 w-4" />}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialEnquiryState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  const errorText = (key: keyof typeof state.errors) =>
    state.errors[key] ? (
      <p className="mt-1.5 text-[12.5px] font-medium text-red-600">
        {state.errors[key]}
      </p>
    ) : null;

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      {state.status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-[14px] text-emerald-800"
        >
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {state.message}
        </div>
      )}

      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-[14px] text-red-700"
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[13px] font-semibold text-ink">
            Your Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Whitfield"
            aria-invalid={Boolean(state.errors.name)}
            className={`${fieldBase} h-12 ${
              state.errors.name ? "border-red-400" : "border-line"
            }`}
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-ink">
            Email Address <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com.au"
            aria-invalid={Boolean(state.errors.email)}
            className={`${fieldBase} h-12 ${
              state.errors.email ? "border-red-400" : "border-line"
            }`}
          />
          {errorText("email")}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-[13px] font-semibold text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+61 2 9056 1088"
            aria-invalid={Boolean(state.errors.phone)}
            className={`${fieldBase} h-12 ${
              state.errors.phone ? "border-red-400" : "border-line"
            }`}
          />
          {errorText("phone")}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-[13px] font-semibold text-ink">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={`${fieldBase} h-12 appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10 ${
              state.errors.service ? "border-red-400" : "border-line"
            }`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5b75' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errorText("service")}
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 text-[13px] font-semibold text-ink">
          Approximate Budget
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {budgetOptions.map((budget, i) => (
            <label
              key={budget}
              className="cursor-pointer rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:border-brand-300 has-checked:border-brand-600 has-checked:bg-brand-600 has-checked:text-white has-focus-visible:ring-4 has-focus-visible:ring-brand-200"
            >
              <input
                type="radio"
                name="budget"
                value={budget}
                defaultChecked={i === 1}
                className="sr-only"
              />
              {budget}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-ink">
          Project Details <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your business, what you need built and any deadlines you are working to."
          aria-invalid={Boolean(state.errors.message)}
          className={`${fieldBase} resize-y py-3.5 ${
            state.errors.message ? "border-red-400" : "border-line"
          }`}
        />
        {errorText("message")}
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Submit />
        <p className="text-[12.5px] leading-6 text-ink-soft">
          We reply within one working day. Your details are never shared.
        </p>
      </div>
    </form>
  );
}
