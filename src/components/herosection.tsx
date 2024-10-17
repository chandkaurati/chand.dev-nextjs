import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="flex flex-col mt-10 md:mt-4 sm:flex-row sm:min-h-full items-center px-4 sm:justify-between">
      <div className=" border-blue-600 md:w-1/2 flex flex-col gap-6 ">
        <h1 className="text-[1.3rem] lg:text-[2.2rem] font-semibold">
          "Hi, I’m Chand Kaurati –{" "}
          <span className="text-[#06B6C7]">Full stack Developer</span> with a
          Passion for Building Web Applications"
        </h1>
        <p className="text-sm lg:text-lg text-[#A1A1AA]">
          I’m a self-taught full stack developer with a strong focus on the MERN
          stack. From building responsive, user-friendly frontends to designing
          robust backend architectures, I love turning ideas into reality
          through clean, efficient code. If you're looking for a developer who
          can bring fresh ideas, problem-solving skills, and technical expertise
          to your team, I’d love to connect and explore how we can work
          together!"
        </p>
        <p className="text-[#A1A1AA] text-sm lg:text-lg ">
          Exploring Web 3{" "}
          <span className="text-white font-semibold">Solidity</span> Devopps{" "}
          <span className="text-white font-semibold">Dokcer CI/CD </span> ✨
        </p>

        <Button className="w-20 lg:w-24 font-semibold">Hire Me !</Button>
      </div>
      <div className="object-contain md:w-1/2">
        <img
          className=" w-[32rem] sm:w-[90rem]"
          src="/assets/developer-image.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
