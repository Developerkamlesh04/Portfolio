import React from "react";
import { ArrowRight, Mouse, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from "./About";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Footer from "./Footer";
import Contact from "./Contact";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0d0d0d" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#888", distance: 120 },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.3 },
            size: { value: 2 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <section
        id="hero"
        className="relative min-h-screen w-full text-white flex items-center justify-center px-3 sm:px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto mt-28 sm:mt-24 flex flex-col items-center text-center">
          {/* Tagline */}
          <motion.p
            className="text-purple-400 text-sm sm:text-base tracking-wide mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🚀 Crafting Modern Web Experiences
          </motion.p>

          {/* Name + Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
              Kamlesh Kumar
            </span>
            <br /> Frontend Developer
          </motion.h1>

          {/* Bio */}
          <motion.p
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mt-4 sm:mt-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Passionate about creating modern, responsive, and user-friendly web
            applications using <strong>React</strong>,{" "}
            <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
            Always eager to learn and grow as a{" "}
            <span className="text-purple-400 font-semibold">
              Full Stack Developer
            </span>
            .
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-5 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-purple-400 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-purple-400 transition" />
            </a>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg">
              <p className="text-3xl font-bold">
                <CountUp end={5} duration={3} />+
              </p>
              <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg">
              <p className="text-yellow-400 text-lg">★★★★★</p>
              <p className="text-xl font-bold mt-1">Core Skills</p>
              <p className="text-gray-400 text-sm">
                React • Tailwind • JavaScript
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition font-medium shadow-lg hover:shadow-purple-500/50"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-base bg-white/10 border border-white/10 hover:bg-white/20 backdrop-blur-sm transition hover:shadow-lg"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-1 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            <Mouse className="w-5 h-5 animate-bounce" />
            Scroll Down
          </motion.div>
        </div>
      </section>

      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}
