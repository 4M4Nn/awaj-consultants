import { stats } from "@/lib/data";

export function StatsBand() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
