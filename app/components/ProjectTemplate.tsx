"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

interface ProjectImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, onClick }) => (
  <div
    className="cursor-pointer hover:scale-105 transition-transform"
    onClick={onClick}
  >
    <Image
      src={src}
      alt={alt}
      width={300}
      height={200}
      className="rounded-lg object-cover"
    />
    <p className="text-sm text-center mt-2">{alt}</p>
  </div>
);

interface ProjectTemplateProps {
  project: {
    title: string;
    description: string;
    sections: { title: string; content: string[] }[];
    images: { src: string; alt: string }[];
  };
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [image, setImage] = useState({ src: "", alt: "" });

  const openImageModal = (src: string, alt: string) => {
    setImage({ src, alt });
    setIsImageModalOpen(true);
  };

  const handleClose = () => setIsImageModalOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[70vh] lg:min-h-[80vh] p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg mb-8">{project.description}</p>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {project.images.map((img, idx) => (
                <ProjectImage
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => openImageModal(img.src, img.alt)}
                />
              ))}
            </div>
          )}

          {/* Sections */}
          {project.sections.map((section, idx) => (
            <ProjectSection key={idx} title={section.title}>
              <ul className="list-disc pl-5 mb-8 text-lg">
                {section.content.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </ProjectSection>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative max-w-6xl p-4">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200} // Larger width for enlargement
              height={800} // Larger height for enlargement
              className="rounded-lg object-cover"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTemplate;
