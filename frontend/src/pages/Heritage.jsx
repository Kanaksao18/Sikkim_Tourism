import heroImg1 from "../assets/hero.png";
import heroImg2 from "../assets/hero.jpg";
import heroImg3 from "../assets/s1.jpg";

const featuredPlaces = [
  {
    name: "Rumtek Monastery",
    region: "Near Gangtok, East Sikkim",
    highlight: "One of the most important seats of Tibetan Buddhism in Sikkim.",
    details:
      "Known for its golden stupa, intricate murals and daily monk prayers, Rumtek blends spiritual energy with stunning valley views.",
    img: heroImg1,
  },
  {
    name: "Rabdentse Ruins",
    region: "Pelling, West Sikkim",
    highlight: "The former capital of the Kingdom of Sikkim.",
    details:
      "Stone ruins surrounded by forest with panoramic views of Khangchendzonga.",
    img: heroImg2,
  },
  {
    name: "Buddha Park (Tathagata Tsal)",
    region: "Ravangla, South Sikkim",
    highlight: "A towering statue of Buddha with manicured gardens.",
    details:
      "A peaceful complex with walking paths and wide-angle mountain views.",
    img: heroImg3,
  },
  {
    name: "Khecheopalri Lake",
    region: "Near Pelling, West Sikkim",
    highlight: "A sacred wish-fulfilling lake for Buddhists and Hindus.",
    details:
      "Surrounded by forested hills, prayer flags and serene beauty.",
    img: heroImg1,
  },
];

const HERO_VIDEO_ID = "Sf3oM2JS5h8";

const Heritage = () => {
  return (
    <div className="bg-white min-h-screen pb-20">

      {/* 🔥 HERO SECTION WITH ZOOMED BACKGROUND VIDEO */}
      <div className="relative w-full h-[480px] md:h-[600px] overflow-hidden">

        {/* ZOOMED VIDEO BACKGROUND */}
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-[1.7]"
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1`}
          allow="autoplay; encrypted-media"
        />

        {/* LIGHT OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
            Sikkim Heritage Archive
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mt-3">
            Discover the <span className="text-red-600">Soul of Sikkim</span>
          </h1>

          <p className="text-gray-700 text-lg max-w-2xl mt-4">
            Explore monasteries, lakes and ancient capitals through curated stories and immersive visuals.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 mt-12">

        {/* 🏔 FEATURED PLACES */}
        <section>
          <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
            Featured Heritage Places
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {featuredPlaces.map((place) => (
              <article
                key={place.name}
                className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="h-72 relative">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-5 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                    {place.region}
                  </div>
                </div>

                {/* TEXT */}
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{place.name}</h3>
                  <p className="font-medium text-red-600">{place.highlight}</p>
                  <p className="text-gray-700">{place.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 🧭 HERITAGE TRAILS */}
        <section className="mt-20">
          <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
            Plan Your Heritage Trails
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Monastery Trail",
                days: "2–3 Days",
                text: "Rumtek, Pemayangtse, Tashiding & village walks.",
              },
              {
                title: "Lakes & Sacred Landscapes",
                days: "2–4 Days",
                text: "Khecheopalri, Tsomgo & viewpoints.",
              },
              {
                title: "History & Old Capitals",
                days: "2–3 Days",
                text: "Rabdentse, Yuksom & heritage sites.",
              },
            ].map((trail) => (
              <div
                key={trail.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <p className="text-xs uppercase font-bold text-green-700">{trail.days}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">{trail.title}</h3>
                <p className="text-gray-700 mt-2">{trail.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Heritage;
