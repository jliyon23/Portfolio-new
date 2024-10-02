import React from "react";
import { FaTools } from "react-icons/fa";

const Maintenance = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 bg-transparent text-white">
      <FaTools className="text-6xl text-[#00FF00] mb-5" />
      <h1 className="text-4xl text-center font-bold mb-3">Page Under Maintenance</h1>
      <p className="text-lg text-gray-400 mb-5 text-center">
        We're currently working on this page to improve your experience.
      </p>
      <p className="text-gray-500 text-sm">
        Please check back later.
      </p>
    </div>
  );
};

export default Maintenance;
