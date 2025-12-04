import { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";

const Explore = () => {
  const [monasteries, setMonasteries] = useState([]);
  const [filteredMonasteries, setFilteredMonasteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    district: "",
    sect: "",
  });

  useEffect(() => {
    const fetchMonasteries = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (filters.district) queryParams.append("district", filters.district);
        if (filters.sect) queryParams.append("sect", filters.sect);

        const url = `http://localhost:5000/api/monasteries${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
        const res = await fetch(url);
        const data = await res.json();
        setMonasteries(data);
        setFilteredMonasteries(data);
      } catch (error) {
        console.error("Error fetching monasteries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonasteries();
  }, [filters.district, filters.sect]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = monasteries.filter(
        (m) =>
          m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMonasteries(filtered);
    } else {
      setFilteredMonasteries(monasteries);
    }
  }, [searchTerm, monasteries]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({ district: "", sect: "" });
    setSearchTerm("");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading monasteries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Explore Monasteries
          </h1>
          <p className="text-gray-600 text-lg">
            Discover the spiritual heritage of Sikkim
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-[#ece7df]">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search monasteries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#F9F7F3] border border-[#e0dad1] pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {/* District Filter */}
            <select
              value={filters.district}
              onChange={(e) => handleFilterChange("district", e.target.value)}
              className="bg-[#F9F7F3] border border-[#e0dad1] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">All Districts</option>
              <option value="East Sikkim">East Sikkim</option>
              <option value="West Sikkim">West Sikkim</option>
              <option value="North Sikkim">North Sikkim</option>
              <option value="South Sikkim">South Sikkim</option>
            </select>

            {/* Sect Filter */}
            <select
              value={filters.sect}
              onChange={(e) => handleFilterChange("sect", e.target.value)}
              className="bg-[#F9F7F3] border border-[#e0dad1] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">All Sects</option>
              <option value="Nyingma">Nyingma</option>
              <option value="Kagyu">Kagyu</option>
              <option value="Sakyapa">Sakyapa</option>
              <option value="Gelugpa">Gelugpa</option>
            </select>

            {/* Clear Filters */}
            {(filters.district || filters.sect || searchTerm) && (
              <button
                onClick={clearFilters}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium transition"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredMonasteries.length}</span>{" "}
            {filteredMonasteries.length === 1 ? "monastery" : "monasteries"}
          </p>
        </div>

        {/* Monasteries Grid */}
        {filteredMonasteries.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-[#ece7df]">
            <p className="text-gray-600 text-lg">
              No monasteries found. Try adjusting your filters or search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMonasteries.map((monastery) => (
              <div
                key={monastery._id}
                className="bg-white rounded-xl shadow-md border border-[#ece7df] overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={monastery.image || "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800"}
                  alt={monastery.name}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800";
                  }}
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">
                    {monastery.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {monastery.sect}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {monastery.difficulty || "Easy Access"}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p className="flex items-center gap-2">
                      <span className="text-lg">📍</span> {monastery.district}
                    </p>
                    {monastery.foundedYear && (
                      <p className="flex items-center gap-2">
                        <span className="text-lg">📅</span> Founded {monastery.foundedYear}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  {monastery.description && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {monastery.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;