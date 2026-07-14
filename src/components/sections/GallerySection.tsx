import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { galleryImages } from "@/lib/images";

const spanClasses = [
  "sm:row-span-2",
  "",
  "",
  "",
  "sm:row-span-2",
  "",
];

export function GallerySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Craft & Detail"
        title="Design language across every project"
        description="A closer look at the material, spatial and facade decisions that shape our residential and commercial work."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-3">
        {galleryImages.map((image, index) => (
          <Reveal
            key={image.src}
            delay={index * 0.06}
            className={`group relative overflow-hidden rounded-xl ${spanClasses[index] ?? ""}`}
          >
            <div className="relative h-full min-h-[140px] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {image.caption && (
                <p className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-widest text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.caption}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
