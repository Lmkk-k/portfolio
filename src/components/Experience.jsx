import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const experiences = [
  {
    role: "Technical Support Specialist",
    company: "Fasthosts",
    date: "October 2025 – Present",
    points: [
      "Provide technical support for DNS servers, domain management, email packages, website builders, and hosting services",
      "Assist with domain configuration and DNS records (A, CNAME, MX, TXT)",
      "Support WordPress websites including installation and troubleshooting",
      "Handle email setup, configuration, and common email issues",
      "Troubleshoot FTP access, file permissions, and connectivity issues",
      "Use PuTTY (SSH) for basic server diagnostics",
      "Investigate website availability and hosting-related issues",
    ],
    stack: ["DNS", "WordPress", "FTP", "SSH", "Email Systems", "Web Hosting"],
  },
  {
    role: "OJT Intern – Full Stack Developer",
    company: "Sprobe Inc.",
    date: "September 2024 – December 2024",
    points: [
      "Built and maintained web applications using Laravel and React.js",
      "Deployed applications using Docker and managed databases with DBeaver",
      "Developed a Pet Services Website with online inquiry and appointment scheduling",
      "Designed and implemented frontend and backend components",
    ],
    stack: ["React", "Laravel", "Docker", "Git", "MySQL", "JavaScript", "PHP"],
  },
];

const education = {
  degree: "Bachelor of Science in Computer Science",
  university: "University of Cebu Main Campus",
  location: "Cebu City",
  date: "2021 – 2025",
  description: "Focused on software engineering principles, web development, database design, and algorithms. Completed capstone projects involving full-stack development and agile methodologies.",
  courses: [
    "Software Engineering",
    "Web Technologies",
    "Database Systems", 
    "Data Structures & Algorithms",
    "Mobile Application Development",
    "Network Security"
  ]
};

