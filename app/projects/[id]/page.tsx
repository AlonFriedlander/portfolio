import React from "react";
import { Metadata } from "next";
import ProjectTemplate from "@/app/components/ProjectTemplate";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Define a more explicit type for the project
type ProjectPageData = {
  id: string;
  projectPage: {
    title: string;
    description: string;
    sections: {
      title: string;
      content: string[];
    }[];
    images: {
      src: string;
      alt: string;
    }[];
  };
};

const projects: ProjectPageData[] = [
  {
    id: "1",
    projectPage: {
      title: "Music Rehearsal App",
      description:
        "Designed and developed a real-time web app for managing music rehearsal rooms. The app supports multiple users and an admin role, offering features like song search, real-time updates, and interactive session control. The admin can manage rehearsals by controlling what is displayed on all users' screens, including scrolling song lyrics line by line for synchronized practice. The app is deployed on Netlify for the frontend and Render for the backend, ensuring a seamless and scalable user experience.",
      sections: [
        {
          title: "Key Features",
          content: [
            "User authentication with role-based access (Admin and Regular Users)",
            "Admin functionality to search and display songs on all users' screens",
            "Real-time socket communication for synchronized updates",
            "Line-by-line scrolling for song lyrics and chords",
            "Dynamic management of rehearsal rooms and user sessions",
          ],
        },
        {
          title: "Technologies Used",
          content: ["Node.js", "React", "Socket.IO", "MongoDB"],
        },
        {
          title: "Deployment",
          content: [
            "Frontend deployed via Netlify, providing a fast and globally distributed user experience.",
            "Backend deployed via Render, ensuring reliability and scalability for real-time communication.",
          ],
        },
      ],
      images: [
        {
          src: "/music_app/music_app_admin_result_page.png",
          alt: "Admin Result Page",
        },
        {
          src: "/music_app/music_app_admin_search_page.png",
          alt: "Admin Search Page",
        },
        {
          src: "/music_app/music_app_home_page.png",
          alt: "Home Page",
        },
        {
          src: "/music_app/music_app_live_page.png",
          alt: "Live Page",
        },
        {
          src: "/music_app/music_app_user_wait_page.png",
          alt: "User Wait Page",
        },
      ],
    },
  },
  {
    id: "2",
    projectPage: {
      title: "Flask-OpenAI API Integration",
      description:
        "A Flask project integrated with OpenAI’s API to handle user queries, storing responses in a PostgreSQL database and containerized using Docker.",
      sections: [
        {
          title: "Key Features",
          content: [
            "Flask server handling API requests",
            "Integration with OpenAI's API for intelligent responses",
            "PostgreSQL database for storing questions and answers",
            "Containerized with Docker for consistent deployment",
            "Implemented Alembic migrations for database schema updates",
          ],
        },
        {
          title: "Technologies Used",
          content: ["Python", "Flask", "PostgreSQL", "Docker"],
        },
      ],
      images: [],
    },
  },
  {
    id: "3",
    projectPage: {
      title: "Data Distribution System",
      description:
        "Designed and implemented a C++-based distributed data system utilizing a publisher-subscriber model over UDP communication. The project emphasizes efficient data distribution, real-time messaging, and modular architecture for scalability and maintainability.",
      sections: [
        {
          title: "Key Features",
          content: [
            "Publisher broadcasts square data at 2 Hz and circle data at 3 Hz.",
            "Square Subscriber: Only receives square-related data.",
            "General Subscriber: Receives both square and circle-related data.",
            "UDP-based communication for real-time data exchange.",
          ],
        },
        {
          title: "Technologies Used",
          content: ["C++", "UDP", "JSON", "CMake"],
        },
      ],
      images: [],
    },
  },
  {
    id: "4",
    projectPage: {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to showcase my skills, projects, and professional journey. Built with Next.js, React, and Tailwind CSS, the website features a responsive design, smooth animations, and a clean, modern interface. It serves as a platform to connect with potential employers and collaborators.",
      sections: [
        {
          title: "Key Features",
          content: [
            "Showcases professional journey, skills, and projects.",
            "Built with Next.js and React for dynamic, component-based architecture.",
            "Responsive design optimized for desktop and mobile devices.",
            "Clean, modern interface with smooth animations.",
          ],
        },
        {
          title: "Technologies Used",
          content: ["Next.js", "React", "Tailwind CSS"],
        },
      ],
      images: [],
    },
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const ProjectPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const project = projects.find((proj) => proj.id === resolvedParams.id);
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-red-500">Project not found!</p>
      </div>
    );
  }

  return <ProjectTemplate project={project.projectPage} />;
};

export default ProjectPage;
