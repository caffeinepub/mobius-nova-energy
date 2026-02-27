export function TechnologySection() {
  return (
    <section id="technology" className="py-20 px-4 bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-liquid-silver uppercase tracking-wider font-heading mb-4">
            THE FRICTIONLESS POWER CORE
          </h2>
          <div className="w-24 h-1 bg-nova-gold mx-auto mb-6" />
          <p className="text-liquid-silver/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Universal Multi-Modal Core: a single shaft supporting interchangeable VAWT wind, Gorlov hydro, and wave rectifier 
            configurations, with Halbach magnetic levitation frictionless bearing system for near-infinite operational lifespan.
          </p>
        </div>

        {/* Infographic images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="group">
            <div className="border border-nova-gold/20 rounded-lg overflow-hidden hover:border-nova-gold/50 transition-all duration-300 bg-dark-card">
              <img
                src="/assets/generated/frictionless-power-core.dim_900x1600.png"
                alt="The Frictionless Power Core Infographic"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-nova-gold text-xs uppercase tracking-wider mt-3 font-bold font-heading">
              THE FRICTIONLESS POWER CORE: A MODULAR ENERGY REVOLUTION
            </p>
          </div>

          <div className="group">
            <div className="border border-cosmic-blue/20 rounded-lg overflow-hidden hover:border-cosmic-blue/50 transition-all duration-300 bg-dark-card">
              <img
                src="/assets/generated/engineering-analysis.dim_900x1600.png"
                alt="Mobius-NOVA Engineering Analysis"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-cosmic-blue text-xs uppercase tracking-wider mt-3 font-bold font-heading">
              ENGINEERING ANALYSIS: MULTI-MODAL ENERGY PLATFORM
            </p>
          </div>
        </div>

        {/* Key tech callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {[
            {
              title: 'MULTI-MODAL CORE',
              desc: 'Single shaft supports VAWT wind, Gorlov hydro, and wave rectifier configurations — one unit, three energy sources.',
              color: 'nova-gold',
            },
            {
              title: 'FRICTIONLESS BEARINGS',
              desc: 'Halbach magnetic levitation arrays eliminate physical contact for near-infinite operational lifespan and zero maintenance.',
              color: 'liquid-silver',
            },
            {
              title: 'ADVANCED MATERIALS',
              desc: 'Carbon fiber structural fatigue resistance and Boron Nitride resin for superior thermal management under all conditions.',
              color: 'cosmic-blue',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border border-liquid-silver/10 rounded-lg p-6 hover:border-nova-gold/30 transition-all duration-300"
            >
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 font-heading text-${item.color}`}>
                {item.title}
              </h3>
              <p className="text-liquid-silver/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