function Experience() {
  const [activeTab, setActiveTab] = useState("experience");
  const [screenSize, setScreenSize] = useState("desktop");

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive values
  const getResponsiveValues = () => {
    switch (screenSize) {
      case "xl-desktop":
        return {
          containerPadding: "clamp(4rem, 8vw, 8rem) clamp(2rem, 10vw, 12rem)",
          titleFontSize: "4.5rem",
          subtitleFontSize: "1.4rem",
          tabPadding: "1rem 2.5rem",
          tabFontSize: "1.2rem",
          cardPadding: "3rem",
          cardGap: "3rem",
          roleFontSize: "2.2rem",
          companyFontSize: "1.5rem",
          dateFontSize: "1rem",
          pointFontSize: "1.15rem",
          pointLineHeight: 1.9,
          maxWidth: "1400px",
          timelineDotSize: "24px",
          techStackFontSize: "0.95rem",
        };
      case "large-desktop":
        return {
          containerPadding: "clamp(4rem, 6vw, 6rem) clamp(2rem, 8vw, 8rem)",
          titleFontSize: "4rem",
          subtitleFontSize: "1.3rem",
          tabPadding: "0.9rem 2.2rem",
          tabFontSize: "1.15rem",
          cardPadding: "2.8rem",
          cardGap: "2.8rem",
          roleFontSize: "2rem",
          companyFontSize: "1.4rem",
          dateFontSize: "0.95rem",
          pointFontSize: "1.1rem",
          pointLineHeight: 1.8,
          maxWidth: "1300px",
          timelineDotSize: "22px",
          techStackFontSize: "0.9rem",
        };
      case "desktop":
        return {
          containerPadding: "clamp(3rem, 5vw, 6rem) clamp(1.5rem, 6vw, 6rem)",
          titleFontSize: "3.5rem",
          subtitleFontSize: "1.2rem",
          tabPadding: "0.8rem 2rem",
          tabFontSize: "1.1rem",
          cardPadding: "2.5rem",
          cardGap: "2.5rem",
          roleFontSize: "1.8rem",
          companyFontSize: "1.3rem",
          dateFontSize: "0.9rem",
          pointFontSize: "1.05rem",
          pointLineHeight: 1.7,
          maxWidth: "1200px",
          timelineDotSize: "20px",
          techStackFontSize: "0.85rem",
        };
      case "tablet":
        return {
          containerPadding: "clamp(3rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)",
          titleFontSize: "3rem",
          subtitleFontSize: "1.1rem",
          tabPadding: "0.7rem 1.8rem",
          tabFontSize: "1rem",
          cardPadding: "2.2rem",
          cardGap: "2.2rem",
          roleFontSize: "1.6rem",
          companyFontSize: "1.2rem",
          dateFontSize: "0.85rem",
          pointFontSize: "1rem",
          pointLineHeight: 1.6,
          maxWidth: "100%",
          timelineDotSize: "18px",
          techStackFontSize: "0.8rem",
        };
      default: // mobile
        return {
          containerPadding: "3rem 1.5rem",
          titleFontSize: "2.5rem",
          subtitleFontSize: "1rem",
          tabPadding: "0.6rem 1.5rem",
          tabFontSize: "0.95rem",
          cardPadding: "2rem",
          cardGap: "2rem",
          roleFontSize: "1.4rem",
          companyFontSize: "1.1rem",
          dateFontSize: "0.8rem",
          pointFontSize: "0.95rem",
          pointLineHeight: 1.6,
          maxWidth: "100%",
          timelineDotSize: "16px",
          techStackFontSize: "0.75rem",
        };
    }
  };

  const responsive = getResponsiveValues();

  return (
    <section
      id="experience"
      style={{
        minHeight: "100vh",
        padding: responsive.containerPadding,
        width: "100%",
        maxWidth: "none",
        position: "relative",
      }}
    >
      {/* Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          position: "absolute",
          width: screenSize === "xl-desktop" ? "500px" : "400px",
          height: screenSize === "xl-desktop" ? "500px" : "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 70%)",
          top: "10%",
          left: screenSize === "xl-desktop" ? "5%" : "-5%",
          zIndex: -1,
        }}
      />

      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <motion.h2
          style={{
            fontSize: responsive.titleFontSize,
            marginBottom: "1rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          <span style={{ color: "#38bdf8" }}>Background & Experience</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ 
              width: screenSize === "xl-desktop" ? "150px" : 
                     screenSize === "large-desktop" ? "130px" : "100px" 
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              height: "4px",
              background: "linear-gradient(90deg, #38bdf8, transparent)",
              borderRadius: "2px",
              margin: "0.5rem auto 0",
            }}
          />
        </motion.h2>
        <p style={{ 
          opacity: 0.8, 
          fontSize: responsive.subtitleFontSize,
          marginTop: "1rem",
        }}>
          My professional journey and academic foundation
        </p>
      </motion.div>

      {/* TABS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: screenSize === "xl-desktop" ? "3rem" : "2rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}
      >
        {["experience", "education"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: responsive.tabPadding,
              fontSize: responsive.tabFontSize,
              background: activeTab === tab 
                ? "rgba(56, 189, 248, 0.15)" 
                : "transparent",
              color: activeTab === tab ? "#38bdf8" : "rgba(255, 255, 255, 0.7)",
              border: activeTab === tab 
                ? "2px solid rgba(56, 189, 248, 0.5)" 
                : "2px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "capitalize",
            }}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* EXPERIENCE SECTION */}
      {activeTab === "experience" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            display: "grid", 
            gap: responsive.cardGap,
            maxWidth: responsive.maxWidth,
            margin: "0 auto",
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 50px rgba(56, 189, 248, 0.12)"
              }}
              style={{
                background: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(56, 189, 248, 0.15)",
                padding: responsive.cardPadding,
                borderRadius: "18px",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Timeline dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: "absolute",
                  left: "-12px",
                  top: "3rem",
                  width: responsive.timelineDotSize,
                  height: responsive.timelineDotSize,
                  borderRadius: "50%",
                  background: "#38bdf8",
                  border: "4px solid rgba(15, 23, 42, 0.9)",
                }}
              />

              {/* Content */}
              <div style={{ marginLeft: screenSize === "mobile" ? "0.5rem" : "1.5rem" }}>
                <div style={{ 
                  display: "flex", 
                  flexWrap: "wrap",
                  gap: "1rem",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem"
                }}>
                  <div style={{ flex: 1 }}>
                    <motion.h3 
                      style={{ 
                        fontSize: responsive.roleFontSize, 
                        marginBottom: "0.3rem",
                        lineHeight: 1.2,
                      }}
                      whileHover={{ color: "#38bdf8" }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <p style={{ 
                      color: "#38bdf8", 
                      fontSize: responsive.companyFontSize,
                      fontWeight: 500,
                      marginBottom: "0.3rem",
                    }}>
                      {exp.company}
                    </p>
                  </div>
                  
                  <motion.p 
                    style={{ 
                      padding: "0.4rem 1.2rem",
                      background: "rgba(56, 189, 248, 0.1)",
                      borderRadius: "20px",
                      fontSize: responsive.dateFontSize,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      alignSelf: "flex-start",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.date}
                  </motion.p>
                </div>

                {/* Tech Stack */}
                {exp.stack && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ 
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: "0.5rem",
                      marginBottom: "0.5rem"
                    }}>
                      {exp.stack.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                          style={{
                            padding: "0.3rem 0.8rem",
                            background: "rgba(56, 189, 248, 0.1)",
                            borderRadius: "15px",
                            fontSize: responsive.techStackFontSize,
                            fontWeight: 500,
                            color: "#7dd3fc",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                <ul style={{ 
                  paddingLeft: screenSize === "mobile" ? "1rem" : "1.2rem", 
                  lineHeight: responsive.pointLineHeight,
                  fontSize: responsive.pointFontSize,
                }}>
                  {exp.points.map((point, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      style={{ 
                        marginBottom: screenSize === "xl-desktop" ? "0.8rem" : "0.7rem",
                        position: "relative",
                        listStyle: "none",
                      }}
                    >
                      <span style={{ 
                        position: "absolute", 
                        left: screenSize === "mobile" ? "-1rem" : "-1.2rem",
                        color: "#38bdf8",
                        fontSize: screenSize === "xl-desktop" ? "1.2rem" : "1rem",
                      }}>
                        ▸
                      </span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* EDUCATION SECTION */}
      {activeTab === "education" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: screenSize === "xl-desktop" ? "900px" : "800px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <motion.div
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 50px rgba(56, 189, 248, 0.1)"
            }}
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              padding: screenSize === "xl-desktop" ? "3.5rem" : "3rem",
              borderRadius: "18px",
              backdropFilter: "blur(10px)",
              width: "100%",
              transition: "all 0.3s ease",
            }}
          >
            {/* Degree & University */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ textAlign: "center", marginBottom: "2.5rem" }}
            >
              <motion.h3 
                style={{ 
                  fontSize: screenSize === "xl-desktop" ? "2.2rem" : "2rem", 
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
                whileHover={{ color: "#38bdf8" }}
                transition={{ duration: 0.3 }}
              >
                {education.degree}
              </motion.h3>
              <p style={{ 
                color: "#38bdf8", 
                fontSize: screenSize === "xl-desktop" ? "1.4rem" : "1.3rem",
                fontWeight: 500,
                marginBottom: "0.5rem"
              }}>
                {education.university}
              </p>
              <div style={{ 
                display: "flex", 
                justifyContent: "center",
                gap: screenSize === "xl-desktop" ? "3rem" : "2rem",
                flexWrap: "wrap",
                marginTop: "1.5rem"
              }}>
                <motion.p 
                  style={{ 
                    padding: "0.5rem 1.5rem",
                    background: "rgba(56, 189, 248, 0.1)",
                    borderRadius: "24px",
                    fontSize: screenSize === "xl-desktop" ? "1rem" : "0.95rem",
                    fontWeight: 500,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {education.date}
                </motion.p>
                <motion.p 
                  style={{ 
                    padding: "0.5rem 1.5rem",
                    background: "rgba(56, 189, 248, 0.1)",
                    borderRadius: "24px",
                    fontSize: screenSize === "xl-desktop" ? "1rem" : "0.95rem",
                    fontWeight: 500,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {education.location}
                </motion.p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                background: "rgba(56, 189, 248, 0.03)",
                borderLeft: "4px solid #38bdf8",
                padding: screenSize === "xl-desktop" ? "2rem" : "1.5rem",
                borderRadius: "10px",
                marginBottom: "2.5rem",
              }}
            >
              <p style={{ 
                fontSize: screenSize === "xl-desktop" ? "1.15rem" : "1.1rem", 
                lineHeight: 1.7,
                opacity: 0.9 
              }}>
                {education.description}
              </p>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 style={{ 
                fontSize: screenSize === "xl-desktop" ? "1.4rem" : "1.3rem", 
                marginBottom: "1.5rem",
                textAlign: "center",
                color: "#38bdf8"
              }}>
                Key Courses & Skills
              </h4>
              <div style={{
                display: "grid",
                gridTemplateColumns: screenSize === "xl-desktop" ? "repeat(3, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
                gap: screenSize === "xl-desktop" ? "1.5rem" : "1rem",
              }}>
                {education.courses.map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      transform: "translateY(-3px)"
                    }}
                    style={{
                      padding: screenSize === "xl-desktop" ? "1rem" : "0.8rem 1rem",
                      background: "rgba(56, 189, 248, 0.05)",
                      borderRadius: "12px",
                      textAlign: "center",
                      fontSize: screenSize === "xl-desktop" ? "1.05rem" : "0.95rem",
                      fontWeight: 500,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Experience;