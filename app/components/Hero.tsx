"use client";
import React from "react";
import { techStack } from "../utils/techStack";
import TechIcon from "./TechIcon";

const Hero = () => {
  const iconStyle =
    "transform hover:scale-110 transition-transform w-10 h-10 hover:text-gray-600";

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 text-center p-8"
    >
      {/* Welcome Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Alon's Portfolio</h1>
        <p className="text-xl font-light">Passionate Software Engineer</p>
      </div>

      {/* About Me Section */}
      <div id="about" className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-8">
          Hi! I'm Alon Friedlander, a software engineer passionate about solving
          complex problems and writing clean code. After earning a Civil
          Engineering degree, I transitioned into tech through an 8-month
          intensive program at Infinity Labs and gained hands-on experience
          during my 6 months at Omnicon Systems. I'm driven to learn and create
          impactful solutions.
        </p>

        {/* Technologies Section */}
        <h3 className="text-2xl font-semibold mb-4">
          Technologies I've worked with:
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map(({ name, iconName, prefix }) => (
            <TechIcon
              key={name}
              iconName={iconName}
              prefix={prefix}
              name={name}
              style={iconStyle}
            />
          ))}
        </div>
      </div>

      {/* Download CV Button */}
      <div className="mt-8">
        <a
          href="/Alon_Friedlander_CV.pdf" // Replace with your actual CV file path
          download="Alon_Friedlander_CV.pdf"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
