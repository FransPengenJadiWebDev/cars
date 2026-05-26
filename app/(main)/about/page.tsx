import Image from 'next/image'

const AboutPage = () => {

  const stat = [
    { value: "$1.2B+", label: "Total Asset Curated" },
    { value: "48", label: "Global Allocations" },
    { value: "01", label: "Quality Standard" },
    { value: "100%", label: "Bespoke Delivery" },
  ]

  const core_value = [
    { title: "Absolute Discretion", desc: "Every transaction, consignment arrangement, and private vehicle allocation is protected behind rigid confidentiality infrastructure." },
    { title: "Provenance Integrity", desc: "We track complete digital and physical history markers, ensuring asset authenticity before inclusion in our physical showroom." },
    { title: "Global Access Infrastructure", desc: "Through deeply rooted manufacturer relations, we grant priority access to hyperspace production allocations worldwide." }
  ]

  return (
    <main className="bg-neutral-950 text-white min-h-screen overflow-hidden">
      
      <section className="relative py-30 lg:py-40 flex items-center justify-center border-b border-neutral-900">        

        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="lg:text-sm text-xs uppercase tracking-widest text-orange-500 font-bold"
          >
            The Heritage of Excellence
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3 uppercase"
          >
            CURATING AUTOMOTIVE <br />
            <span className="text-neutral-500 font-light italic">Masterpieces</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-neutral-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stat.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-mono text-2xl md:text-4xl font-bold text-neutral-100">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Our Philosophy</span>
            <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide">
              Beyond Dealership. <br />We Secure Legacies.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Founded by a collective of high-end automotive engineers and market analysts, LuxDrive transcends traditional acquisition models. We operate on a realm where engineering achievements like the Bugatti V16 hybrid and limited-production Ferrari Aperta slots are preserved and traded with absolute precision.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Every allocation handled by our network goes through an exhaustive verification matrix—guaranteeing provenance, operational perfection, and investment integrity for clients who accept nothing short of exceptional.
            </p>
          </div>

          <div className="relative aspect-video lg:aspect-square bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group">
            <Image 
              src="/showroom_atelier.jpg"
              alt="LuxDrive Private Atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase group-hover:text-white transition-colors duration-300">
                [ LUXDRIVE PRIVATE ATELIER ]
              </span>
              <span className="text-[9px] text-neutral-600 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                By Appointment Only
              </span>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-neutral-900/20 border-t border-b border-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Operational Pillars</span>
            <h2 className="text-2xl md:text-3xl font-semibold uppercase mt-2">Uncompromising Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {core_value.map((value, i) => (
              <div key={i} className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-6 hover:border-neutral-800 transition-all group duration-300">
                <span className="font-mono text-xs text-orange-500 font-bold block mb-4">0{i+1} //</span>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-orange-500 transition-colors">{value.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Begin Your Acquisition</h2>
          <p className="text-xs md:text-sm text-neutral-400 max-w-xl leading-relaxed">
            Connect with an acquisition specialist today to arrange a virtual briefing or a private appointment inside our secure physical atelier.
          </p>
          <button className="bg-white text-black hover:bg-orange-500 hover:text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 mt-2">
            Contact Specialist
          </button>
        </div>
      </section>

    </main>
  )
}

export default AboutPage