import heroImg from "../assets/hero.png";

const featuredPlaces = [
  {
    name: "Rumtek Monastery",
    region: "Near Gangtok, East Sikkim",
    highlight: "One of the most important seats of Tibetan Buddhism in Sikkim.",
    details:
      "Known for its golden stupa, intricate murals and daily monk prayers, Rumtek blends spiritual energy with stunning valley views.",
  },
  {
    name: "Rabdentse Ruins",
    region: "Pelling, West Sikkim",
    highlight: "The former capital of the Kingdom of Sikkim.",
    details:
      "Stone ruins surrounded by forest with panoramic views of Khangchendzonga, perfect for history lovers and photographers.",
  },
  {
    name: "Buddha Park (Tathagata Tsal)",
    region: "Ravangla, South Sikkim",
    highlight: "A towering statue of Buddha with manicured gardens.",
    details:
      "A peaceful complex with walking paths, gallery and wide angle views of the snow peaks on a clear day.",
  },
  {
    name: "Khecheopalri Lake",
    region: "Near Pelling, West Sikkim",
    highlight: "A sacred wish-fulfilling lake for Buddhists and Hindus.",
    details:
      "Surrounded by forested hills and prayer flags, the lake is known for its mirror‑like surface and birdlife.",
  },
];

const heritageVideos = [
  {
    title: "Sikkim Heritage & Monasteries",
    description: "A visual journey through key monasteries and heritage spots.",
    youtubeId: "dQw4w9WgXcQ", // placeholder ID – replace with real travel video ID
  },
  {
    title: "Best Places to Visit in Sikkim",
    description: "Overview of popular destinations across East, West, North & South Sikkim.",
    youtubeId: "oHg5SJYRHA0", // placeholder ID
  },
];

const heritageTrails = [
  {
    title: "Monastery Trail",
    days: "2–3 Days",
    description:
      "Focus on Rumtek, Pemayangtse, Tashiding and nearby village walks for a deeply spiritual circuit.",
  },
  {
    title: "Lakes & Sacred Landscapes",
    days: "2–4 Days",
    description:
      "Combine Khecheopalri Lake, Tsomgo Lake and surrounding viewpoints for a nature‑centered heritage trip.",
  },
  {
    title: "History & Old Capitals",
    days: "2–3 Days",
    description:
      "Explore Rabdentse Ruins, Yuksom and nearby sites to trace the story of the Sikkim kingdom.",
  },
];

const Heritage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6EE] via-[#F5F1EB] to-[#F0F4FF] px-6 md:px-16 lg:px-24 py-16">
      {/* Hero */}
      <header className="max-w-5xl mx-auto text-center mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500 mb-3">
          Sikkim Heritage Archive
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
          Discover the{" "}
          <span className="bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
            soul of Sikkim
          </span>{" "}
          through its sacred sites.
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore the most iconic monasteries, lakes and historic ruins of Sikkim
          with stories, visuals and curated videos to bring each place alive.
        </p>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* Featured Places */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-red-50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">
                Best Heritage Places in Sikkim
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                A starting list of must‑visit cultural and spiritual sites.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-red-700">
              ✓ Handpicked highlights
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredPlaces.map((place) => (
              <article
                key={place.name}
                className="bg-[#FFFDF9] rounded-xl overflow-hidden border border-amber-100 hover:border-amber-300 hover:shadow-md transition"
              >
                <div className="h-40 relative">
                  <img
                    src={heroImg}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200">
                      {place.region}
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {place.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{place.highlight}</p>
                  <p>{place.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-sky-50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">
                Watch &amp; Experience Sikkim
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Short films and travel videos that capture the essence of the land,
                monasteries and mountains.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-xs font-semibold text-sky-800">
              🎥 Visual stories
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {heritageVideos.map((video) => (
              <article
                key={video.youtubeId}
                className="rounded-xl overflow-hidden border border-sky-100 bg-[#F9FCFF]"
              >
                <div className="aspect-video bg-black/5">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 space-y-1 text-sm text-gray-700">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Heritage Trails / How to Use This Archive */}
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-emerald-50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">
                Plan Your Heritage Trail
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Use these sample ideas to connect the places and videos into an easy route.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
              ✓ Beginner‑friendly circuits
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {heritageTrails.map((trail) => (
              <article
                key={trail.title}
                className="rounded-xl border border-emerald-100 bg-[#F7FFF9] p-4 hover:border-emerald-300 hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-500">
                    {trail.days}
                  </p>
                  <h3 className="text-base font-semibold text-gray-900">
                    {trail.title}
                  </h3>
                  <p>{trail.description}</p>
                </div>
                <p className="mt-3 text-[11px] text-emerald-700 font-medium">
                  Tip: Pair this with the Tour Guide page to align regions and seasons.
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Heritage;