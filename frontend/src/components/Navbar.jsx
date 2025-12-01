import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Explore Monasteries", href: "/explore" },
    { name: "AI Itinerary", href: "/ai-itinerary" },
    { name: "Heritage Archive", href: "/heritage" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Logo + Title */}
      <div className="flex items-center gap-1">
        <div className="bg-white-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
          ⛩️
        </div>
        <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
          Monastery Explorer
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-[19px] ${
              link.active ? "text-red-600 font-semibold" : "text-gray-600"
            } hover:text-red-600 transition`}
          >
            {link.name}
          </a>
        ))}

        {/* Login Button (simple text) */}
        <a
          href="/login"
          className="text-gray-700 font-medium hover:text-red-600 transition"
        >
          Login
        </a>

        {/* Sign Up Button (highlighted) */}
        <a
          href="/signup"
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
        >
          Sign Up
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-800"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md py-5 flex flex-col gap-4 px-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[17px] ${
                link.active ? "text-red-600 font-semibold" : "text-gray-700"
              } hover:text-red-600 transition`}
            >
              {link.name}
            </a>
          ))}

          {/* Login */}
          <a
            href="/login"
            className="text-gray-700 font-medium hover:text-red-600 transition"
          >
            Login
          </a>

          {/* Sign Up */}
          <a
            href="/signup"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium text-center hover:bg-yellow-500 transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
