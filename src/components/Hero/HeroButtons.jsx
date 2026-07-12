import {
  FaDownload,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

function HeroButtons() {
  return (
    <div className="hero-buttons">

      <a
        href="/resume.pdf"
        className="btn btn-primary"
      >
        <FaDownload />
        Download Resume
      </a>

      <a
        href="#projects"
        className="btn btn-secondary"
      >
        <FaBriefcase />
        View Projects
      </a>

      <a
        href="#contact"
        className="btn btn-outline"
      >
        <FaEnvelope />
        Contact Me
      </a>

    </div>
  );
}

export default HeroButtons;