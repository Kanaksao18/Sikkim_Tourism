import heroImg from "../assets/hero.png";

export default function TourGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FCF7F3] via-[#F7F4EF] to-[#EEF4FF] px-6 md:px-16 lg:px-24 py-16">

      {/* ------------------ HERO ------------------ */}
      <header className="max-w-7xl mx-auto mb-20 grid gap-12 md:grid-cols-[1.5fr,1fr] items-center">
        <div className="animate-fadeIn">

          {/* Badge */}
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 shadow-md" />
            Sikkim Travel Companion
          </p>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-5">
            Design your{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-emerald-500 bg-clip-text text-transparent">
              perfect Sikkim tour
            </span>{" "}
            with one guide.
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 max-w-2xl leading-relaxed">
            Explore lakes, monasteries, blooming valleys & tea gardens — all in one compact,
            beautifully curated Sikkim travel guide.
          </p>

          {/* Buttons & info */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#best-sellers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold shadow-lg hover:brightness-110 transition-all"
            >
              View sample tour plans
              <span className="text-xs">➜</span>
            </a>

            <div className="flex flex-wrap gap-2 text-xs text-gray-700">
              <span className="px-3 py-1 rounded-full bg-white/80 border">✓ Destinations</span>
              <span className="px-3 py-1 rounded-full bg-white/80 border">✓ Weather & Seasons</span>
              <span className="px-3 py-1 rounded-full bg-white/80 border">✓ Duration Ideas</span>
            </div>
          </div>

          {/* Two-column small info */}
          <div className="flex flex-wrap gap-8 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">Who is this for?</p>
              <p>First-time visitors, couples & slow travellers.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Coverage</p>
              <p>East, West, North & South Sikkim + Darjeeling.</p>
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative hidden md:block animate-fadeInUp">
          <div className="absolute -inset-8 bg-gradient-to-tr from-red-400/20 via-orange-300/20 to-sky-300/25 rounded-3xl blur-3xl" />

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/80 bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all">
            <img src={heroImg} alt="Sikkim mountains" className="w-full h-64 object-cover" />

            <div className="p-6">
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                Suggested Flow
              </p>
              <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside mt-2">
                <li>Start in Gangtok (East Sikkim)</li>
                <li>Explore North or West Sikkim</li>
                <li>End with a peaceful South Sikkim retreat</li>
              </ol>

              <p className="text-[11px] text-gray-500 border-t pt-3 mt-3">
                Adjust nights & regions based on season, altitude comfort & your pace.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ------------------ MAIN GRID ------------------ */}
      <div className="grid gap-10 lg:grid-cols-[2fr,1fr] max-w-7xl mx-auto">

        {/* ------------------ MAIN CONTENT ------------------ */}
        <main className="space-y-12">

          {/* ------------------- DESTINATIONS ------------------- */}
          <section id="destinations" className="glass-box">
            <h2 className="section-title">Destinations & Attractions</h2>
            <p className="section-desc">
              Explore Sikkim zone-wise — each region has its own magic.
            </p>

            <div className="grid gap-6 md:grid-cols-2">

              {/* CARD TEMPLATE UPDATED */}
              {[
                {
                  id: "east",
                  title: "East Sikkim",
                  subtitle: "Gateway Region",
                  bg: "from-black/60 via-black/30 to-transparent",
                  colorCard: "bg-[#FFF9F2]",
                  border: "border-orange-200",
                  items: [
                    "Gangtok, Aritar, Zuluk, Nathang Valley",
                    "Tsomgo Lake, Baba Mandir, Nathula Pass",
                  ],
                },
                {
                  id: "north",
                  title: "North Sikkim",
                  subtitle: "High Himalaya",
                  bg: "from-sky-900/70 via-sky-900/20 to-transparent",
                  colorCard: "bg-[#F2FBFF]",
                  border: "border-sky-200",
                  items: [
                    "Lachen, Lachung, Yumthang, Mangan",
                    "Gurudongmar Lake, Zero Point",
                  ],
                },
                {
                  id: "west",
                  title: "West Sikkim",
                  subtitle: "Heritage Belt",
                  bg: "from-indigo-900/70 via-indigo-900/20 to-transparent",
                  colorCard: "bg-[#F3F6FF]",
                  border: "border-indigo-200",
                  items: [
                    "Pelling, Yuksom, Rinchenpong",
                    "Rabdentse, Khecheopalri Lake",
                  ],
                },
                {
                  id: "south",
                  title: "South Sikkim",
                  subtitle: "Tea & Temples",
                  bg: "from-emerald-900/70 via-emerald-900/20 to-transparent",
                  colorCard: "bg-[#F2FFF7]",
                  border: "border-emerald-200",
                  items: ["Namchi, Ravangla, Temi", "Buddha Park, Char Dham"],
                },
              ].map((card) => (
                <div
                  key={card.id}
                  className={`${card.colorCard} rounded-xl overflow-hidden border ${card.border} hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer`}
                >
                  <div className="h-36 relative">
                    <img src={heroImg} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.bg}`} />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-[11px] uppercase tracking-widest text-white/80">
                        {card.subtitle}
                      </p>
                      <h3 className="text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4">
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      {card.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------ OTHER SECTIONS, CARDS, etc. ------------------ */}
          {/* I will continue updating all sections with glassmorphism, animations, gradients, tighter spacing, clean fonts */}

        </main>

        {/* ------------------ SIDEBAR ------------------ */}
        <aside className="space-y-6 animate-fadeIn">

          {/* Nav Box */}
          <div className="glass-box p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Sections</h3>
            <nav className="space-y-2 text-sm">
              {[
                ["#destinations", "Destinations & Attractions"],
                ["#places-to-visit", "Places to Visit"],
                ["#how-to-reach", "How to Reach"],
                ["#by-month", "Weather by Month"],
                ["#best-sellers", "Tour Ideas"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="block hover:text-red-600 transition">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA BOX */}
          <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl text-white p-6 shadow-lg animate-fadeInUp">
            <h3 className="text-lg font-semibold mb-2">Need a Custom Plan?</h3>
            <p className="text-sm text-red-50 mb-4">
              Use this guide to build your own itinerary — tailored to weather,
              permits & road conditions.
            </p>
            <p className="text-xs text-red-100">
              Tip: Combine Gangtok + North Sikkim or Gangtok + Pelling for
              smoother travel.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* Utility Classes You Can Place Globally */
const styles = `
.glass-box {
  @apply bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all;
}
.section-title {
  @apply text-2xl font-serif font-semibold text-gray-900 mb-3;
}
.section-desc {
  @apply text-gray-600 mb-6 text-sm md:text-base;
}
.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
