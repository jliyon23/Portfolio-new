import React from "react";
import GitHubCalendar from "react-github-calendar";
import Techstack from "../../components/Techstack";
import Divider from "../../components/Divider";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full p-5 md:px-16  text-white">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter  md:text-5xl lg:text-6xl/none">
            Hi, I'm Joseph Liyon
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            I'm a full-stack developer with a passion for creating beautiful and
            functional web, mobile applications.
          </p>
        </div>
        <div className="space-x-4">
          <button className="p-2 mt-3 bg-[#43b043] rounded-sm hover:bg-green-500">
            Download Resume <i class="fa-solid fa-download"></i>
          </button>

          <NavLink to="/projects">
            <button
              className="p-2 mt-3 border border-[#43b043] rounded-sm hover:bg-green-500"
              variant="outline"
            >
              View my work
            </button>
          </NavLink>
        </div>
      </div>
      {/* <h1 className="text-4xl font-extrabold">I'm Joseph Liyon</h1>
      <p className="pt-3 text-lg">
        Welcome to my corner of the web! I’m Joseph Liyon, a Btech CSE student
        with a passion for full-stack development. Whether it's MERN, Django, or
        Next.js, I thrive on bringing ideas to life through code.
      </p>
      <p className="pt-3">
        Get to know the person behind the code? Read my{" "}
        <a href="/about" className="text-green-500">
          ABOUT
        </a>{" "}
        page.
      </p>
      <p>
        Discover the projects I've worked on. Check out my{" "}
        <a href="/projects" className="text-green-500">
          PROJECTS
        </a>{" "}
        page.
      </p>
      <p>
        Want to collaborate or just say hi? Feel free to reach out!{" "}
        <a href="/contact" className="text-green-500">
          CONTACT
        </a>
        .
      </p>
      <button className="p-2 mt-3 bg-green-600 rounded-sm hover:bg-green-500">
        Download Resume <i class="fa-solid fa-download"></i>
      </button> */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl  font-extrabold pt-5">Connect with me</h1>
        <div className="flex gap-3 justify-center items-center p-2 mt-3">
          <a
            href="https://github.com/jliyon23"
            target="_blank"
            className="p-4 bg-zinc-800 rounded-full border border-white px-5 hover:bg-[#00ff00]"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-liyon-9619ab250"
            target="_blank"
            className="p-4 px-5 bg-zinc-800 rounded-full border border-white hover:bg-[#00ff00]"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/josephh.liyon"
            target="_blank"
            className="p-4 px-5 bg-zinc-800 rounded-full border border-white hover:bg-[#00ff00]"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mt-24 ">
        <h1 className="text-3xl font-extrabold">Skills</h1>
        <Techstack />
      </div>
      <div className="flex flex-col mt-10 items-center justify-center">
        <h1 className="text-2xl font-extrabold ">GitHub Activity</h1>
        <GitHubCalendar
          username="jliyon23"
          blockSize={10}
          blockMargin={5}
          color="#00ff00"
          fontSize={12}
        />
      </div>
    </div>
  );
};

export default Home;
