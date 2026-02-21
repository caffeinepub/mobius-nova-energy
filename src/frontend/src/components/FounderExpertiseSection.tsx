export function FounderExpertiseSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-blue/5 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cosmic-blue to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nova-gold leading-tight uppercase max-w-4xl">
            Seeking First Pilot Installation Partners
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-liquid-silver/90 leading-relaxed max-w-3xl">
            Pre-commercial prototype stage — be among the first
          </p>
          
          {/* Decorative accent */}
          <div className="w-24 h-1 bg-gradient-to-r from-nova-gold via-cosmic-blue to-nova-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
