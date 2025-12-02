import { useState } from "react";
import { Search, X, Loader2 } from "lucide-react";

export default function AISearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // HANDLE SEARCH
  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResponse(data.answer || "No results found.");
    } catch (error) {
      setResponse("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-xl hover:bg-red-700 transition"
      >
        <Search size={24} />
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          
          {/* Modal Box */}
          <div className="bg-white w-[90%] md:w-[500px] p-6 rounded-2xl shadow-xl relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-600 hover:text-red-600"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              🔍 AI Smart Search
            </h2>

            <p className="text-gray-600 mb-4">
              Ask anything about Sikkim’s monasteries, history, festivals or travel.
            </p>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Oldest monastery in Sikkim?"
                className="flex-1 border px-4 py-2 rounded-lg focus:ring focus:ring-red-200"
              />

              <button
                onClick={handleSearch}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Ask
              </button>
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex justify-center mt-5">
                <Loader2 className="animate-spin text-red-600" size={30} />
              </div>
            )}

            {/* AI Response */}
            {response && (
              <div className="mt-6 bg-gray-100 p-4 rounded-lg border text-gray-800 leading-relaxed">
                {response}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
