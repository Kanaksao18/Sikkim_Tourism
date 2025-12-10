export default function BackgroundVideo() {
  return (
    <div className="w-full my-14 flex flex-col md:flex-row items-center justify-center gap-16">
      
      {/* LEFT — RECTANGULAR VIDEO */}
      <div className="relative w-full max-w-[750px] aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* RIGHT — ANIMATED TEXT */}
      <div className="flex flex-col justify-center max-w-xl px-4">
        <h2 className="text-6xl font-bold text-green-700 animate-slide-in">
          Sikkim Tourism
        </h2>

        <p className="text-2xl mt-4 text-gray-700 animate-fade-in">
          Explore Nature’s Serenity & Spiritual Beauty
        </p>

        <p className="mt-6 text-lg text-gray-600 animate-fade-in-delay">
          Experience misty mountains, peaceful monasteries, 
          and untouched landscapes that define the soul of Sikkim.
        </p>
      </div>
    </div>
  );
}
