import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import profilePic from "../img/lemark1.jpg";

function Home() {
  const [screenSize, setScreenSize] = useState("desktop");
  
  // Interactive mouse tracking for desktop
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1400) {
        setScreenSize("xl-desktop");
      } else if (width >= 1200) {
        setScreenSize("large-desktop");
      } else if (width >= 1024) {
        setScreenSize("desktop");
      } else if (width >= 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };
    
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    handleResize(); // Initial call
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  // Get responsive values based on screen size
  const getResponsiveValues = () => {
    switch (screenSize) {
      case "xl-desktop":
        return {
          containerPadding: "clamp(4rem, 8vw, 8rem) clamp(2rem, 12vw, 14rem)",
          containerGap: "8rem",
          imageSize: "420px",
          imageBorder: "6px solid #38bdf8",
          nameFontSize: "4.5rem",
          titleFontSize: "2.5rem",
          bioFontSize: "1.5rem",
          bioLineHeight: 1.9,
          bioPadding: "2rem",
          bioBorderRadius: "16px",
          buttonPadding: "1.2rem 2.5rem",
          buttonFontSize: "1.2rem",
          buttonGap: "2rem",
          gridGap: "3rem",
        };
      case "large-desktop":
        return {
          containerPadding: "clamp(4rem, 6vw, 6rem) clamp(2rem, 10vw, 10rem)",
          containerGap: "7rem",
          imageSize: "400px",
          imageBorder: "5px solid #38bdf8",
          nameFontSize: "4rem",
          titleFontSize: "2.2rem",
          bioFontSize: "1.4rem",
          bioLineHeight: 1.8,
          bioPadding: "1.8rem",
          bioBorderRadius: "14px",
          buttonPadding: "1.1rem 2.2rem",
          buttonFontSize: "1.15rem",
          buttonGap: "1.8rem",
          gridGap: "2.5rem",
        };
      case "desktop":
        return {
          containerPadding: "clamp(3rem, 5vw, 6rem) clamp(1.5rem, 8vw, 8rem)",
          containerGap: "6rem",
          imageSize: "380px",
          imageBorder: "5px solid #38bdf8",
          nameFontSize: "3.5rem",
          titleFontSize: "2rem",
          bioFontSize: "1.3rem",
          bioLineHeight: 1.8,
          bioPadding: "1.5rem",
          bioBorderRadius: "12px",
          buttonPadding: "1rem 2rem",
          buttonFontSize: "1.1rem",
          buttonGap: "1.5rem",
          gridGap: "2rem",
        };
      case "tablet":
        return {
          containerPadding: "clamp(3rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)",
          containerGap: "4rem",
          imageSize: "320px",
          imageBorder: "4px solid #38bdf8",
          nameFontSize: "3rem",
          titleFontSize: "1.7rem",
          bioFontSize: "1.2rem",
          bioLineHeight: 1.7,
          bioPadding: "1.2rem",
          bioBorderRadius: "10px",
          buttonPadding: "0.9rem 1.8rem",
          buttonFontSize: "1rem",
          buttonGap: "1.2rem",
          gridGap: "1.8rem",
        };
      default: // mobile
        return {
          containerPadding: "3rem 1.5rem",
          containerGap: "3rem",
          imageSize: "280px",
          imageBorder: "4px solid #38bdf8",
          nameFontSize: "2.5rem",
          titleFontSize: "1.5rem",
          bioFontSize: "1.1rem",
          bioLineHeight: 1.6,
          bioPadding: "1rem",
          bioBorderRadius: "8px",
          buttonPadding: "0.8rem 1.5rem",
          buttonFontSize: "0.95rem",
          buttonGap: "1rem",
          gridGap: "1.5rem",
        };
    }
  };

  const responsive = getResponsiveValues();
  const isMobile = screenSize === "mobile" || screenSize === "tablet";

  return (
    <>
      {/* Interactive cursor trail (desktop only) */}
      {!isMobile && (
        <motion.div
          style={{
            position: "fixed",
            left: cursorXSpring,
            top: cursorYSpring,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}

      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: responsive.containerPadding,
          flexDirection: isMobile ? "column" : "row",
          gap: responsive.containerGap,
          position: "relative",
          overflow: "hidden",
          width: "100%",
          maxWidth: "none",
        }}
      >
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            position: "absolute",
            width: screenSize === "xl-desktop" ? "600px" : "500px",
            height: screenSize === "xl-desktop" ? "600px" : "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)",
            top: "-10%",
            right: screenSize === "xl-desktop" ? "5%" : "-10%",
            zIndex: -1,
          }}
        />

        {/* PROFILE IMAGE */}
        <motion.div
          animate={{ y: isMobile ? 0 : [0, -20, 0] }}
          transition={{
            duration: isMobile ? 0 : 2.5,
            repeat: isMobile ? 0 : Infinity,
            ease: "easeInOut",
          }}
          whileHover={!isMobile ? { scale: 1.05, rotate: 2 } : {}}
          whileTap={isMobile ? { scale: 0.98 } : {}}
          style={{
            order: isMobile ? 1 : 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            cursor: !isMobile ? "pointer" : "default",
            flex: isMobile ? "0 0 auto" : 1,
          }}
        >
          {/* Glow effect */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 30px rgba(56, 189, 248, 0.3)",
                "0 0 50px rgba(56, 189, 248, 0.5)",
                "0 0 30px rgba(56, 189, 248, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute",
              width: `calc(${responsive.imageSize} + 40px)`,
              height: `calc(${responsive.imageSize} + 40px)`,
              borderRadius: "50%",
              zIndex: -1,
            }}
          />
          
          <img
            src={profilePic}
            alt="profile"
            style={{
              width: responsive.imageSize,
              height: responsive.imageSize,
              borderRadius: "50%",
              objectFit: "cover",
              border: responsive.imageBorder,
              transition: "all 0.3s ease",
            }}
          />
          
          {/* Interactive ring on hover */}
          {!isMobile && (
            <motion.div
              initial={false}
              animate={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                width: responsive.imageSize,
                height: responsive.imageSize,
                borderRadius: "50%",
                border: "3px dashed rgba(56, 189, 248, 0.5)",
                zIndex: -1,
              }}
            />
          )}
        </motion.div>

        {/* INTRO CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 30 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            order: isMobile ? 2 : 0,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: responsive.gridGap,
            textAlign: isMobile ? "center" : "left",
            maxWidth: isMobile ? "100%" : 
                     screenSize === "xl-desktop" ? "700px" : "650px",
            flex: 1,
          }}
        >
          {/* Name section with decorative element */}
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <motion.h1 
              style={{ 
                fontSize: responsive.nameFontSize, 
                lineHeight: 1.1,
                margin: 0,
                position: "relative",
              }}
              whileHover={!isMobile ? { color: "#38bdf8" } : {}}
              transition={{ duration: 0.3 }}
            >
              <span style={{ color: "#38bdf8" }}> Lemark Y. Rosales</span>
            </motion.h1>
            
            {/* Decorative line under name */}
            {!isMobile && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 
                  screenSize === "xl-desktop" ? "140px" :
                  screenSize === "large-desktop" ? "120px" : "100px" 
                }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  height: "4px",
                  background: "linear-gradient(90deg, #38bdf8, transparent)",
                  borderRadius: "2px",
                }}
              />
            )}
          </motion.div>

          {/* Title section */}
          <motion.div
            style={{
              padding: isMobile ? "0" : "0.5rem 0",
            }}
          >
            <motion.h3 
              style={{ 
                fontSize: responsive.titleFontSize, 
                fontWeight: 400, 
                opacity: 0.9,
                margin: 0,
                display: "inline-block",
                padding: isMobile ? "0.5rem 0" : "0.5rem 1rem",
                background: !isMobile ? "rgba(56, 189, 248, 0.05)" : "transparent",
                borderRadius: "8px",
              }}
              animate={!isMobile ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Software Engineer
            </motion.h3>
          </motion.div>

          {/* Bio section */}
          <motion.div
            style={{
              padding: responsive.bioPadding,
              background: !isMobile ? "rgba(56, 189, 248, 0.02)" : "transparent",
              border: !isMobile ? "1px solid rgba(56, 189, 248, 0.1)" : "none",
              borderRadius: responsive.bioBorderRadius,
              backdropFilter: !isMobile ? "blur(10px)" : "none",
            }}
            whileHover={!isMobile ? { 
              boxShadow: "0 10px 40px rgba(56, 189, 248, 0.1)",
              backgroundColor: "rgba(56, 189, 248, 0.03)"
            } : {}}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              style={{ 
                fontSize: responsive.bioFontSize,
                lineHeight: responsive.bioLineHeight,
                opacity: 0.9,
                margin: 0,
              }}
              whileHover={!isMobile ? { x: 5 } : {}}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Full-stack software engineer specializing in end to end web development.
              I build both the visual frontend and functional backend, connecting them to
              deliver reliable, scalable applications. I value clean architecture and intuitive design.
            </motion.p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div 
            style={{ 
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, auto)",
              gap: responsive.buttonGap, 
              marginTop: isMobile ? "0.5rem" : "0",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://github.com/Lmkk-k"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...buttonStyle,
                padding: responsive.buttonPadding,
                fontSize: responsive.buttonFontSize,
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(56, 189, 248, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/lemark-rosales-919291300/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...buttonStyleOutline,
                padding: responsive.buttonPadding,
                fontSize: responsive.buttonFontSize,
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                boxShadow: "0 10px 30px rgba(56, 189, 248, 0.2)"
              }}
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
              style={{
                ...buttonStyleOutline,
                padding: responsive.buttonPadding,
                fontSize: responsive.buttonFontSize,
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                boxShadow: "0 10px 30px rgba(56, 189, 248, 0.2)"
              }}
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

/* BASE BUTTON STYLES */
const buttonStyle = {
  backgroundColor: "#38bdf8",
  color: "#0f172a",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  whiteSpace: "nowrap",
  textAlign: "center",
  transition: "all 0.3s ease",
};

const buttonStyleOutline = {
  backgroundColor: "transparent",
  color: "#38bdf8",
  borderRadius: "12px",
  border: "2.5px solid #38bdf8",
  fontWeight: 600,
  cursor: "pointer",
  whiteSpace: "nowrap",
  textAlign: "center",
  transition: "all 0.3s ease",
};

export default Home;