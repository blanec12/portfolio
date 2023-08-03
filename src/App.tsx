import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <footer className="text-center bg-dark">
        <div className="container text-white py-4 py-lg-5">
          <p className="text-white mb-0 fw-bold text-decoration-underline">
            Blane Cummings
          </p>
          <p className="text-white mb-0">Copyright © 2023</p>
        </div>
      </footer>
    </main>
  );
}
