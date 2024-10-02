import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="bg-zinc-900 p-5 mb-4 rounded-2xl sticky top-0 z-40">
      <div className="flex text-white">
        <a href="/">
          <h1 className="my-auto font-bold text-[22px] lg:text-3xl  pr-2 mr-2 border-r-2 border-green-500 lg:pr-5 lg:mr-5">
            Jliyon
          </h1>
        </a>
        <span className="my-auto mr-2 lg:hidden" onClick={() => setNav(!nav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </span>
        <div className="my-auto">
          <ul className="hidden lg:flex font-bold">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff", // Active green color
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-b-2 border-transparent hover:border-b-green-300 transition-all duration-300 ease-linear">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-b-2 border-transparent hover:border-b-green-300 transition-all duration-300 ease-linear">
                About
              </li>
            </NavLink>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-b-2 border-transparent hover:border-b-green-300 transition-all duration-300 ease-linear">
                Projects
              </li>
            </NavLink>
            
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-b-2 border-transparent hover:border-b-green-300 transition-all duration-300 ease-linear">
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
        <a
          href="https://github.com/PugazhendhiDev/"
          className="my-auto ml-auto flex rounded text-white font-bold bg-zinc-600 border-2 border-green-500 p-1 lg:px-5 lg:py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <h1 className="hidden uppercase ml-2 lg:block">Hire</h1>
        </a>
      </div>
      {nav && (
        <div
          id="menu"
          className="mt-5 p-5 bg-zinc-800 border-2 border-green-500 rounded-2xl"
          onClick={() => setNav(!nav)}
        >
          <ul className="font-bold text-white">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-green-500">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-green-500">About</li>
            </NavLink>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff",
                textDecoration: "none",
              })}
            >
              <li className="mb-2 hover:text-green-500">Projects</li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(0, 255, 0)" : "#fff",
                textDecoration: "none",
              })}
            >
              <li className="hover:text-green-500">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
