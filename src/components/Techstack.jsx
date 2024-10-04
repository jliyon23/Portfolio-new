import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div className="flex flex-wrap justify-center pb-12">
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <DiJavascript1 />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <DiNodejs />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <DiReact />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <DiMongodb />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <SiNextdotjs />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <DiGit />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <SiFirebase />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <SiPostgresql />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <DiPython />
      </div>
      <div className="flex justify-center items-center w-16 h-16 m-4 text-4xl border border-[#fff] hover:border-[#00ff00] rounded-md">
        <DiJava />
      </div>
    </div>
  );
}

export default Techstack;
