import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

// Import your pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AIItinerary from "./pages/AIItinerary";
import Heritage from "./pages/Heritage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/ai-itinerary" element={<AIItinerary />} />
        <Route path="/heritage" element={<Heritage />} />
      </Routes>
    </Router>
  );
}

export default App;
