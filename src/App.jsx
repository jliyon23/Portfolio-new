import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ParticlesComponent from "./components/Particles";
import About from "./pages/About/About";
import Maintenance from "./components/Maintenance";
import MaintenancePopup from "./components/MaintenancePopUp";

function App() {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

  // Automatically close the popup after 5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 12000); // Adjust the time if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Particle background */}
      <ParticlesComponent id="particles" />

      {/* Popup overlay */}
      {showPopup && <MaintenancePopup closePopup={() => setShowPopup(false)} />}

      {/* Main Content */}
      <div className={`relative mx-3 mt-3 md:mt-5 md:mx-20 z-10 ${showPopup ? "blur-sm" : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Maintenance />} />
          <Route path="/contact" element={<Maintenance />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
