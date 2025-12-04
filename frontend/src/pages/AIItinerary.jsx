import { useState } from "react";
import {
  Loader2,
  Map,
  Sparkles,
  Mountain,
  Compass,
  Building2,
  Camera,
  Book,
  Leaf,
  Calendar,
} from "lucide-react";

export default function AIItinerary() {
  const [days, setDays] = useState(3);
  const [interests, setInterests] = useState([]);
  const [startLocation, setStartLocation] = useState("Gangtok");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const interestOptions = [
    { name: "Architecture", icon: Building2 },
    { name: "Festivals", icon: Sparkles },
    { name: "Photography", icon: Camera },
    { name: "Meditation", icon: Mountain },
    { name: "History", icon: Book },
    { name: "Nature", icon: Leaf },
  ];

  const toggleInterest = (name) => {
    setInterests((prev) =>
      prev.includes(name)
        ? prev.filter((x) => x !== name)
        : [...prev, name]
    );
  };

  const generateItinerary = async () => {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          days,
          interests,
          startLocation,
        }),
      });

      const data = await res.json();
      setResult(data.itinerary);
    } catch (error) {
      setResult("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB] px-6 md:px-20 py-16">
      {/* HEADING */}
      <h1 className="text-center text-4xl md:text-5xl font-serif font-bold text-gray-800">
        AI Itinerary Planner
      </h1>

      <p className="text-center text-gray-600 text-lg mt-4 mb-12">
        Let AI craft a personalized monastery journey based on your time and interests.
      </p>

      {/* FORM CARD */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border">

        {/* DAYS SELECTION */}
        <div>
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Calendar /> Trip Duration
          </h2>

          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full border px-4 py-3 rounded-lg focus:ring focus:ring-red-200"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} Day{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* INTERESTS */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Sparkles /> Your Interests
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interestOptions.map((item) => {
              const SelectedIcon = item.icon;
              const active = interests.includes(item.name);
              return (
                <button
                  key={item.name}
                  onClick={() => toggleInterest(item.name)}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition shadow-sm ${
                    active
                      ? "bg-red-600 text-white border-red-600 shadow-md"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <SelectedIcon size={22} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* START LOCATION */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Map /> Starting Point
          </h2>

          <select
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg focus:ring focus:ring-red-200"
          >
            {["Gangtok", "Pelling", "Yuksom", "Namchi"].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* GENERATE BUTTON */}
        <button
          onClick={generateItinerary}
          className="mt-10 w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" /> Generating...
            </>
          ) : (
            <>
              <Sparkles /> Generate Itinerary
            </>
          )}
        </button>
      </div>

      {/* RESULT CARD */}
      {result && (
        <div className="mt-10 bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border leading-relaxed animation-fadeIn">
          <h2 className="text-2xl font-serif font-bold mb-4">Your AI-Generated Journey</h2>
          <p className="text-gray-700 whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}
