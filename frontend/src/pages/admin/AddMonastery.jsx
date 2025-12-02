import { useState } from "react";

export default function AddMonastery() {
  const [form, setForm] = useState({
    name: "",
    sect: "",
    difficulty: "",
    district: "",
    foundedYear: "",
    description: "",
    tags: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Upload image to Cloudinary (if using Cloudinary)
    let imageUrl = "";
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "monastery_uploads");

      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/<cloud-name>/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadData = await uploadRes.json();
      imageUrl = uploadData.secure_url;
    }

    // Step 2: Submit monastery data to backend
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/monasteries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()),
        image: imageUrl,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Monastery Added Successfully");
      setForm({
        name: "",
        sect: "",
        difficulty: "",
        district: "",
        foundedYear: "",
        description: "",
        tags: "",
      });
      setImage(null);
      setPreview("");
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
        Add New Monastery
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label className="font-medium block mb-1">Monastery Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        {/* Sect */}
        <div>
          <label className="font-medium block mb-1">Sect</label>
          <select
            name="sect"
            required
            value={form.sect}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          >
            <option value="">Select Sect</option>
            <option value="Kagyu">Kagyu</option>
            <option value="Nyingma">Nyingma</option>
            <option value="Gelug">Gelug</option>
            <option value="Sakya">Sakya</option>
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="font-medium block mb-1">Difficulty</label>
          <select
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          >
            <option value="">Choose Accessibility</option>
            <option value="Easy Access">Easy Access</option>
            <option value="Moderate">Moderate</option>
            <option value="Trek Required">Trek Required</option>
          </select>
        </div>

        {/* District */}
        <div>
          <label className="font-medium block mb-1">District</label>
          <input
            type="text"
            name="district"
            required
            value={form.district}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <small className="text-gray-500">E.g., East Sikkim, West Sikkim</small>
        </div>

        {/* Founded Year */}
        <div>
          <label className="font-medium block mb-1">Founded Year</label>
          <input
            type="number"
            name="foundedYear"
            value={form.foundedYear}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium block mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium block mb-1">Tags</label>
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <small className="text-gray-500">Example: oldest, viewpoint, peaceful</small>
        </div>

        {/* Image Upload */}
        <div>
          <label className="font-medium block mb-1">Monastery Image</label>
          <input type="file" accept="image/*" onChange={handleImage} />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-full h-56 object-cover rounded-lg mt-4"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Add Monastery
        </button>
      </form>
    </div>
  );
}
