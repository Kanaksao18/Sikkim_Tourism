export default function Footer() {
  return (
    <footer className="bg-[#F6F1E9] border-t border-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-800">
            Monastery Explorer
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Digitally explore the sacred monasteries, culture, history,
            and spiritual legacy of Sikkim.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="/explore" className="hover:text-red-600 transition">Explore Monasteries</a></li>
            <li><a href="/ai-itinerary" className="hover:text-red-600 transition">AI Itinerary</a></li>
            <li><a href="/heritage" className="hover:text-red-600 transition">Heritage Archive</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/about" className="hover:text-red-600 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-red-600 transition">Contact</a></li>
            <li><a href="/privacy" className="hover:text-red-600 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-red-600 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
            Connect
          </h3>

          <p className="text-gray-700 mb-3">
            Follow our cultural exploration:
          </p>

          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-red-600 hover:scale-110 transition">📸</a>
            <a href="#" className="text-red-600 hover:scale-110 transition">🐦</a>
            <a href="#" className="text-red-600 hover:scale-110 transition">📘</a>
            <a href="#" className="text-red-600 hover:scale-110 transition">▶️</a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="text-center py-4 bg-[#EDE6D8] text-gray-700 text-sm">
        © {new Date().getFullYear()} Monastery Explorer — Made with ❤️ in Sikkim
      </div>
    </footer>
  );
}
