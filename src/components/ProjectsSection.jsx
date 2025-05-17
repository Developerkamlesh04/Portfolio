import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Modern, responsive online store with payment integration.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Showcasing projects and skills with React and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Custom blogging platform with rich text editing and SEO.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Organize tasks with drag and drop and real-time sync.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    url: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100"
    >
      <h2 className="text-4xl font-extrabold text-yellow-500 mb-14 text-center tracking-tight">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map(({ id, title, description, image, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-500 mb-1 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
