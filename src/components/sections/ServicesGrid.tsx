import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/lib/data";

interface ServicesGridProps {
  items?: typeof services;
}

export function ServicesGrid({ items = services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.slug} delay={(index % 3) * 0.08}>
            <Card className="h-full border-border bg-card transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-heading mt-4 text-lg text-primary">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
