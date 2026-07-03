import "./Certifications.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../../data/certifications";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <Sectiontitle
        title="Certifications"
        subtitle="Learning & Professional Development"
      />

      <div className="certifications-grid">

        {certifications.map((certificate) => (

          <motion.div
            key={certificate.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >

            <img
              src={certificate.image}
              alt={certificate.title}
            />

            <div className="certificate-content">

              <h3>{certificate.title}</h3>

              <span>
                {certificate.organization}
              </span>

              <p>{certificate.description}</p>

              <div className="certificate-footer">

                <small>{certificate.year}</small>

                <small className="status">
                  {certificate.status}
                </small>

              </div>

              <a
                href={certificate.credential}
                target="_blank"
                rel="noreferrer"
              >
                View Credential <FaExternalLinkAlt />
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;