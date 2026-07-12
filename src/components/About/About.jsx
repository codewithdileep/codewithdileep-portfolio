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
            I'm a <strong>Associate System Engineer</strong> at
            <strong> Tata Consultancy Services (TCS)</strong>,
            currently contributing to the
            <strong> GE Vernova Advanced Distribution Management System (ADMS)</strong>.
          </p>

          <p>
            My primary expertise is in
            <strong> Java, Python, React, SQL Server</strong> and
            <strong> Azure DevOps</strong>.
           I worked on enterprise-grade backend solutions, implemented new features, resolved production issues, and collaborated in Agile teams.
          </p>

          <p>
            I'm continuously improving my skills in
            <strong> Artificial Intelligence</strong>,
            <strong> Cloud Technologies</strong>, and
            <strong> Modern Full-Stack Development</strong>
            while building scalable enterprise applications.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <FaLaptopCode />
              <h4>Backend Development</h4>
            </div>

            <div className="about-card">
              <FaProjectDiagram />
              <h4>Enterprise Applications</h4>
            </div>

            <div className="about-card">
              <FaUsers />
              <h4>Agile Collaboration</h4>
            </div>

            <div className="about-card">
              <FaBrain />
              <h4>AI & Continuous Learning</h4>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;