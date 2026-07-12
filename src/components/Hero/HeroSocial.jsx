import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function HeroSocial() {
  return (
    <div className="hero-social">

      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/YOUR_USERNAME"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:YOUR_EMAIL"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default HeroSocial;