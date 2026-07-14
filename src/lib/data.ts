import {
  Building2,
  Layers,
  Zap,
  ClipboardList,
  Leaf,
  Trees,
  Sofa,
  Calculator,
  Gauge,
  FileText,
  LineChart,
  Handshake,
  Home,
  GraduationCap,
  Factory,
  Map,
  Sparkles,
} from "lucide-react";
import type {
  NavLink,
  Service,
  ProjectCategory,
  Leader,
  Stat,
  ContactDetail,
} from "@/types";

export const siteConfig = {
  name: "AWAJ",
  fullName: "Al Wasl Al Jadeed Consultants",
  shortName: "AWAJ Consultants",
  tagline: "We deliver from concept to completion",
  focus: "Architects, Engineers, Planners",
  founded: 1981,
  description:
    "AWAJ (Al Wasl Al Jadeed Consultants) is a Dubai-based firm of consulting architects and engineers, established in 1981, delivering residential, educational, industrial, master planning and special projects across the United Arab Emirates.",
  url: "https://awaj-consultants.vercel.app",
};

export const yearsInBusiness = () => new Date().getFullYear() - siteConfig.founded;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const leadership: Leader[] = [
  {
    name: "Obaid Ghanim A. R. Al Mutaiwei",
    role: "Chairman & Managing Partner",
    bio: "Founder and owner of the Al Mutaiwei group of companies and a descendant of one of Dubai's original families. Began his career as a trainee engineer with Abu Dhabi's National Oil Company and holds a British electrical engineering qualification. Following the 1979 completion of the Dry Docks, he rose to the chairmanship of Dubai Ship Docking Yard (Jadaf) before founding AWAJ in 1981.",
  },
  {
    name: "Mangesh Shetye",
    role: "Managing Director & Partner",
    bio: "An early pioneer of AWAJ who was promoted to Chief Architect and now oversees all company operations and project conception. Draws on a background in both teaching and architectural practice to lead diverse, high-quality work including campus master plans, university facilities, conference centres and residential developments.",
  },
];

export const stats: Stat[] = [
  { label: "Years of Practice", value: `${yearsInBusiness()}+` },
  { label: "Completed Projects", value: "60+" },
  { label: "Service Disciplines", value: "12" },
  { label: "Project Categories", value: "5" },
];

export const services: Service[] = [
  {
    slug: "architectural-design",
    name: "Architectural Design",
    description:
      "Concept-to-completion architectural design for residential, educational, industrial and mixed-use developments, balancing aesthetics, function and buildability.",
    icon: Building2,
  },
  {
    slug: "structural-design",
    name: "Structural Design",
    description:
      "Structural engineering for buildings of every scale, delivering safe, efficient and code-compliant structural systems from foundation to roof.",
    icon: Layers,
  },
  {
    slug: "electro-mechanical",
    name: "Electro Mechanical",
    description:
      "Integrated electrical and mechanical engineering services covering power, lighting, HVAC, plumbing and fire protection systems.",
    icon: Zap,
  },
  {
    slug: "project-management",
    name: "Project Management",
    description:
      "End-to-end project management that coordinates design, procurement and construction teams to keep projects on programme and on budget.",
    icon: ClipboardList,
  },
  {
    slug: "sustainability-design",
    name: "Sustainability Design",
    description:
      "Sustainable design strategies that reduce environmental impact and lifecycle cost while meeting local regulatory green building standards.",
    icon: Leaf,
  },
  {
    slug: "landscape-design",
    name: "Landscape Design",
    description:
      "Landscape architecture that shapes outdoor spaces, hardscaping and planting design in step with the built environment.",
    icon: Trees,
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    description:
      "Interior design services that carry a project's architectural language through to finishes, materials and spatial planning.",
    icon: Sofa,
  },
  {
    slug: "quantity-surveying",
    name: "Quantity Surveying",
    description:
      "Accurate quantity take-offs and bills of quantities that give clients cost certainty from early design through tender.",
    icon: Calculator,
  },
  {
    slug: "value-engineering",
    name: "Value Engineering",
    description:
      "Structured value engineering reviews that identify cost savings and efficiency gains without compromising design intent or quality.",
    icon: Gauge,
  },
  {
    slug: "contract-administration",
    name: "Contract Administration",
    description:
      "Impartial contract administration that protects client interests and keeps construction contracts running smoothly to completion.",
    icon: FileText,
  },
  {
    slug: "cost-planning-monitoring",
    name: "Cost Planning & Monitoring",
    description:
      "Ongoing cost planning and monitoring throughout the project lifecycle, flagging variances early and keeping budgets under control.",
    icon: LineChart,
  },
  {
    slug: "bid-negotiations",
    name: "Bid Negotiations",
    description:
      "Experienced bid evaluation and negotiation support that helps clients select the right contractors at the right price.",
    icon: Handshake,
  },
];

