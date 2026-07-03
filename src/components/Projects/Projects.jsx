import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <Sectiontitle
        title="Projects"
        subtitle="Featured Work"
      />

      <div className="projects-grid">

        {projects.map((project) => (

          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <span className="duration">
                {project.duration}
              </span>

              <p>{project.description}</p>

              <div className="tech-list">

                {project.technologies.map((tech, index) => (
                  <span key={index}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;