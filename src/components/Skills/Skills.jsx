import "./Skills.css";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function Skills() {
  return (
    <section className="skills" id="skills">
      <Sectiontitle
        title="Technical Skills"
        subtitle="Technologies I Work With"
      />

      <div className="skills-container">
        {skills.map((group, index) => (
          <motion.div
            className="skill-category"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{group.category}</h3>

            <div className="skills-grid">
              {group.items.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-card" key={i}>
                    <Icon className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;