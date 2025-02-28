import React, { useState } from "react";
import { User, Mail, Lock, Camera } from "lucide-react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Chirag Zanpadiya",
    email: "chirag@example.com",
    password: "password123",
    profilePic: "https://via.placeholder.com/100", // Replace with actual image URL
  });

  const [editMode, setEditMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleSave = () => {
    setUser({ ...user, password: newPassword });
    setEditMode(false);
  };

  return (
    <div className="p-10 mx-auto ml-0 md:ml-[400px] mt-8 mb-8 bg-white rounded-xl shadow-xl  border justify-center items-center border-gray-200 w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Profile Settings</h2>

      {/* Profile Picture */}
      <div className="flex justify-center relative">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-400 shadow-md"
        />
        <button className="absolute bottom-0 right-0 bg-gray-800 p-1.5 rounded-full flex items-center justify-center">
          <Camera size={18} className="text-white" />
        </button>
      </div>

      {/* User Details */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg shadow-sm">
          <User className="text-gray-600" />
          <span className="text-lg font-medium">{user.name}</span>
        </div>

        <div className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg shadow-sm">
          <Mail className="text-gray-600" />
          <span className="text-lg">{user.email}</span>
        </div>

        <div className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg shadow-sm">
          <Lock className="text-gray-600" />
          {editMode ? (
            <input
              type="password"
              className="border px-3 py-1 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          ) : (
            <span className="text-lg">••••••••</span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        {editMode ? (
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-md"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-gray-600 text-white px-5 py-2 rounded-md shadow-md"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
