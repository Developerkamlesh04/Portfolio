// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink } from "lucide-react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFramer } from "react-icons/si";


const projects = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/image.png",
    live: "",
    code: "https://github.com/yourusername/portfolio",
  },
  {
    title: "MindSpark Solutions",
    description:
      "Digital platform for Smart ERP, Coaching Automation, Web & App Development.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    image: "/mmmm.png",
    live: "https://mind-spark-solutions.vercel.app",
    code: "https://github.com/yourusername/mindspark",
  },
  {
    title: "Internship Portal",
    description:
      "MERN-based platform for students to register, take exams, and get placed.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Cloudinary"],
    image: "/internships.png",
    live: "https://skill-hub-ochre.vercel.app",
    code: "https://github.com/yourusername/internship-portal",
  },
];

// Icon mapping for tech stack
const techIcons = {
  React: <FaReact className="text-blue-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  "Framer Motion": <SiFramer className="text-pink-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Express: <FaNodeJs className="text-gray-300" />,
  JWT: <FaDatabase className="text-yellow-400" />,
  Cloudinary: <FaCss3Alt className="text-blue-300" />,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0d0d0d] text-white px-6 py-16 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-0 -right-40 w-[400px] h-[400px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          A showcase of my latest work in frontend and full-stack development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/40 transition-all duration-500 flex flex-col will-change-transform">
                {/* Project Image with Overlay */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project - ${project.description}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live website`}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-sm rounded-full transition-all shadow-lg"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white hover:border-white text-sm rounded-full transition-all"
                    >
                      <Github size={16} /> Code
                    </a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 text-xs mt-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 rounded-full border border-white/10"
                      >
                        {techIcons[tech] || null}
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
