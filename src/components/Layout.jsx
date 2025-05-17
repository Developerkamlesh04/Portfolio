// Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ProjectsSection from "./ProjectsSection";
import ContactMe from "./ContactMe";
import TechStack from "./TechStack";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <TechStack/>
      <Services />
      <ProjectsSection />
      <ContactMe />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
