import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
// Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Heritage from "./pages/Heritage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AICulturalStory from "./pages/AICulturalStory";
import TourGuide from "./pages/TourGuide";
// Admin + Protected
import AdminRoute from "./components/AdminRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddMonastery from "./pages/admin/AddMonastery";
import ManageMonasteries from "./pages/admin/ManageMonasteries";
import EditMonastery from "./pages/admin/EditMonastery";
// Profile
import UserProfile from "./pages/profile/UserProfile";
import Footer from "./components/Footer.jsx";

function LayoutWithFooter() {
  const location = useLocation();

  // Hide footer on login & signup routes
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/ai-storytelling" element={<AICulturalStory />} />
        <Route path="/tour-guide" element={<TourGuide />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected: User */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        {/* Protected: Admin */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/add-monastery"
          element={
            <AdminRoute>
              <AddMonastery />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/monasteries"
          element={
            <AdminRoute>
              <ManageMonasteries />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/edit-monastery/:id"
          element={
            <AdminRoute>
              <EditMonastery />
            </AdminRoute>
          }
        />
      </Routes>

      {/* Show footer only when NOT login/signup */}
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <LayoutWithFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;
