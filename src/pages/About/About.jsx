import React from "react";
import pfp from "../../assets/pfp.jpg";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-full p-5 md:px-16 text-white flex flex-col items-center">
      <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
        <img
          src={pfp}
          width={250}
          className="border-4 border-white hover:border-green-500 rounded-full"
          alt="pfp"
        />
        <div className="p-5 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl font-bold">
            Joseph <span className="text-[#00FF00]">Liyon</span> PT
          </h1>
          <p>
            A{" "}
            <span className="font-semibold">
              Btech Computer Science and Engineering
            </span>{" "}
            Student
          </p>
          <h2 className="flex items-center gap-2 text-xl mt-2 p-1 text-white rounded-md bg-gray-700 opacity-40 w-fit">
            <FaLocationDot /> Kochi, Kerala
          </h2>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold border-b-2 border-[#00FF00] w-fit text-center">
          Education
        </h2>
        <ul className="list-disc pl-5 mt-3 text-center">
          <li className="text-lg font-medium">
            <p>Btech in Computer Science and Engineering</p>
            <p className="text-gray-300  text-lg font-semibold">
              Sree Narayana Gurukulam College of Engineering (2022 - Present)
            </p>
            <p className="text-sm bg-gray-900 opacity-40 p-2">
              <span>Relevant Coursework</span>: Object Oriented Programming,
              Databases, Discrete Maths, Data Structures and Algorithms,
              Operating Systems, Computer Networks, Machine Learning, Data
              Mining, Advance Data Structures and Algorithms, Information
              Retrieval, Image Processing
            </p>
          </li>
          {/* Add more education items here */}
        </ul>
      </div>

      {/* Skills Section */}
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold border-b-2 border-[#00FF00] w-fit text-center">
          Skills
        </h2>
        <div className="flex flex-col gap-2 mt-2">
          <p className="p-1 w-75 bg-gray-600 opacity-60 px-4 text-center rounded-md hover:bg-[#00ff00]">
            Web Development {"(MERN, NextJs)"}
          </p>
          <p className="p-1 w-75 bg-gray-600 opacity-60 px-4 text-center rounded-md hover:bg-[#00ff00]">
            API Development {"(ExpressJs, Django, Flask)"}
          </p>
          <p className="p-1 w-75 bg-gray-600 opacity-60 px-4 text-center rounded-md hover:bg-[#00ff00]">
            Mobile App Development {"(React Native)"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
