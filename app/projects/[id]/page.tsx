import React from "react";
import ProjectTemplate from "@/app/components/ProjectTemplate";

const projects = [
  {
    id: "1",
    projectPage: {
      title: "Ligat Haal X, Interactive Grid",
      description:
        "Developed a dynamic web app displaying an interactive grid of football team logos, with a player search functionality using Next.js and TailwindCSS.",
      sections: [
        {
          title: "Key Features",
          content: ["Interactive Grid", "Admin Dashboard", "Animations"],
        },
        {
          title: "Technologies Used",
          content: ["Next.js", "TailwindCSS", "Prisma", "Azure SQL"],
        },
      ],
      images: [
        { src: "/assets/images/ligat-haal/1.jpg", alt: "Interactive Grid" },
        { src: "/assets/images/ligat-haal/2.jpg", alt: "Search Player Modal" },
      ],
    },
  },
  {
    id: "2",
    projectPage: {
      title: "Portfolio Website",
      description: "A portfolio website built with Next.js and Tailwind CSS.",
      sections: [
        {
          title: "Design",
          content: ["Responsive Layout", "Smooth Animations"],
        },
        {
          title: "Technologies Used",
          content: ["Next.js", "TailwindCSS", "TypeScript"],
        },
      ],
      images: [
        { src: "/assets/images/portfolio/1.jpg", alt: "Portfolio Homepage" },
      ],
    },
  },
];

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const project = projects.find((proj) => proj.id === params.id);

  if (!project || !project.projectPage) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-red-500">Project not found!</p>
      </div>
    );
  }

  return <ProjectTemplate project={project.projectPage} />;
};

export default ProjectPage;
