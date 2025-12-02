import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  Landmark,
  Users,
  FileText,
  BarChart3,
  PlusCircle,
  Settings,
} from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#F5F1EB] flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-xl p-6 hidden md:block">
        <h2 className="text-2xl font-serif font-bold text-gray-800">
          Admin Panel
        </h2>

        <nav className="mt-10 space-y-5">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 text-gray-800 hover:text-red-600 transition"
          >
            <BarChart3 /> Dashboard
          </Link>

          <Link
            to="/admin/add-monastery"
            className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
          >
            <PlusCircle /> Add Monastery
          </Link>

          <Link
            to="/admin/monasteries"
            className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
          >
            <Landmark /> Manage Monasteries
          </Link>

          <Link
            to="/admin/heritage"
            className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
          >
            <FileText /> Heritage Archive
          </Link>

          <Link
            to="/admin/settings"
            className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
          >
            <Settings /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-gray-800">
            Welcome, {user?.name || "Admin"}
          </h1>

          <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
            ADMIN
          </div>
        </div>

        <p className="text-gray-600 mt-1">
          Manage monasteries, heritage data, users & AI tools.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-white p-6 rounded-xl shadow-md border flex items-center gap-4">
            <Landmark size={40} className="text-red-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">24</h3>
              <p className="text-gray-600 text-sm">Monasteries</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border flex items-center gap-4">
            <Users size={40} className="text-yellow-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">198</h3>
              <p className="text-gray-600 text-sm">Users</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border flex items-center gap-4">
            <FileText size={40} className="text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">54</h3>
              <p className="text-gray-600 text-sm">Heritage Items</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border flex items-center gap-4">
            <BarChart3 size={40} className="text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">312</h3>
              <p className="text-gray-600 text-sm">AI Queries</p>
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-serif font-semibold mt-16 mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link
            to="/admin/add-monastery"
            className="bg-white shadow-md border p-6 rounded-xl hover:shadow-lg transition"
          >
            <PlusCircle className="text-red-600 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Add New Monastery
            </h3>
            <p className="text-gray-600 mt-1">
              Insert new monastery details easily.
            </p>
          </Link>

          <Link
            to="/admin/monasteries"
            className="bg-white shadow-md border p-6 rounded-xl hover:shadow-lg transition"
          >
            <Landmark className="text-yellow-600 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Manage Monasteries
            </h3>
            <p className="text-gray-600 mt-1">
              Edit or delete monastery entries.
            </p>
          </Link>

          <Link
            to="/admin/heritage"
            className="bg-white shadow-md border p-6 rounded-xl hover:shadow-lg transition"
          >
            <FileText className="text-blue-600 mb-2" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Heritage Archive
            </h3>
            <p className="text-gray-600 mt-1">
              Manage historical items & cultural knowledge.
            </p>
          </Link>

        </div>

      </main>
    </div>
  );
}
