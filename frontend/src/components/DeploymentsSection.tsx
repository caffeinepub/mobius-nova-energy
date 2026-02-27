interface DeploymentCard {
  image: string;
  title: string;
  description: string;
  badge: string;
}

const deployments: DeploymentCard[] = [
  {
    image: '/assets/generated/offgrid-render.dim_1200x800.png',
    title: 'OFF-GRID MOUNTAIN CABIN',
    description: 'Full energy independence for remote properties. Wind-mode operation at high altitude with minimal footprint.',
    badge: 'WIND MODE',
  },
  {
    image: '/assets/generated/farm-render.dim_1200x800.png',
    title: 'RURAL FARM DEPLOYMENT',
    description: 'Agricultural energy self-sufficiency. Powers irrigation, lighting, and equipment with clean renewable energy.',
    badge: 'WIND / HYDRO',
  },
  {
    image: '/assets/generated/mars-render.dim_1200x800.png',
    title: 'MARS COLONY CONCEPT',
    description: 'Designed for local 3D printing to bypass supply chains. Extreme environment resilience for off-world deployment.',
    badge: 'EXTREME ENV',
  },
  {
    image: '/assets/generated/cad-detail.dim_1200x800.png',
    title: 'CAD ENGINEERING DETAIL',
    description: 'Precision-engineered crossflow runner hydro module. FreeCAD-designed with real-world dimensional specifications.',
    badge: 'ENGINEERING',
  },
];

export function DeploymentsSection() {
  return (
    <section id="deployments" className="py-20 px-4 bg-deep-space-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-liquid-silver uppercase tracking-wider font-heading mb-4">
            DEPLOYMENTS IN ACTION
          </h2>
          <div className="w-24 h-1 bg-nova-gold mx-auto mb-6" />
          <p className="text-liquid-silver/70 max-w-2xl mx-auto text-sm md:text-base">
            From remote mountain cabins to Mars colonies — the MOBIUS-NOVA system adapts to any environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deployments.map((card) => (
            <div
              key={card.title}
              className="group relative bg-dark-card border border-liquid-silver/10 rounded-lg overflow-hidden hover:border-nova-gold/40 transition-all duration-300 hover:shadow-nova-gold"
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-cosmic-blue/90 text-solar-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-heading">
                  {card.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-nova-gold font-bold uppercase tracking-wider text-sm mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-liquid-silver/70 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
