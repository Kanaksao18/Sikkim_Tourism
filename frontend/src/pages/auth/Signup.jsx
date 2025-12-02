import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "tourist",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/login"); // redirect to home
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F1E9] px-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 px-4 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup} className="space-y-5">

          <div>
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg mt-1"
            >
              <option value="tourist">Tourist</option>
              <option value="researcher">Researcher</option>
              
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-red-600 font-semibold">
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}
