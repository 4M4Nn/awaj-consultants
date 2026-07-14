import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactDetails, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AWAJ (Al Wasl Al Jadeed Consultants) at Clover Bay Tower, Dubai — call, email or send us your project brief.",
};

const iconMap: Record<string, typeof MapPin> = {
  Address: MapPin,
  Phone: Phone,
  "Phone (Alt)": Phone,
  Email: Mail,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Contact
      </p>
      <h1 className="font-heading mt-2 max-w-2xl text-4xl font-bold text-primary sm:text-5xl">
        Let&apos;s talk about your project
      </h1>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        Reach {siteConfig.fullName} at our Dubai office, or send us your
        project brief below and our team will follow up.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ul className="space-y-6">
            {contactDetails.map((detail) => {
              const Icon = iconMap[detail.label] ?? MapPin;
              return (
                <li key={detail.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{detail.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
