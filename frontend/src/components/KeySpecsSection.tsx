interface Spec {
  value: string;
  label: string;
  sub?: string;
}

const specs: Spec[] = [
  { value: '4.5–8.0 kW', label: 'POWER OUTPUT', sub: 'Realistic operational range' },
  { value: '1.83 m', label: 'TURBINE HEIGHT', sub: 'Compact footprint' },
  { value: '1.52 m', label: 'BLADE DIAMETER', sub: 'Optimized swept area' },
  { value: '270°', label: 'PRIMARY HELIX ANGLE', sub: 'Gorlov-inspired geometry' },
  { value: '4 UNITS', label: 'STATOR COUNT', sub: 'Stacked axial flux generators' },
  { value: 'HALBACH', label: 'BEARING SYSTEM', sub: 'Magnetic levitation — zero friction' },
  { value: '3 MODES', label: 'ENERGY SOURCES', sub: 'Wind / Hydro / Wave' },
];

export function KeySpecsSection() {
  return (
    <section id="specs" className="py-20 px-4 bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-liquid-silver uppercase tracking-wider font-heading mb-4">
            KEY SPECIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-nova-gold mx-auto mb-6" />
          <p className="text-liquid-silver/70 max-w-2xl mx-auto text-sm md:text-base">
            Engineering-verified specifications from FreeCAD models and independent analysis.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-dark-card border border-liquid-silver/10 rounded-lg p-5 text-center hover:border-nova-gold/40 transition-all duration-300 group"
            >
              <div className="text-nova-gold font-bold text-xl md:text-2xl mb-2 font-heading group-hover:text-nova-gold/90 transition-colors">
                {spec.value}
              </div>
              <div className="text-liquid-silver text-xs font-bold uppercase tracking-wider mb-1 font-heading">
                {spec.label}
              </div>
              {spec.sub && (
                <div className="text-liquid-silver/50 text-xs leading-tight">{spec.sub}</div>
              )}
            </div>
          ))}

          {/* ROI card spanning wider */}
          <div className="bg-dark-card border border-nova-gold/30 rounded-lg p-5 text-center hover:border-nova-gold/60 transition-all duration-300 col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="text-nova-gold font-bold text-xl md:text-2xl mb-2 font-heading">
              5–15 YRS
            </div>
            <div className="text-liquid-silver text-xs font-bold uppercase tracking-wider mb-1 font-heading">
              ROI TIMELINE
            </div>
            <div className="text-liquid-silver/50 text-xs leading-tight">Grid-tie payback period</div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-liquid-silver/40 text-xs mt-8 max-w-2xl mx-auto">
          * Specifications based on engineering analysis and FreeCAD modeling. Final production units may vary. 
          Independent verification in progress.
        </p>
      </div>
    </section>
  );
}
