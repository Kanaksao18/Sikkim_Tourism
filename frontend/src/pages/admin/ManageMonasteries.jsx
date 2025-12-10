import { useState, useEffect } from "react";
import { Edit2, Trash2, Search, PlusCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function ManageMonasteries() {
  const { token } = useAuth();
  const [monasteries, setMonasteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(null);

  useEffect(() => {
    fetchMonasteries();
  }, []);

  const fetchMonasteries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/monasteries");
      setMonasteries(res.data);
    } catch (err) {
      console.error("Error fetching monasteries:", err);
      alert("Failed to load monasteries");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) {
      return;
    }

    setDeleteLoading(id);
    try {
      await axios.delete(`http://localhost:5000/api/monasteries/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Monastery deleted successfully!");
      fetchMonasteries(); // Refresh the list
    } catch (err) {
      console.error("Error deleting monastery:", err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        alert("Access denied. Admin privileges required.");
      } else {
        alert("Failed to delete monastery. Please try again.");
      }
    } finally {
      setDeleteLoading(null);
    }
  };

  const filteredMonasteries = monasteries.filter((monastery) =>
    monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monastery.district?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monastery.sect?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading monasteries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1EB] py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 mb-4 transition"
            >
              <ArrowLeft size={18} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-serif font-bold text-gray-900">
              Manage Monasteries
            </h1>
            <p className="text-gray-600 mt-1">
              Edit or delete monastery entries. Total: {monasteries.length}
            </p>
          </div>
          <Link
            to="/admin/add-monastery"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition"
          >
            <PlusCircle size={20} /> Add New Monastery
          </Link>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, district, or sect..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        {/* Monasteries List */}
        {filteredMonasteries.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
            <p className="text-gray-600 text-lg">
              {searchTerm ? "No monasteries found matching your search." : "No monasteries found."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMonasteries.map((monastery) => (
              <div
                key={monastery._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-red-100 to-amber-100 relative overflow-hidden">
                  {monastery.image ? (
                    <img
                      src={monastery.image}
                      alt={monastery.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      ⛩️
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {monastery.name}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    {monastery.district && (
                      <p>
                        <span className="font-medium">District:</span> {monastery.district}
                      </p>
                    )}
                    {monastery.sect && (
                      <p>
                        <span className="font-medium">Sect:</span> {monastery.sect}
                      </p>
                    )}
                    {monastery.foundedYear && (
                      <p>
                        <span className="font-medium">Founded:</span> {monastery.foundedYear}
                      </p>
                    )}
                    {monastery.difficulty && (
                      <p>
                        <span className="font-medium">Access:</span> {monastery.difficulty}
                      </p>
                    )}
                  </div>

                  {monastery.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {monastery.description}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Link
                      to={`/admin/edit-monastery/${monastery._id}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium transition"
                    >
                      <Edit2 size={16} /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(monastery._id, monastery.name)}
                      disabled={deleteLoading === monastery._id}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deleteLoading === monastery._id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-700"></div>
                          Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 size={16} /> Delete
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

