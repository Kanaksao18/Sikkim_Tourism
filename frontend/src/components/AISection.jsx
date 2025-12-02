import { Sparkles, Map, BookOpen } from "lucide-react";

export default function AISection() {
  const features = [
    {
      icon: <Sparkles size={32} className="text-white" />,
      bg: "bg-teal-500",
      title: "Smart Search",
      desc: "Ask questions in natural language and discover monasteries that match your interests.",
    },
    {
      icon: <Map size={32} className="text-white" />,
      bg: "bg-yellow-500",
      title: "Personalized Itinerary",
      desc: "Generate custom travel plans based on your time, interests, and spiritual goals.",
    },
    {
      icon: <BookOpen size={32} className="text-white" />,
      bg: "bg-red-500",
      title: "Cultural Storytelling",
      desc: "Learn about history, festivals, and traditions through AI-narrated stories.",
    },
  ];

  return (
    <section className="bg-[#F5F1EB] py-20 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-gray-800">
        AI-Powered Exploration
      </h2>

      <p className="text-center text-gray-600 text-lg md:text-xl mt-3 mb-14">
        Let artificial intelligence enhance your spiritual journey
      </p>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-8 rounded-2xl flex flex-col border hover:shadow-xl transition"
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
