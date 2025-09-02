import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaEye, FaDownload, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = [
  {
    id: 1,
    title: "Internship",
    image: "/intern.png",
    file: "/internshala internship.pdf",
    issuer: "Internshala",
    issuedOn: "Jan 2024",
  },
  {
    id: 2,
    title: "Java",
    image: "/Java.png",
    file: "/certificates/java.pdf",
    issuer: "IIT Kharagpur",
    issuedOn: "Feb 2024",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    image: "/certificates/fullstack.webp",
    file: "/certificates/fullstack.pdf",
    issuer: "XYZ Bootcamp",
    issuedOn: "Aug 2023",
  },
  {
    id: 4,
    title: "React & Tailwind Mastery",
    image: "/certificates/react.webp",
    file: "/certificates/react.pdf",
    issuer: "Frontend Masters",
    issuedOn: "May 2024",
  },
];

export default function CertificatesCarousel() {
  const [preview, setPreview] = useState(null);

  // Esc key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  return (
    <section className="bg-[#0d0d0d] text-white py-12 px-3 sm:px-6 md:px-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          🏆 My Certifications
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Swipe through my achievements — hover to preview, tap to zoom in.
        </p>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="px-2 sm:px-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              glareEnable
              glareMaxOpacity={0.15}
              glareBorderRadius="20px"
            >
              <div
                className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-purple-500/50 cursor-pointer
                           bg-gradient-to-br from-white/5 to-white/10 transition-transform"
                onClick={() => setPreview(cert)}
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500 transition-all duration-500"></div>

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-52 sm:h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {cert.issuer} • {cert.issuedOn}
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </Slider>

      {/* Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="bg-white/5 backdrop-blur-2xl p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl w-full max-w-4xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close */}
              <button
                aria-label="Close preview"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                onClick={() => setPreview(null)}
              >
                <FaTimes />
              </button>

              {/* Image */}
              <motion.img
                src={preview.image}
                alt={preview.title}
                className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Info + Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {preview.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {preview.issuer} • {preview.issuedOn}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={preview.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-purple-600 rounded-full flex items-center gap-2 text-sm sm:text-base hover:bg-purple-700 transition"
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={preview.file}
                    download
                    className="px-3 sm:px-4 py-2 border border-white/40 rounded-full flex items-center gap-2 text-sm sm:text-base hover:bg-white/10 transition"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
