import "./About.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaUsers,
  FaBrain,
} from "react-icons/fa";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function About() {
  return (
    <section className="about" id="about">
      <Sectiontitle
        subtitle="GET TO KNOW ME"
        title="About Me"
      />

      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src="/profile.png" alt="Dileep Byrisetti" />
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Hello! I'm Dileep 👋</h2>

          <p>
            I'm a Software Engineer at Tata Consultancy Services (TCS),
            currently working on the GE Vernova Advanced Distribution
            Management System (ADMS) project.
          </p>

          <p>
            I specialize in developing enterprise applications using
            C#, .NET, Angular, SQL Server, and Azure DevOps.
            My work includes backend development, defect resolution,
            feature enhancements, code reviews, and Agile software
            development.
          </p>

          <p>
            I'm passionate about building scalable software and
            continuously learning Cloud and Artificial Intelligence
            technologies.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <FaLaptopCode />
              <h4>Backend Development</h4>
            </div>

            <div className="about-card">
              <FaProjectDiagram />
              <h4>Enterprise Projects</h4>
            </div>

            <div className="about-card">
              <FaUsers />
              <h4>Agile Teamwork</h4>
            </div>

            <div className="about-card">
              <FaBrain />
              <h4>AI Enthusiast</h4>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;