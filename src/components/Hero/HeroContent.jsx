import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";

function HeroContent() {
  return (
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="hero-badge">
        🚀 Available for Opportunities
      </span>

      <h3>Hello, I'm</h3>

      <h1>Dileep Byrisetti</h1>

      <TypeAnimation
        sequence={[
          "Software Engineer", 2000,
          ".NET Developer", 2000,
          "React Developer", 2000,
          "AI Enthusiast", 2000,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
      />

      <p>
        Building enterprise software using C#, .NET,
        React, SQL Server and Azure DevOps.
      </p>

      <HeroButtons />

      <HeroSocial />
    </motion.div>
  );
}

export default HeroContent;