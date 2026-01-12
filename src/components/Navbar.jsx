import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Freelance", id: "freelance" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Changed from 768 to 1024 for earlier hamburger
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    setActiveLink(id);
    setIsMobileMenuOpen(false); // Close mobile menu after click
    
    isManualScroll.current = true;
    
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);

    if (section) {
      // Add offset for mobile to not touch the home section
      const offset = isMobile ? 80 : 0;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

 const handleResumeDownload = () => {
  // Make sure the path matches your file location exactly
  // If it's directly in public folder:
  const resumeUrl = "/lemark.pdf"; // lowercase "l" to match your filename
  
  // Create anchor element for download
  const link = document.createElement('a');
  link.href = resumeUrl;
  
  // Set the download attribute with a nice filename for users
  link.download = 'Lemark-CV.pdf'; // Users will see this as the filename
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  // Handle scroll to update active link
  useEffect(() => {
    const handleScrollUpdate = () => {
      if (isManualScroll.current) return;
      
      const sections = links.map(link => ({
        id: link.id,
        element: document.getElementById(link.id)
      })).filter(section => section.element);
      
      let current = "home";
      const scrollPosition = window.scrollY + 100;
      
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
      
      if (scrollPosition + window.innerHeight >= document.body.scrollHeight - 100) {
        current = "contact";
      }
      
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScrollUpdate);
    window.addEventListener('resize', handleScrollUpdate);
    
    handleScrollUpdate();
    
    return () => {
      window.removeEventListener('scroll', handleScrollUpdate);
      window.removeEventListener('resize', handleScrollUpdate);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Navbar background style based on scroll and mobile menu
  const navbarStyle = {
    background: isMobileMenuOpen 
      ? "rgba(15, 23, 42, 0.98)" 
      : isScrolled 
      ? "rgba(15, 23, 42, 0.92)" 
      : "rgba(15, 23, 42, 0)",
    backdropFilter: isMobileMenuOpen || isScrolled ? "blur(15px)" : "none",
  };

  return (
    <>
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
          padding: "1.2rem clamp(1.5rem, 4vw, 5rem)",
          ...navbarStyle,
          borderBottom: isScrolled ? "1px solid rgba(56, 189, 248, 0.2)" : "none",
          zIndex: 1000,
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.2)" : "none",
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
      {/* Replace this div with img tag */}
      <img
              src="/LR logo.png"  // Your logo from public folder
            alt="LR Logo"
            style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            objectFit: "cover",  // Makes sure image fills the space nicely
            boxShadow: "0 1px 5px rgba(56, 189, 248, 0.3)",
            filter: "brightness(0) invert(1)", // Makes logo white

    }}
  />
</motion.div>

        {/* DESKTOP NAVIGATION LINKS - Hidden on mobile/tablet */}
        {!isMobile && (
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
                    : isScrolled 
                    ? "rgba(255, 255, 255, 0.9)" 
                    : "rgba(255, 255, 255, 0.95)",
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
        )}

        {/* DESKTOP RESUME BUTTON - Hidden on mobile/tablet */}
        {!isMobile && (
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
        )}

        {/* HAMBURGER MENU BUTTON - Shows on mobile/tablet OR when desktop is minimized */}
        {isMobile && (
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "8px",
              width: "48px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#38bdf8",
              fontSize: "1.5rem",
              display: "flex",
            }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        )}
      </motion.nav>

      {/* MOBILE/TABLET MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(15, 23, 42, 0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              padding: "2rem 1.5rem",
              overflow: "auto",
            }}
          >
            {/* Mobile Navigation Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {links.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: links.indexOf(link) * 0.1 }}
                  style={{
                    background: "none",
                    border: "none",
                    color: activeLink === link.id ? "#38bdf8" : "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "1rem 1.5rem",
                    textAlign: "left",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    borderLeft: activeLink === link.id ? "4px solid #38bdf8" : "none",
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Resume Button */}
            <motion.button
              onClick={handleResumeDownload}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: "auto",
                padding: "1rem 1.5rem",
                background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                color: "#0f172a",
                border: "none",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.8rem",
              }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent navbar from overlapping content */}
      <div style={{ 
        height: isMobile ? "80px" : "60px",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }} />
    </>
  );
}

export default Navbar;