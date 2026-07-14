import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navLinks, contactDetails, siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  const address = contactDetails.find((c) => c.label === "Address");
  const phones = contactDetails.filter((c) => c.label.startsWith("Phone"));
  const email = contactDetails.find((c) => c.label === "Email");

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <span className="font-heading text-2xl font-bold tracking-tight">
              {siteConfig.name}
            </span>
            <p className="mt-3 text-sm text-primary-foreground/70">
              {siteConfig.fullName} — {siteConfig.focus}. {siteConfig.tagline}.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              {address && (
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{address.value}</span>
                </li>
              )}
              {phones.map((phone) => (
                <li key={phone.value} className="flex gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={phone.href} className="transition-colors hover:text-accent">
                    {phone.value}
                  </a>
                </li>
              ))}
              {email && (
                <li className="flex gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={email.href} className="transition-colors hover:text-accent">
                    {email.value}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Disciplines
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Architectural &amp; structural design, electro-mechanical engineering,
              project management, and full pre- and post-contract cost consultancy.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/60 sm:flex-row">
          <p>
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
