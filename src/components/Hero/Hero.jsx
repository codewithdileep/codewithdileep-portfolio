import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>👋 Hello, I'm</h3>

          <h1>
            Dileep <span>Byrisetti</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer", 2000,
              ".NET Developer", 2000,
              "React Developer", 2000,
              "AI Enthusiast", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p>
            Passionate Software Engineer with experience in
            C#, .NET, Angular, and enterprise application
            development.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" className="btn primary">
              <FaDownload /> Resume
            </a>

            <a href="#contact" className="btn secondary">
              <FaEnvelope /> Contact
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/profile.png" alt="Profile" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;