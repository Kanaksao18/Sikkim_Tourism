import heroImg from "../assets/hero.png";

export default function TourGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6EE] via-[#F5F1EB] to-[#F0F4FF] px-6 md:px-16 lg:px-24 py-16">
      {/* Hero */}
      <header className="max-w-6xl mx-auto mb-16 grid gap-10 md:grid-cols-[1.6fr,1.1fr] items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Sikkim Travel Companion
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Design your{" "}
            <span className="bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
              perfect Sikkim tour
            </span>{" "}
            with one guide.
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl">
            From high‑altitude lakes and monasteries to tea gardens and hidden
            valleys, this guide brings together everything you need to map your
            journey across Sikkim.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#best-sellers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold shadow-md hover:bg-red-700"
            >
              View sample tour plans
              <span className="text-xs">↗</span>
            </a>
            <div className="flex flex-wrap gap-2 text-xs text-gray-700">
              <span className="px-3 py-1 rounded-full bg-white/70 border border-red-50">
                ✓ Destinations by region
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-emerald-50">
                ✓ Seasons &amp; weather
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-sky-50">
                ✓ Duration‑wise ideas
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">Who is this for?</p>
              <p>First‑time visitors, honeymooners and slow travellers.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Covers</p>
              <p>East, West, North &amp; South Sikkim + nearby circuits.</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-6 bg-gradient-to-tr from-red-500/15 via-amber-400/15 to-sky-400/20 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/70 bg-white">
            <img
              src={heroImg}
              alt="Sikkim mountains"
              className="w-full h-64 object-cover"
            />
            <div className="p-5 space-y-3">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                Suggested Flow
              </p>
              <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside">
                <li>Start in Gangtok (East Sikkim)</li>
                <li>Add North Sikkim or West Sikkim loop</li>
                <li>End with a relaxed stay in South Sikkim</li>
              </ol>
              <p className="text-[11px] text-gray-500 border-t pt-2">
                Use this as inspiration – tweak number of nights and regions
                based on your pace and season.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr] max-w-6xl mx-auto">
        {/* Main Content */}
        <main className="space-y-10">
          {/* Destinations & Attractions */}
          <section
            id="destinations"
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-red-50 p-6 md:p-8"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Destinations &amp; Attractions
            </h2>
            <p className="text-gray-600 mb-6">
              Discover Sikkim region by region – each zone offers a unique mix
              of monasteries, lakes, valleys, and viewpoints.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div
                id="east-sikkim"
                className="bg-[#FFF9F2] rounded-xl overflow-hidden border border-orange-100 transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="h-32 relative">
                  <img
                    src={heroImg}
                    alt="East Sikkim landscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200">
                      Gateway Region
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      East Sikkim
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Gateway region with capital Gangtok, high-altitude lakes and
                    dramatic passes.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Gangtok, Aritar, Zuluk, Nathang Valley</li>
                    <li>Tsomgo Lake, Baba Mandir, Nathula Pass</li>
                  </ul>
                </div>
              </div>

              <div
                id="north-sikkim"
                className="bg-[#F2FBFF] rounded-xl overflow-hidden border border-sky-100 transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="h-32 relative">
                  <img
                    src={heroImg}
                    alt="North Sikkim mountains"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-sky-100">
                      High Himalaya
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      North Sikkim
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    High Himalaya landscapes, glacial lakes and remote valleys.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Lachen, Lachung, Chungthang, Mangan</li>
                    <li>Gurudongmar Lake, Yumthang Valley, Zero Point</li>
                  </ul>
                </div>
              </div>

              <div
                id="west-sikkim"
                className="bg-[#F3F6FF] rounded-xl overflow-hidden border border-indigo-100 transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="h-32 relative">
                  <img
                    src={heroImg}
                    alt="West Sikkim monasteries"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-100">
                      Heritage Belt
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      West Sikkim
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Old monasteries, heritage sites and close views of
                    Khangchendzonga.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Pelling, Yuksom, Geyzing, Rinchenpong</li>
                    <li>Rabdentse Ruins, Khecheopalri Lake, Skywalk</li>
                  </ul>
                </div>
              </div>

              <div
                id="south-sikkim"
                className="bg-[#F2FFF7] rounded-xl overflow-hidden border border-emerald-100 transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="h-32 relative">
                  <img
                    src={heroImg}
                    alt="South Sikkim tea gardens"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-100">
                      Tea &amp; Temples
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      South Sikkim
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    Gentle hills, tea gardens and iconic Buddha and Shiva
                    statues.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Namchi, Ravangla, Jorethang, Temi</li>
                    <li>Buddha Park, Char Dham, Temi Tea Garden</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="attractions" className="mt-6 border-t pt-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Must‑Visit Attractions
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                A quick checklist of the most popular spots travellers keep on
                their first Sikkim itinerary.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Tsomgo Lake",
                  "Gurudongmar Lake",
                  "Khangchendzonga National Park",
                  "Buddha Park Ravangla",
                  "Rabdentse Ruins",
                  "Rumtek Monastery",
                  "Barsey Rhododendron Sanctuary",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Experiences */}
          <section
            id="places-to-visit"
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border p-6 md:p-8"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Places to Visit &amp; Things to Do
            </h2>
            <p className="text-gray-600 mb-6">
              Mix monasteries, viewpoints, lakes and villages to balance
              sightseeing with slow travel.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div id="things-to-do">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Signature Experiences
                </h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>Sunrise views of Khangchendzonga from Pelling or Gangtok</li>
                  <li>Monastery hopping in Rumtek, Pemayangtse, Tashiding</li>
                  <li>Walks through rhododendron forests in spring (Barsey, Yumthang)</li>
                  <li>High‑altitude lakes and snow (Tsomgo, Gurudongmar; season‑dependent)</li>
                  <li>Tea garden strolls at Temi and heritage walks at Yuksom</li>
                </ul>
              </div>

              <div id="culture">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Culture &amp; Festivals
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Sikkim&apos;s festivals are a colourful window into Bhutia,
                  Lepcha and Nepali traditions.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>Masked Cham dances during Losar and Losoong</li>
                  <li>Monastic festivals at Rumtek, Pemayangtse and Tashiding</li>
                  <li>Local village fairs with food, music and handicrafts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Planning & Seasons */}
          <section
            id="how-to-reach"
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border p-6 md:p-8"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              How to Reach &amp; Best Time
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Getting There
                </h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>
                    <span className="font-semibold">By Air:</span> Pakyong
                    Airport (limited flights) and Bagdogra Airport (main
                    gateway), then 4–5 hours by road to Gangtok.
                  </li>
                  <li>
                    <span className="font-semibold">By Rail:</span> New Jalpaiguri
                    (NJP) is the nearest major railhead; shared cabs and
                    private taxis are easily available towards Sikkim.
                  </li>
                  <li>
                    <span className="font-semibold">By Road:</span> Scenic
                    mountain drives from Siliguri, Darjeeling and Kalimpong
                    side.
                  </li>
                </ul>
              </div>

              <div id="best-time">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Best Time to Visit
                </h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>
                    <span className="font-semibold">Spring (Mar–May):</span>{" "}
                    Clear views, rhododendrons and pleasant days.
                  </li>
                  <li>
                    <span className="font-semibold">Autumn (Oct–Nov):</span>{" "}
                    Crisp skies and ideal conditions for most circuits.
                  </li>
                  <li>
                    <span className="font-semibold">Winter (Dec–Feb):</span>{" "}
                    Snow chances at higher altitudes; very cold nights.
                  </li>
                  <li>
                    <span className="font-semibold">Monsoon (Jun–Sep):</span>{" "}
                    Lush landscapes but frequent rain and possible road
                    disruptions.
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="by-month"
              className="bg-[#F8FAFF] rounded-xl p-5 border border-indigo-100 mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sikkim by Months
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Use this as a quick weather and experience reference while
                planning.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Jan–Feb</p>
                  <p>Cold, snowfall at high passes, quiet travel period.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Mar–Apr</p>
                  <p>Blooming flowers, comfortable temperatures, popular time.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">May–Jun</p>
                  <p>Warmer, pre‑monsoon showers, busy vacation season.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Jul–Sep</p>
                  <p>Heavy rain on some days, landslide‑prone stretches.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Oct–Nov</p>
                  <p>Best mix of views and road conditions; festive period.</p>
                </div>
                <div id="weather">
                  <p className="font-semibold mb-1">Dec</p>
                  <p>Dry, cold, possible snow at high altitude circuits.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tour Packages Overview */}
          <section
            id="best-sellers"
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border p-6 md:p-8"
          >
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Sample Tour Ideas &amp; Durations
            </h2>
            <p className="text-gray-600 mb-6">
              These are example combinations inspired by popular Sikkim tour
              patterns. Use them as a base and customise according to your
              pace.
            </p>

            <div className="space-y-5">
              <div
                id="by-duration"
                className="border rounded-xl p-4 bg-[#FFFDF7] hover:border-amber-300 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Short Getaways
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Ideal for long weekends and first‑time visitors.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>3N/4D – Gangtok with Tsomgo Lake &amp; Baba Mandir</li>
                  <li>4N/5D – Gangtok with a short North Sikkim excursion</li>
                  <li>5N/6D – Gangtok + Pelling or Gangtok + Darjeeling</li>
                </ul>
              </div>

              <div
                className="border rounded-xl p-4 bg-[#F7FFFB] hover:border-emerald-300 hover:shadow-md transition"
                id="north-east"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Extended Circuits
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Cover multiple regions at a comfortable pace.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>7N/8D – Gangtok, Lachung (Yumthang), Pelling</li>
                  <li>8N/9D – Gangtok, North Sikkim, Pelling, Darjeeling</li>
                  <li>10N/11D – Darjeeling + full Sikkim circuit</li>
                </ul>
              </div>

              <div className="border rounded-xl p-4 bg-white hover:border-red-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Honeymoon &amp; Slow Travel
                </h3>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>
                    Mix of Gangtok, Ravangla, Namchi and Pelling with fewer
                    hotel changes.
                  </li>
                  <li>Include village stays, tea gardens and easy hikes.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Side Panel */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Quick Sections
            </h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#destinations"
                className="block text-gray-700 hover:text-red-600"
              >
                Destinations &amp; Attractions
              </a>
              <a
                href="#places-to-visit"
                className="block text-gray-700 hover:text-red-600"
              >
                Places to Visit &amp; Things to Do
              </a>
              <a
                href="#how-to-reach"
                className="block text-gray-700 hover:text-red-600"
              >
                How to Reach &amp; Best Time
              </a>
              <a
                href="#by-month"
                className="block text-gray-700 hover:text-red-600"
              >
                Sikkim by Months &amp; Weather
              </a>
              <a
                href="#best-sellers"
                className="block text-gray-700 hover:text-red-600"
              >
                Tour Ideas &amp; Durations
              </a>
            </nav>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-amber-500 rounded-2xl text-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              Need a Custom Plan?
            </h3>
            <p className="text-sm text-red-50 mb-4">
              Use this guide as a base and then fine‑tune your own route,
              keeping in mind permits, road conditions and your pace.
            </p>
            <p className="text-xs text-red-100">
              Tip: Club nearby regions together (Gangtok + North Sikkim or
              Gangtok + Pelling) instead of switching bases every night.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}