export const projectCategories: ProjectCategory[] = [
  {
    slug: "residential",
    name: "Residential",
    summary: "Villas, apartments, townhouses and mixed residential communities.",
    description:
      "AWAJ's residential portfolio spans standalone villas, branded apartments, townhouses and multi-storey residential buildings across Dubai, designed for developers and private clients alike.",
    icon: Home,
    projects: [
      "Greenside Residence",
      "Club-Drive Residence",
      "Club Place",
      "Aqua Arc",
      "G+1P+5 Residential Building",
      "Vida Hotel & Branded Apartments",
      "Samara Villa",
      "Azalea Villa",
      "District 6F Villas",
      "Ras Al Khor Development",
      "Hotel Staff Accommodation",
      "Nakheel Mall & Tower",
      "UNA Apartments - Town Square Dubai",
      "Town Square - Rawda - 2 Apartments",
      "Reem Townhouses",
      "Belgravia 1",
      "Belgravia 2",
      "Belgravia 3",
      "Kensington Waters",
      "Golf Residences by Fortimo",
      "Fashionz by DANUBE",
      "Hillmont Residences",
      "Grand Millennium Hotel",
      "2B+G+14 Residential Tower",
      "B+G+11 Residential Building",
      "Eaton Place",
      "HIVE JVC",
      "Wilton Park",
    ],
  },
  {
    slug: "educational",
    name: "Educational",
    summary: "University master plans, colleges and K-12 school campuses.",
    description:
      "From full university master plans to individual school and kindergarten campuses, AWAJ designs educational environments built around how students and staff actually use space.",
    icon: GraduationCap,
    projects: [
      "Glocal University Master Plan",
      "Management College",
      "Engineering College",
      "Credence School",
      "American School",
      "British School",
      "Pearl Wisdom School",
      "Westfield Kindergarten",
      "Westfield School",
    ],
  },
  {
    slug: "industrial",
    name: "Industrial",
    summary: "Warehousing, logistics hubs and light-industrial facilities.",
    description:
      "AWAJ delivers industrial and logistics facilities engineered for operational efficiency, from single-tenant warehouses to large multi-user fulfilment and distribution hubs.",
    icon: Factory,
    projects: [
      "KLP",
      "Metal Park",
      "VIVA Warehouse",
      "Landmark Logistic",
      "Lulu Central Logistic Hub",
      "Storage Warehouse",
      "E-Fulfilment Centre",
      "Multi-User Facility",
      "B+G+2 Office & Workshop Facilities for GE",
      "C&J Energy International",
      "Industrial Precinct",
      "Dubai Wholesale City",
      "Gulf Extrusion",
      "ISUZU",
      "JVC Light Industrial Units",
      "Ceva Logistics",
      "Showrooms",
      "Zee Stores",
      "Djibouti Automobile & Heavy Equipment Zone",
    ],
  },
  {
    slug: "master-planning",
    name: "Master Planning",
    summary: "Large-scale community, institutional and government master plans.",
    description:
      "AWAJ's master planning work sets the framework for entire communities and campuses, sequencing residential, educational, hospitality and civic uses across a single cohesive plan.",
    icon: Map,
    projects: [
      "Residential Community Master Plan",
      "Reem Townhouses",
      "Samara Villa",
      "Azalea Villa",
      "Ras Al Khor Development",
      "District 6F Villas",
      "Hotel Staff Accommodation",
      "Glocal University Master Plan",
      "Management College",
      "Engineering College",
      "RTA Villas for Dubai Police Force",
    ],
  },
  {
    slug: "special-projects",
    name: "Special Projects",
    summary: "Unique, one-of-a-kind civic and recreational commissions.",
    description:
      "Beyond standard building types, AWAJ has taken on distinctive civic and recreational commissions that call for a more bespoke design and engineering response.",
    icon: Sparkles,
    projects: [
      "Diving & Heritage Village",
      "Canine Training Facility",
      "Inter-Emirates Taxi Station & Bus Terminus",
      "Recreational Facility",
    ],
  },
];

export const contactDetails: ContactDetail[] = [
  {
    label: "Address",
    value: "Clover Bay Tower, Office #1408, 1409, 1410, Dubai, United Arab Emirates",
  },
  {
    label: "Phone",
    value: "04 565 7710",
    href: "tel:+97145657710",
  },
  {
    label: "Phone (Alt)",
    value: "04 565 7701",
    href: "tel:+97145657701",
  },
  {
    label: "Email",
    value: "info@skawaj.com",
    href: "mailto:info@skawaj.com",
  },
];

export const seoKeywords = [
  "AWAJ consultants",
  "Al Wasl Al Jadeed Consultants",
  "Dubai architecture consultants",
  "structural engineering Dubai",
  "master planning UAE",
  "construction consultancy Dubai",
  "architects engineers planners Dubai",
  "project management Dubai",
  "quantity surveying UAE",
  "value engineering Dubai",
];
