import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "radial-gradient(circle at top, #020617, #000000)",
        overflow: "hidden",
      }}
    >
      {[...Array(40)].map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: Math.random(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;