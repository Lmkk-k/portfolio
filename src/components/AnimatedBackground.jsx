import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "radial-gradient(ellipse at bottom, #0a0f1f 0%, #000000 100%)",
        overflow: "hidden",
      }}
    >
      {/* Nebula clouds */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`nebula-${i}`}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: i % 2 === 0 ? [0, 180] : [180, 0],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: i === 0 ? "600px" : i === 1 ? "400px" : "500px",
            height: i === 0 ? "300px" : i === 1 ? "200px" : "250px",
            background: i % 3 === 0 
              ? "radial-gradient(ellipse, rgba(56, 189, 248, 0.1) 0%, rgba(56, 189, 248, 0.03) 30%, transparent 70%)"
              : i % 3 === 1
              ? "radial-gradient(ellipse, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.03) 30%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.02) 30%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            top: `${(i * 20) % 100}%`,
            left: `${(i * 25) % 100}%`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Lightning bolts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`lightning-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2 + Math.random(),
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "200px",
            background: "linear-gradient(to bottom, transparent, #38bdf8, transparent)",
            left: `${10 + i * 15}%`,
            top: "-50px",
            filter: "blur(1px) drop-shadow(0 0 10px #38bdf8)",
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        />
      ))}

      {/* Swirling debris */}
      {[...Array(60)].map((_, i) => {
        const distance = 300 + Math.random() * 400;
        const angle = (i / 60) * Math.PI * 2;
        const size = Math.random() * 4 + 1;
        const color = i % 4 === 0 ? "#38bdf8" : i % 4 === 1 ? "#8b5cf6" : i % 4 === 2 ? "#10b981" : "#f59e0b";
        
        return (
          <motion.div
            key={`debris-${i}`}
            animate={{
              rotate: 360,
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
            }}
            transition={{
              rotate: { duration: Math.random() * 30 + 20, repeat: Infinity, ease: "linear" },
              x: { duration: Math.random() * 20 + 10, repeat: Infinity, ease: "linear" },
              y: { duration: Math.random() * 20 + 10, repeat: Infinity, ease: "linear" },
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: `${size}px`,
              height: `${size}px`,
              background: color,
              borderRadius: "50%",
              filter: `blur(${size / 2}px)`,
              boxShadow: `0 0 ${size * 3}px ${color}`,
            }}
          />
        );
      })}

      {/* Galactic center */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 50, repeat: Infinity, ease: "linear" }
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(56, 189, 248, 0.05) 30%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(20px)",
          boxShadow: "0 0 100px rgba(56, 189, 248, 0.3)",
        }}
      />

      {/* Particle rain */}
      {[...Array(120)].map((_, i) => (
        <motion.div
          key={`rain-${i}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "100vh", opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            position: "absolute",
            width: "1px",
            height: "20px",
            background: "linear-gradient(to bottom, transparent, #38bdf8, transparent)",
            left: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;