import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Ligat Haal X, Interactive Grid Game",
    description:
      "Developed a dynamic web app displaying an interactive grid of football team logos, with a player search functionality using Next.js and TailwindCSS.",
  },
  {
    id: "2",
    title: "This Website",
    description:
      "Built a personal portfolio website using Next.js, Tailwind CSS, and TypeScript. Implemented SEO optimization and a responsive design.",
  },
  {
    id: "3",
    title: "Startup Booster - Incharge Payment Processing System",
    description:
      "Led the frontend development using React, integrating multiple payment methods like DTS and Multipass to enhance the payment experience.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
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
