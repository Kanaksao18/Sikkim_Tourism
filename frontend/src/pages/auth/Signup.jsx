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

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/login");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/06/91/05/19/360_F_691051962_GFhQPOAXABmf7l706q89b2PFh6FnB1kI.jpg')",
      }}
    >
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl border border-white/30 rounded-2xl p-10 w-full max-w-md">
        
        <h2 className="text-4xl font-serif font-bold text-center text-red-800 mb-6 drop-shadow-lg">
          Create Account
        </h2>

        {error && (
          <p className="bg-red-200/80 text-red-800 px-4 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup} className="space-y-6">

          <div>
            <label className="font-medium text-red-800 drop-shadow-md">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/60 px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          <div>
            <label className="font-medium text-red-800 drop-shadow-md">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/60 px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          <div>
            <label className="font-medium text-red-800 drop-shadow-md">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/60 px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          <div>
            <label className="font-medium text-red-800 drop-shadow-md">
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/60 px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              <option value="tourist">Tourist</option>
              <option value="researcher">Researcher</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition-transform hover:scale-[1.02]"
          >
            Sign Up
          </button>

          <p className="text-center text-red-100 drop-shadow-md mt-2">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-yellow-300 font-semibold hover:underline"
            >
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}
