import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>Dileep Byrisetti</h2>

          <p>
            Software Engineer passionate about
            building scalable applications,
            learning AI technologies,
            and creating modern web experiences.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <a
            href="https://github.com/codewithdileep"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/dileepbyrisetti"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:dileepbyrisetti@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Dileep Byrisetti.
          All Rights Reserved.
        </p>

        <button onClick={scrollTop}>
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;