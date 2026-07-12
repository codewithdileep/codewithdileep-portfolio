import "./Stats.css";
import { motion } from "framer-motion";

const stats = [
  {
    number: 1,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 10,
    suffix: "+",
    title: "Projects",
  },
  {
    number: 15,
    suffix: "+",
    title: "Technologies",
  },
  {
    number: 100,
    suffix: "%",
    title: "Dedication",
  },
];

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <h2>
              {item.number}
              {item.suffix}
            </h2>

            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;