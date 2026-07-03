import "./Experience.css";
import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function Experience() {
  return (
    <section className="experience" id="experience">

      <Sectiontitle
        title="Experience"
        subtitle="My Professional Journey"
      />

      <div className="experience-container">

        {experiences.map((exp, index) => (

          <motion.div
            className="experience-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="experience-header">

              <h2>{exp.role}</h2>

              <span>{exp.duration}</span>

            </div>

            <h3>{exp.company}</h3>

            <h4>Client: {exp.client}</h4>

            <p className="project">
              <strong>Project:</strong> {exp.project}
            </p>

            <p className="description">
              {exp.description}
            </p>

            <h4>Technologies</h4>

            <div className="tech-stack">

              {exp.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}

            </div>

            <h4>Key Responsibilities & Achievements</h4>

            <ul>

              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}

            </ul>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Experience;