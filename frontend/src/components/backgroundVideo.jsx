export default function BackgroundVideo() {
  const VIDEO_ID = "b8cIJBzzTPM";

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* HIGH QUALITY ZOOMED YOUTUBE BACKGROUND */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover scale-[1.4]"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&vq=hd1080`}
        title="Sikkim Tourism Background Video"
        allow="autoplay; encrypted-media; fullscreen"
        frameBorder="0"
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* TEXT OVER VIDEO */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Sikkim Heritage Archive
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/90">
          Explore Nature’s Serenity & Spiritual Beauty
        </p>
      </div>
    </div>
  );
}
