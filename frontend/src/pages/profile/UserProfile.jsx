import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function UserProfile() {
  const { user, token, logout, login } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    interests: user?.preferences?.interests?.join(", ") || "",
    language: user?.preferences?.language || "English",
  });

  const [message, setMessage] = useState("");

  // Change Password State
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordMsg, setPasswordMsg] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    setPasswordMsg("");

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordMsg("New passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(passwordForm),
      });

      const data = await res.json();

      if (!res.ok) {
        setPasswordMsg(data.message || "Password update failed");
        return;
      }

      setPasswordMsg("Password updated successfully!");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (err) {
      setPasswordMsg("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F1E9] flex justify-center py-12 px-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">

        {/* USER HEADER */}
        {/* ...existing content... */}

        {/* UPDATE PROFILE FORM */}
        {/* ...existing code... */}

        {/* CHANGE PASSWORD SECTION */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Change Password</h3>

        {passwordMsg && (
          <p className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg mb-4">
            {passwordMsg}
          </p>
        )}

        <form onSubmit={updatePassword} className="space-y-5">

          <div>
            <label className="font-medium">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              required
              className="w-full border px-4 py-2 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-medium">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              required
              className="w-full border px-4 py-2 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              required
              className="w-full border px-4 py-2 rounded-lg mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Update Password
          </button>
        </form>

        {/* LOGOUT BUTTON */}
        {/* ...existing logout button... */}
      </div>
    </div>
  );
}
