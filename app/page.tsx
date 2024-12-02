import Hero from "./components/Hero";
// import AboutMe from "./components/AboutMe";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section
      <section id="about">
        <AboutMe />
      </section> */}

      {/* Experience Section */}
      {/* <section id="experience">
        <Experience />
      </section> */}

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
