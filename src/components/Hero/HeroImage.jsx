import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      className="hero-image"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      <div className="image-glow"></div>

      <img
        src="/profile.png"
        alt="Dileep Byrisetti"
      />
    </motion.div>
  );
}

export default HeroImage;