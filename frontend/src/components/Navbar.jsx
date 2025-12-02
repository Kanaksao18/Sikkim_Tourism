import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Monasteries", href: "/explore" },
    { name: "AI Itinerary", href: "/ai-itinerary" },
    { name: "Heritage Archive", href: "/heritage" },
    { name: "AI Storytelling", href: "/ai-storytelling" }

  ];

  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-4 flex items-center justify-between relative">
      
      {/* Logo */}
      <div className="flex items-center gap-1">
        <div className="w-10 h-10 rounded-xl text-2xl flex items-center justify-center">
          ⛩️
        </div>
        <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
          Monastery Explorer
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">

        {/* Links */}
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[18px] text-gray-700 hover:text-red-600 transition"
          >
            {link.name}
          </a>
        ))}

        {/* If user is logged in */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              {/* User Avatar Circle */}
              <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <span className="font-medium text-gray-800">
                {user.name.split(" ")[0]}
              </span>

              <ChevronDown className="w-4 h-4" />
            </button>

            {/* DROPDOWN MENU */}
            {dropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border py-2 z-50 animate-fadeIn">

                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>

                {user.role === "admin" && (
                  <a
                    href="/admin/add-monastery"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                )}

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        ) : (
          <>
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
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
            >
              Sign Up
            </a>
          </>
        )}
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
              className="text-[17px] text-gray-700 hover:text-red-600 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* If logged in on mobile */}
          {user ? (
            <>
              <span className="text-gray-700 text-lg font-medium">
                Hi, {user.name.split(" ")[0]}
              </span>

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Logout
              </button>

              {user.role === "admin" && (
                <a
                  href="/admin/add-monastery"
                  className="text-gray-700 font-medium hover:text-red-600"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </a>
              )}
            </>
          ) : (
            <>
              <a
                href="/login"
                className="text-gray-700 font-medium hover:text-red-600"
                onClick={() => setOpen(false)}
              >
                Login
              </a>

              <a
                href="/signup"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium text-center hover:bg-yellow-500"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
