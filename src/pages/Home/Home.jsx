import React from "react";

const Home = () => {
  return (
    <div className="w-full p-5 md:px-16  text-white">
      <h1 className="text-4xl font-extrabold">I'm Joseph Liyon</h1>
      <p className="pt-3 text-lg">
        Welcome to my corner of the web! I’m Joseph Liyon, a Btech CSE student
        with a passion for full-stack development. Whether it's MERN, Django, or
        Next.js, I thrive on bringing ideas to life through code.
      </p>
      <p className="pt-3">
        Get to know the person behind the code? Read my{" "}
        <a href="/about" className="text-green-500">ABOUT</a> page.
      </p>
      <p>
        Discover the projects I've worked on. Check out my{" "}
        <a href="/projects" className="text-green-500">PROJECTS</a> page.
      </p>
      <p>
        Want to collaborate or just say hi? Feel free to reach out!{" "}
        <a href="/contact" className="text-green-500">CONTACT</a>.
      </p>
      <button className="p-2 mt-3 bg-green-600 rounded-sm hover:bg-green-500">
        Download Resume <i class="fa-solid fa-download"></i>
      </button>
      <div className="flex gap-3 justify-center items-center p-2 mt-3">
          <a href="https://github.com/jliyon23" target="_blank" className="p-4 bg-zinc-800 rounded-md border border-white px-5">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-liyon-9619ab250"
            target="_blank"
            className="p-4 px-5 bg-zinc-800 rounded-md border border-white"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/liyon.raw" target="_blank"
          className="p-4 px-5 bg-zinc-800 rounded-md border border-white">
            <i class="fa-brands fa-instagram"></i>
          </a>
      </div>
      
    </div>
  );
};

export default Home;
