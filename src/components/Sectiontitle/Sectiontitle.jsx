import "./Sectiontitle.css";
import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p>{subtitle}</p>

      <h2>{title}</h2>

      <div className="line"></div>
    </motion.div>
  );
}

export default SectionTitle;