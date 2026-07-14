"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/lib/data";
import type { ContactFormErrors, ContactFormState } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const recipient = contactDetails.find((c) => c.label === "Email")?.value ?? "";

  function validate(values: ContactFormState): ContactFormErrors {
    const nextErrors: ContactFormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (values.phone.trim() && !/^[0-9+\s()-]{6,}$/.test(values.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please tell us about your project.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Please provide a few more details (at least 10 characters).";
    }

    return nextErrors;
  }

  function handleChange(field: keyof ContactFormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\n\n${form.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialState);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="font-heading text-xl font-semibold text-primary">
          Your email client should now be open
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Send the pre-filled message to complete your enquiry, or reach us
          directly at {recipient}.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
          Phone Number (optional)
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+971 4 xxx xxxx"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <p className="mt-1.5 text-sm text-destructive">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Project Details
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your site, programme and goals"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
        Send Enquiry
      </Button>
    </form>
  );
}
