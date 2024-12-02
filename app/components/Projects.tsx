"use client";
import React from "react";
import Link from "next/link";
import { techStack } from "../utils/techStack";
import TechIcon from "./TechIcon";

const projects = [
  {
    id: "1",
    title: "Music Rehearsal App",
    description:
      "Designed and developed a real-time web app for music rehearsal room management, featuring user authentication, real-time socket communication, and dynamic session management.",
    technologies: [
      { name: "JavaScript", iconName: "js-square", prefix: "fab" },
      { name: "Node.js", iconName: "node-js", prefix: "fab" },
      { name: "React", iconName: "react", prefix: "fab" },
      { name: "MongoDB", iconName: "leaf", prefix: "fas" },
      { name: "DataBase", iconName: "database", prefix: "fas" },
      { name: "Socket.IO", iconName: "network-wired", prefix: "fas" },
    ],
    github: "https://github.com/AlonFriedlander/MusicRehearsalApp",
    live: "https://musicrehearsalapp.netlify.app/",
  },
  {
    id: "2",
    title: "Flask-OpenAI API Integration",
    description:
      "Integrated OpenAI’s API into a Flask application, storing questions and answers in a PostgreSQL database and containerized with Docker.",
    technologies: [
      { name: "Python", iconName: "python", prefix: "fab" },
      { name: "Flask", iconName: "flask", prefix: "fas" },
      { name: "PostgreSQL", iconName: "database", prefix: "fas" },
      { name: "Docker", iconName: "docker", prefix: "fab" },
    ],
    github: "https://github.com/AlonFriedlander/flask-openai-api",
  },
  {
    id: "3",
    title: "Data Distribution System",
    description:
      "Developed a C++-based system for efficient data distribution using a publisher-subscriber model over UDP communication. This system facilitates real-time distribution of geometrical shape data with multiple subscriber types.",
    technologies: [
      { name: "C++", iconName: "cuttlefish", prefix: "fab" }, // C++ approximation
      { name: "UDP", iconName: "network-wired", prefix: "fas" },
      { name: "JSON", iconName: "file-code", prefix: "fas" },
      { name: "CMake", iconName: "tools", prefix: "fas" },
    ],
    github: "https://github.com/AlonFriedlander/DataDistributionExercise",
  },
  {
    id: "4",
    title: "Personal Portfolio Website",
    description:
      "Designed and developed this portfolio website using Next.js, TailwindCSS, and TypeScript. Showcases my projects, skills, and experience with a responsive and visually appealing design.",
    technologies: [
      { name: "React", iconName: "react", prefix: "fab" },
    ],
    github: "https://github.com/AlonFriedlander/portfolio",
    live: "https://alonfriedlander.dev",
  },
];

const Projects = () => {
  const iconStyle =
    "transform hover:scale-110 transition-transform w-10 h-10 hover:text-gray-600";

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>

              {/* Display Technology Icons */}
              {project.technologies && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.technologies.map(({ iconName, prefix, name }) => (
                    <TechIcon
                      key={name}
                      iconName={iconName}
                      prefix={prefix} // Directly use prefix
                      name={name}
                      style={iconStyle}
                    />
                  ))}
                </div>
              )}

              {/* Buttons for GitHub and Live Demo */}
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
                  >
                    View GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    View Live
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
