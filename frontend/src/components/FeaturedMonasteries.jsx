import { useEffect, useState } from "react";

export default function FeaturedMonasteries() {
  const [monasteries, setMonasteries] = useState([]);

  useEffect(() => {
    const fetchMonasteries = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/monasteries?limit=3");
        const data = await res.json();
        setMonasteries(data);
      } catch (error) {
        console.log("Error fetching monasteries:", error);
      }
    };

    fetchMonasteries();
  }, []);

  return (
    <section className="py-16 bg-[#F6F1E9]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-800">
          Featured Monasteries
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Begin your journey with these remarkable spiritual destinations
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {monasteries.map((m) => (
          <div
            key={m._id}
            className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={m.image}
              alt={m.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-serif font-semibold text-gray-800">
                {m.name}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {m.sect}
                </span>

                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {m.difficulty}
                </span>
              </div>

              {/* Info */}
              <div className="mt-4 space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="text-lg">📍</span> {m.district}
                </p>

                <p className="flex items-center gap-2">
                  <span className="text-lg">📅</span> Founded {m.foundedYear}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <a
          href="/explore"
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-md inline-block transition"
        >
          View All Monasteries →
        </a>
      </div>
    </section>
  );
}
