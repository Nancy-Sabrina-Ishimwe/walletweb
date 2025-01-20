import React, { useState } from "react";
import { FaSearch, FaRegMoon, FaRegSun, FaUserCircle, FaBell, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Menu Icon for Mobile */}
      <button className="lg:hidden block text-gray-700 dark:text-gray-300">
        <FaBars size={24} />
      </button>

      {/* Search Bar */}
      <div className="relative w-1/3 hidden lg:block">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-10 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-300" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaRegSun size={20} /> : <FaRegMoon size={20} />}
        </button>

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <FaBell size={24} className="text-gray-700 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* User Profile */}
        <div className="relative">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer object-cover"
            />
          ) : (
            <FaUserCircle size={30} className="cursor-pointer text-gray-700 dark:text-gray-300" />
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleProfileUpload}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
