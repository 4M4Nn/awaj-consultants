import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectCategory {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  projects: string[];
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
