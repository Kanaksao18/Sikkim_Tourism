import heroImg from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        
        <h1 className="text-white text-4xl md:text-6xl font-serif font-bold max-w-4xl leading-tight drop-shadow-lg">
          Explore the Monasteries of Sikkim Digitally
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mt-6 drop-shadow-md">
          Discover the sacred heritage, stunning architecture, and spiritual essence of Himalayan monasteries
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <a
            href="/explore"
            className="bg-red-500 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg transition flex items-center gap-2"
          >
            Explore Monasteries →
          </a>

          <a
            href="/ai-itinerary"
            className="border border-gray-200 text-white px-8 py-3 rounded-lg text-lg font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 transition flex items-center gap-2"
          >
            ✨ AI Itinerary
          </a>
        </div>
      </div>
    </section>
  );
}
