"use server";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

const page = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
