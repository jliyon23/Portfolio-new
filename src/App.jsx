// App.jsx
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ParticlesComponent from "./components/Particles";

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <ParticlesComponent id="particles" />
      <div className="relative mx-3 mt-3 md:mt-5 md:mx-20 z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
