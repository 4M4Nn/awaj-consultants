export interface SiteImage {
  src: string;
  alt: string;
  caption?: string;
}

function unsplash(id: string, params = "w=1600&q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const introSlides: SiteImage[] = [
  {
    src: unsplash("1502005229762-cf1b2da7c5d6"),
    alt: "Sculptural staircase inside a modern home",
  },
  {
    src: unsplash("1600585154340-be6161a56a0c"),
    alt: "Contemporary residence at twilight",
  },
  {
    src: unsplash("1541888946425-d81bb19240f5"),
    alt: "Aerial view of a building foundation under construction",
  },
  {
    src: unsplash("1600566753151-384129cf4e3e"),
    alt: "Living room opening onto a private pool terrace",
  },
];

export const heroImage: SiteImage = {
  src: unsplash("1600585154340-be6161a56a0c"),
  alt: "Contemporary residence at twilight",
};

export const categoryImages: Record<string, SiteImage> = {
  residential: {
    src: unsplash("1600566753151-384129cf4e3e"),
    alt: "Living room opening onto a private pool terrace",
  },
  educational: {
    src: unsplash("1481253127861-534498168948"),
    alt: "Upward view of a modern institutional building facade",
  },
  industrial: {
    src: unsplash("1553413077-190dd305871c"),
    alt: "Interior of a large logistics warehouse",
  },
  "master-planning": {
    src: unsplash("1541976590-713941681591"),
    alt: "Looking up at two modern residential towers",
  },
  "special-projects": {
    src: unsplash("1487958449943-2429e8be8625"),
    alt: "Angular glass and steel institutional building",
  },
};

export const aboutHeroImage: SiteImage = {
  src: unsplash("1541888946425-d81bb19240f5"),
  alt: "Aerial view of a building foundation under construction",
};

export const aboutImages = {
  howWeWork: {
    src: unsplash("1503387762-592deb58ef4e"),
    alt: "Architect sketching a plan by hand at a desk",
  },
  leadership: {
    src: unsplash("1568992687947-868a62a9f521"),
    alt: "Team collaborating around a table in a studio",
  },
};

export const galleryImages: SiteImage[] = [
  {
    src: unsplash("1600585152220-90363fe7e115"),
    alt: "Contemporary kitchen with natural wood cabinetry",
    caption: "Interior Detailing",
  },
  {
    src: unsplash("1600607687920-4e2a09cf159d"),
    alt: "Open-plan dining area with a floating staircase",
    caption: "Spatial Planning",
  },
  {
    src: unsplash("1600566752355-35792bedcfea"),
    alt: "Freestanding bathtub in a dark, minimalist bathroom",
    caption: "Material Selection",
  },
  {
    src: unsplash("1523217582562-09d0def993a6"),
    alt: "White contemporary villa exterior",
    caption: "Residential Design",
  },
  {
    src: unsplash("1600607687939-ce8a6c25118c"),
    alt: "Bright living room with a timber feature wall",
    caption: "Interior Architecture",
  },
  {
    src: unsplash("1600047509807-ba8f99d2cdde"),
    alt: "Modern home exterior with timber cladding",
    caption: "Facade Design",
  },
];
