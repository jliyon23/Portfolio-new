import React from "react";
import { FaTools } from "react-icons/fa";

const MaintenancePopup = ({ closePopup }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center z-50">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center items-center">
        <FaTools className="text-6xl text-[#00FF00] mb-5" />

        </div>
        <h1 className="text-3xl text-white font-bold mb-3">Site Under Maintenance</h1>
        <p className="text-gray-400 mb-4">
          We're working to improve your experience. You can still navigate the site.
        </p>
        <button
          onClick={closePopup}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Continue to Site
        </button>
      </div>
    </div>
  );
};

export default MaintenancePopup;
