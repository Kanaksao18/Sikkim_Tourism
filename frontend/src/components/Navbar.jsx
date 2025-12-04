import { useState } from "react";
import { Menu, X, ChevronDown, Map as MapIcon, Compass, Mountain } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Monasteries", href: "/explore" },
    { name: "Heritage Archive", href: "/heritage" },
    { name: "AI Storytelling", href: "/ai-storytelling" },
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
        
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[18px] text-gray-700 hover:text-red-600 transition"
          >
            {link.name}
          </a>
        ))}

        {/* TOUR GUIDE DROPDOWN (DESKTOP) */}
        <div className="relative">
          <button
            onClick={() => setGuideOpen((prev) => !prev)}
            className={`flex items-center gap-1 text-[18px] font-medium transition ${
              guideOpen ? "text-red-600" : "text-gray-800 hover:text-red-600"
            }`}
          >
            <Compass
              className={`w-4 h-4 mr-1 transition ${
                guideOpen ? "text-red-500" : "text-red-400"
              }`}
            />
            Tour Guide
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-150 ${
                guideOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {guideOpen && (
            <div className="absolute right-0 top-full mt-3 w-[720px] max-w-[92vw] bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-red-50 p-6 grid grid-cols-3 gap-6 z-40 animate-fadeIn">
              {/* 1. Destinations & Attractions */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Destinations &amp; Attractions
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  Explore Sikkim region by region with lakes, passes and valleys.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/tour-guide#east-sikkim"
                      className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                    >
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                        Scenic Drives
                      </span>
                      East Sikkim
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#north-sikkim"
                      className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                    >
                      <Mountain className="w-3 h-3 text-sky-500" />
                      North Sikkim
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#west-sikkim"
                      className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      West Sikkim
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#south-sikkim"
                      className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      South Sikkim
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#attractions"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                    >
                      <MapIcon className="w-3 h-3" />
                      Top Attractions
                    </a>
                  </li>
                </ul>
              </div>

              {/* 2. Experiences & Culture */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Experiences &amp; Culture
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  Hand‑picked experiences for every kind of traveller.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/tour-guide#places-to-visit"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Places to Visit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#things-to-do"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Things to Do
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#culture"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Culture &amp; Heritage
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#festivals"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Festivals
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#best-sellers"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Tour Ideas &amp; Durations
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3. Planning, Seasons & Packages */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Planning, Seasons &amp; Packages
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  Plan around how to reach, best time, weather and sample routes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/tour-guide#how-to-reach"
                      className="text-gray-700 hover:text-red-600"
                    >
                      How to Reach
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#best-time"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Best Time to Visit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#by-month"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Sikkim by Months
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#weather"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Weather Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#by-duration"
                      className="text-gray-700 hover:text-red-600"
                    >
                      Tours by Duration
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tour-guide#north-east"
                      className="text-gray-700 hover:text-red-600"
                    >
                      North East Circuits
                    </a>
                  </li>
                </ul>
                <a
                  href="/tour-guide"
                  className="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl bg-red-50 text-red-700 text-xs font-semibold hover:bg-red-100"
                >
                  <span>Open Full Tour Guide</span>
                  <span className="ml-2 text-[10px]">↗</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* USER LOGGED IN */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              {/* Avatar */}
              <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <span className="font-medium text-gray-800">
                {user.name.split(" ")[0]}
              </span>

              <ChevronDown className="w-4 h-4" />
            </button>

            {/* DROPDOWN */}
            {dropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">

                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>

                {/* ADMIN DASHBOARD */}
                {user.role === "admin" && (
                  <a
                    href="/admin/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Admin Dashboard
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
            {/* LOGIN */}
            <a
              href="/login"
              className="text-gray-700 font-medium hover:text-red-600 transition"
            >
              Login
            </a>

            {/* SIGN UP */}
            <a
              href="/signup"
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition"
            >
              Sign Up
            </a>
          </>
        )}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-800"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE DROPDOWN */}
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

          {/* TOUR GUIDE (MOBILE) */}
          <a
            href="/tour-guide"
            className="text-[17px] text-gray-700 hover:text-red-600 transition"
            onClick={() => setOpen(false)}
          >
            Tour Guide
          </a>

          {/* MOBILE USER MENU */}
          {user ? (
            <>
              <span className="text-gray-700 text-lg font-medium">
                Hi, {user.name.split(" ")[0]}
              </span>

              {/* Admin Mobile Link */}
              {user.role === "admin" && (
                <a
                  href="/admin/dashboard"
                  className="text-gray-700 hover:text-red-600"
                  onClick={() => setOpen(false)}
                >
                  Admin Dashboard
                </a>
              )}

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Logout
              </button>

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
