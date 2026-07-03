import Scrollprogress from "./components/Scrollprogress/Scrollprogress";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Stats from "./components/Stats/Stats";
import Education from "./components/Education/Education";
function App() {
  return (
    <>
      <Scrollprogress />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;