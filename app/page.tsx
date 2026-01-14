import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills"; // 1. Import it here
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll"; // Add this

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
        <CursorGlow />
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <div className="space-y-0">
          <section id="about">
            <About />
          </section>
          
          <Leadership />
          
          <Skills /> {/* 2. Include it here */}

          <section id="experience">
            <Experience />
          </section>

          {/* This section has the high-end sticky overlap we built */}
          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}