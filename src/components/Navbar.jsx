import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const links = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef(null);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    setActiveLink(id);
    
    // Set flag to prevent auto scroll detection
    isManualScroll.current = true;
    
    // Clear any existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    // Reset flag after scroll completes
    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 1000); // 1 second should be enough for smooth scroll

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleResumeDownload = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  // Handle scroll to update active link
  useEffect(() => {
    const handleScrollUpdate = () => {
      // Don't update if we're manually scrolling
      if (isManualScroll.current) return;
      
      const sections = links.map(link => ({
        id: link.id,
        element: document.getElementById(link.id)
      })).filter(section => section.element);
      
      let current = "home";
      const scrollPosition = window.scrollY + 100;
      
      // Find which section is currently in view
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element) {
          const { top, bottom } = section.element.getBoundingClientRect();
          const offsetTop = window.scrollY + top;
          const offsetBottom = window.scrollY + bottom;
          
          if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
            current = section.id;
            break;
          }
        }
      }
      
      // Also check if we're at the bottom of the page
      if (scrollPosition + window.innerHeight >= document.body.scrollHeight - 100) {
        current = "contact";
      }
      
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScrollUpdate);
    window.addEventListener('resize', handleScrollUpdate);
    
    // Initial call
    handleScrollUpdate();
    
    return () => {
      window.removeEventListener('scroll', handleScrollUpdate);
      window.removeEventListener('resize', handleScrollUpdate);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem clamp(2rem, 6vw, 5rem)",
        background: "rgba(15, 23, 42, 0.92)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
        zIndex: 1000,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
      }}
    >
      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
        }}
        onClick={() => handleScroll("home")}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.4rem",
            color: "#0f172a",
            boxShadow: "0 4px 12px rgba(56, 189, 248, 0.3)",
          }}
        >
          L
        </div>
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#38bdf8",
            letterSpacing: "-0.5px",
          }}
        >
          LMKK
        </span>
      </motion.div>

      {/* NAVIGATION LINKS */}
      <div
        style={{
          display: "flex",
          gap: "clamp(2rem, 4vw, 4rem)",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <motion.button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "none",
              border: "none",
              color: activeLink === link.id 
                ? "#38bdf8" 
                : "rgba(255, 255, 255, 0.9)",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              padding: "0.8rem 0",
              letterSpacing: "0.3px",
              transition: "all 0.3s ease",
            }}
          >
            {link.name}
            {activeLink === link.id && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  bottom: "6px",
                  left: 0,
                  height: "3px",
                  background: "#38bdf8",
                  borderRadius: "3px",
                  boxShadow: "0 2px 8px rgba(56, 189, 248, 0.3)",
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* RESUME BUTTON */}
      <motion.button
        onClick={handleResumeDownload}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 10px 30px rgba(56, 189, 248, 0.4)" 
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "0.8rem 1.8rem",
          height: "48px",
          background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
          color: "#0f172a",
          border: "none",
          borderRadius: "12px",
          fontSize: "1.1rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.6rem",
          boxShadow: "0 4px 15px rgba(56, 189, 248, 0.2)",
          lineHeight: "1",
        }}
      >
        {/* Download Icon */}
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ marginBottom: "1px" }}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
      </motion.button>
    </motion.nav>
  );
}

export default Navbar;