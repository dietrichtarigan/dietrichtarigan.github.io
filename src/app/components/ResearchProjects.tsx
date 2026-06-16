const BASE = import.meta.env.BASE_URL;

export default function ResearchProjects() {
  return (
    <section id="research" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.14em] text-[#1e3a8a] mb-2">Undergraduate Thesis · Active Research</div>
          <h2 className="text-2xl text-gray-900">Micromagnetic Simulation of Skyrmion Nucleation in Fe₃GaTe₂</h2>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Hero visual: simulated bubble/skyrmion domain texture */}
          <div className="grid md:grid-cols-2 gap-0 border-b border-gray-200">
            <div className="bg-gray-900 flex items-center justify-center">
              <img
                src={`${BASE}media/research/skyrmion-bubble-domains.jpg`}
                alt="Simulated stripe-to-bubble magnetic domain texture in an Au/Fe3GaTe2 interface, MuMax3"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                Fe₃GaTe₂ (FGaT) is a van der Waals ferromagnet with strong perpendicular magnetic
                anisotropy and a Curie temperature near room temperature, making it a strong
                candidate host for room-temperature skyrmions. My thesis uses GPU-accelerated
                micromagnetic simulation (MuMax3, solving the Landau–Lifshitz–Gilbert equation) to
                study skyrmion and bubble-domain nucleation in FGaT thin films under field-cooling
                protocols, with interfacial Dzyaloshinskii–Moriya interaction (DMI) included via an
                adjacent heavy-metal/Au layer.
              </p>
              <div className="flex flex-wrap gap-2">
                {["MuMax3", "GPU Cluster", "LLG Equation", "Field-Cooling Protocols", "Interfacial DMI", "Van der Waals Magnets"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="text-sm text-gray-600 mb-8">
              Supervised by Prof. Agung Nugroho (ITB) &amp; Dr. Joko Suwardy (BRIN)
            </div>

            {/* Simulation outputs */}
            <h3 className="text-lg text-gray-900 mb-4">Simulation outputs</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <video
                  src={`${BASE}media/research/fgat-hysteresis-loop.mp4`}
                  poster={`${BASE}media/research/fgat-hysteresis-plot.png`}
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-56 object-contain bg-black"
                />
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                  FGaT magnetization sweep: out-of-plane field cycled across saturation, showing
                  abrupt switching at the coercive field.
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={`${BASE}media/research/skyrmion-capsule-nucleation.gif`}
                  alt="Domain nucleation animation in a capsule-shaped FGaT geometry"
                  loading="lazy"
                  className="w-full h-56 object-contain bg-gray-50"
                />
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                  Domain nucleation in a confined capsule geometry, used to probe edge effects on
                  bubble formation.
                </div>
              </div>
            </div>

            {/* Quantitative results */}
            <h3 className="text-lg text-gray-900 mb-4">Quantitative results</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={`${BASE}media/research/fgat-hysteresis-plot.png`}
                  alt="FGaT M-H hysteresis loop from MuMax3 simulation, coercive field ~450 mT"
                  loading="lazy"
                  className="w-full h-56 object-contain bg-white"
                />
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                  Simulated M–H loop for FGaT (2 μm lateral size), extracting a coercive field of
                  μ₀H_c ≈ 450 mT.
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={`${BASE}media/research/benchmark-all-materials.png`}
                  alt="Hysteresis benchmark comparison across Co, Fe, Ni, FePt, FGaT, MnSi, FGT, CGT, and iDMI multilayer stacks"
                  loading="lazy"
                  className="w-full h-56 object-contain bg-white"
                />
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                  Validation benchmark: literature parameters for Cobalt, Iron, Nickel, FePt, FGaT,
                  MnSi (B20), FGT, CGT, and three interfacial-DMI multilayer stacks reproduced with
                  the same simulation pipeline before running FGaT-specific studies.
                </div>
              </div>
            </div>

            {/* Benchmark validation videos */}
            <h3 className="text-lg text-gray-900 mb-4">Benchmark validation: domain dynamics across magnetic systems</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Before running FGaT-specific studies, the same MuMax3 pipeline was validated against
              literature behavior for materials spanning soft ferromagnets to skyrmion-hosting and
              interfacial-DMI multilayer systems.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <video
                  src={`${BASE}media/research/mnsi-b20-domains.mp4`}
                  poster={`${BASE}media/research/mnsi-b20-poster.png`}
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-56 object-contain bg-black"
                />
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                  MnSi (B20 chiral magnet): bulk-DMI helical/conical stripe domains evolving under
                  field, a classic skyrmion-lattice host material.
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <video
                  src={`${BASE}media/research/ptcoalox-idmi-domains.mp4`}
                  poster={`${BASE}media/research/ptcoalox-idmi-poster.png`}
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-56 object-contain bg-black"
                />
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                  Pt/Co/AlOx interfacial-DMI multilayer: in-plane magnetization texture rotating
                  under an applied field, used to validate the interfacial-DMI implementation.
                </div>
              </div>
            </div>

            {/* Status & challenges */}
            <h3 className="text-lg text-gray-900 mb-3">Status &amp; active challenges</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2 list-disc pl-5">
              <li>Benchmark validation against literature hysteresis behavior completed across 9+ reference magnetic systems.</li>
              <li>Baseline FGaT hysteresis and bubble-domain nucleation established under field-cooling.</li>
              <li>Currently investigating skyrmion metastability near κ ≈ 0.48 (the ratio of DMI energy to the geometric-mean exchange/anisotropy energy), where bubble and skyrmion phases compete.</li>
              <li>Next: thickness-dependent domain structure sweep and strain-coupling effects at the Au/FGaT interface.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
