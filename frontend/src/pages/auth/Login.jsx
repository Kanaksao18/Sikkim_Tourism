import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
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
        
        <h2 className="text-4xl font-serif font-bold text-center text-red-700 mb-6 drop-shadow-lg">
          Login
        </h2>

        {error && (
          <p className="bg-red-200/80 text-red-800 px-4 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-6">

          <div>
            <label className="font-medium text-red-700 drop-shadow-md">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/60 px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="font-medium text-red-700 drop-shadow-md">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full border border-white/40 bg-white/60 px-4 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition-transform hover:scale-[1.02]"
          >
            Login
          </button>

          <p className="text-center text-red-100 drop-shadow-md mt-2">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-yellow-300 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}
