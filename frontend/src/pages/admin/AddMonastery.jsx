import { useState } from "react";
import { Save } from "lucide-react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function AddMonastery() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    foundedYear: "",
    district: "",
    sect: "",
    description: "",
    difficulty: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!form.name || !form.sect || !form.district) {
      alert("Please fill in all required fields: Name, Sect, and District");
      return;
    }

    if (!token) {
      alert("You must be logged in to add a monastery. Please login first.");
      return;
    }

    setLoading(true);
    try {
      // Prepare data to match the model schema
      const monasteryData = {
        name: form.name,
        sect: form.sect,
        district: form.district,
        foundedYear: form.foundedYear ? parseInt(form.foundedYear) : undefined,
        description: form.description,
        difficulty: form.difficulty || "Easy Access",
        image: form.image || "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800", // Default image if not provided
      };

      const res = await axios.post(
        "http://localhost:5000/api/monasteries",
        monasteryData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Monastery added successfully!");
      setForm({
        name: "",
        foundedYear: "",
        district: "",
        sect: "",
        description: "",
        difficulty: "",
        image: "",
      });

    } catch (err) {
      console.error("Error details:", err);
      
      let errorMessage = "Failed to add monastery";
      
      if (err.code === "ECONNREFUSED" || err.message.includes("Network Error")) {
        errorMessage = "Cannot connect to server. Please make sure the backend server is running on http://localhost:5000";
      } else if (err.response) {
        // Server responded with error
        if (err.response.status === 401) {
          errorMessage = "Authentication failed. Please login again.";
        } else if (err.response.status === 403) {
          errorMessage = "Access denied. Admin privileges required.";
        } else if (err.response.status === 400) {
          errorMessage = err.response.data?.error || "Invalid data. Please check all fields.";
        } else {
          errorMessage = err.response.data?.error || err.response.data?.message || `Server error: ${err.response.status}`;
        }
      } else if (err.request) {
        errorMessage = "No response from server. Check if backend is running.";
      } else {
        errorMessage = err.message || "An unexpected error occurred";
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.08)] border border-[#ece7df]">

        {/* Header */}
        <h1 className="text-3xl font-serif font-bold text-gray-900">
          Add New Monastery
        </h1>
        <p className="text-gray-600 mt-1">
          Fill in the details to register a new monastery in the system.
        </p>

        {/* FORM */}
        <form onSubmit={submitForm} className="mt-10 space-y-10">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">
                Monastery Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-[#F9F7F3] border border-[#e0dad1] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter monastery name"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">
                Founded Year
              </label>
              <input
                type="text"
                name="foundedYear"
                value={form.foundedYear}
                onChange={handleChange}
                className="w-full bg-[#F9F7F3] border border-[#e0dad1] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="e.g., 1705"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">
                District
              </label>
              <select
                name="district"
                value={form.district}
                onChange={handleChange}
                className="w-full bg-[#F9F7F3] border border-[#e0dad1] p-4 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select district</option>
                <option value="East Sikkim">East Sikkim</option>
                <option value="West Sikkim">West Sikkim</option>
                <option value="North Sikkim">North Sikkim</option>
                <option value="South Sikkim">South Sikkim</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">
                Buddhist Sect
              </label>
              <select
                name="sect"
                value={form.sect}
                onChange={handleChange}
                className="w-full bg-[#F9F7F3] border border-[#e0dad1] p-4 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select sect</option>
                <option value="Nyingma">Nyingma</option>
                <option value="Kagyu">Kagyu</option>
                <option value="Sakyapa">Sakyapa</option>
                <option value="Gelugpa">Gelugpa</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full bg-[#F9F7F3] border border-[#e0dad1] p-4 rounded-xl h-40 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter monastery description..."
            />
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full bg-[#F9F7F3] border border-[#e0dad1] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter a valid image URL (will use default if left empty)
              </p>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-800 mb-2">
                Access Difficulty
              </label>
              <select
                name="difficulty"
                value={form.difficulty}
                onChange={handleChange}
                className="w-full bg-[#F9F7F3] border border-[#e0dad1] p-4 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select difficulty</option>
                <option value="Easy Access">Easy Access</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md transition"
          >
            <Save size={20} /> {loading ? "Saving..." : "Save Monastery"}
          </button>

        </form>
      </div>
    </div>
  );
}
