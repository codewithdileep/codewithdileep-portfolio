import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import { education } from "../../data/Education";

function Education() {
  return (
    <section className="education" id="education">

      <Sectiontitle
        title="Education"
        subtitle="Academic Background"
      />

      <div className="education-container">

        {education.map((item) => (

          <motion.div
            key={item.id}
            className="education-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div className="education-content">

              <h2>{item.degree}</h2>

              <h3>{item.specialization}</h3>

              <p className="college">
                {item.college}
              </p>

              <p>{item.university}</p>

              <div className="education-info">

                <span>{item.duration}</span>

                <span>{item.score}</span>

              </div>

              <p className="description">
                {item.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Education;