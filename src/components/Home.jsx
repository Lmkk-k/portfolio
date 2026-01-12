import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import profilePic from "../img/lemark1.jpg";
import "../Frontend CSS/Home.css";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Interactive mouse tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {!isMobile && (
        <motion.div
          className="interactive-cursor"
          style={{
            '--cursor-x': cursorXSpring,
            '--cursor-y': cursorYSpring,
          }}
        />
      )}

      <section id="home" className="home-container">
        <motion.div
          className="home-bg-element"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* PROFILE IMAGE */}
        <motion.div
          className={`profile-image-container ${!isMobile ? 'desktop-profile-image' : ''}`}
          animate={{ y: isMobile ? 0 : [0, -20, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={!isMobile ? { scale: 1.05, rotate: 2 } : {}}
          whileTap={{ scale: 0.98 }}
        >
          <div className="profile-image-glow" />
          <img src={profilePic} alt="profile" className="profile-image" />
        </motion.div>

        {/* INTRO CONTENT */}
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 30 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="name-section">
            <motion.h1 
              className="name-heading"
              whileHover={!isMobile ? { color: "#38bdf8" } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="name-highlight">Lemark Y. Rosales</span>
            </motion.h1>
          </div>

          <div className="title-section">
            <motion.h3 
              className={`title-text ${!isMobile ? 'desktop-title-text' : ''}`}
              animate={!isMobile ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Software Engineer
            </motion.h3>
          </div>

          <motion.div
            className={`bio-section ${!isMobile ? 'desktop-bio-section' : ''}`}
            whileHover={!isMobile ? { 
              boxShadow: "0 10px 40px rgba(56, 189, 248, 0.1)",
              backgroundColor: "rgba(56, 189, 248, 0.03)"
            } : {}}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              className="bio-text"
              whileHover={!isMobile ? { x: 5 } : {}}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Full-stack software engineer specializing in end to end web development.
              I build both the visual frontend and functional backend, connecting them to
              deliver reliable, scalable applications. I value clean architecture and intuitive design.
            </motion.p>
          </motion.div>

          <motion.div 
            className="buttons-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://github.com/Lmkk-k"
              target="_blank"
              rel="noopener noreferrer"
              className="base-button primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/lemark-rosales-919291300/"
              target="_blank"
              rel="noopener noreferrer"
              className="base-button secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="base-button secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;