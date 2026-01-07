import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    percentage: 90,
    description: "Creating dynamic, responsive, and user-friendly interfaces using modern frontend technologies such as React, JavaScript, and TypeScript. Focused on building seamless web applications that prioritize performance, accessibility, and exceptional user experience.",
    color: "#38bdf8",
    stack: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    percentage: 85,
    description: "Building robust server-side applications, RESTful APIs, and database architectures using Node.js and Laravel. Experienced in creating scalable backend systems with proper authentication, security, and performance optimization.",
    color: "#0ea5e9",
    stack: ["Node.js", "Laravel", "PHP", "Dbeaver", "REST APIs",  "MySQL", ]
  },
  {
    title: "Mobile Development",
    icon: "📱",
    percentage: 80,
    description: "Developing cross-platform mobile applications using React Native, with experience in building responsive mobile interfaces, native module integration, and mobile-specific performance optimization.",
    color: "#7c3aed",
    stack: ["React Native", "Mobile UI/UX", "Cross-platform", "App Deployment", "Native Modules", "Mobile Testing", "App Store Guidelines"]
  },
  {
    title: "Website Builders & CMS",
    icon: "🌐",
    percentage: 92,
    description: "Expert in WordPress development including custom theme creation, plugin development, and website optimization. Skilled in using website builders and content management systems to deliver client-ready solutions.",
    color: "#0284c7",
    stack: ["WordPress", "Custom Themes", "Plugin Development", "Website Optimization", "DNS Management", "FTP/SSH", "Email Configuration"]
  },
  {
    title: "Database & DevOps",
    icon: "🗃️",
    percentage: 80,
    description: "Managing database systems and implementing DevOps practices for efficient application deployment and maintenance. Experienced in containerization, version control, and cloud services for scalable solutions.",
    color: "#0369a1",
    stack: ["MySQL", "PostgreSQL", "MongoDB", "Docker", "Git/GitHub", "AWS Basics", "Database Design", "CI/CD"]
  },
  {
    title: "Technical Support",
    icon: "🔧",
    percentage: 95,
    description: "Providing comprehensive technical support for web hosting, DNS management, email systems, and server troubleshooting. Expert in diagnosing and resolving complex technical issues efficiently.",
    color: "#075985",
    stack: ["DNS Management", "Web Hosting", "Email Systems", "Troubleshooting", "Server Diagnostics", "Security", "Performance Optimization"]
  }
];

const softSkills = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Clean Architecture", icon: "🏗️" },
  { name: "Agile/Scrum", icon: "🔄" },
  { name: "Code Optimization", icon: "⚡" },
  { name: "Cross-browser Testing", icon: "🌐" },
  { name: "API Integration", icon: "🔗" },
  { name: "Documentation", icon: "📄" },
  { name: "Team Collaboration", icon: "👥" },
];

function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
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

  // Responsive sizing calculations
  const getResponsiveValues = () => {
    switch (screenSize) {
      case "xl-desktop":
        return {
          cardPadding: "3rem",
          cardGap: "4rem",
          gridColumns: "repeat(3, 1fr)",
          cardMaxWidth: "none",
          iconSize: "70px",
          iconFontSize: "2.2rem",
          titleFontSize: "1.8rem",
          descriptionFontSize: "1.1rem",
          percentageFontSize: "1.1rem",
          stackFontSize: "0.95rem",
          containerPadding: "clamp(3rem, 8vw, 8rem) clamp(2rem, 10vw, 10rem)",
        };
      case "large-desktop":
        return {
          cardPadding: "2.5rem",
          cardGap: "3rem",
          gridColumns: "repeat(3, 1fr)",
          cardMaxWidth: "none",
          iconSize: "64px",
          iconFontSize: "2rem",
          titleFontSize: "1.6rem",
          descriptionFontSize: "1.05rem",
          percentageFontSize: "1rem",
          stackFontSize: "0.9rem",
          containerPadding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 8vw, 8rem)",
        };
      case "desktop":
        return {
          cardPadding: "2.2rem",
          cardGap: "2.5rem",
          gridColumns: "repeat(3, 1fr)",
          cardMaxWidth: "none",
          iconSize: "56px",
          iconFontSize: "1.8rem",
          titleFontSize: "1.5rem",
          descriptionFontSize: "1rem",
          percentageFontSize: "0.9rem",
          stackFontSize: "0.85rem",
          containerPadding: "clamp(3rem, 5vw, 6rem) clamp(1.5rem, 6vw, 6rem)",
        };
      case "tablet":
        return {
          cardPadding: "2rem",
          cardGap: "2rem",
          gridColumns: "repeat(2, 1fr)",
          cardMaxWidth: "none",
          iconSize: "52px",
          iconFontSize: "1.6rem",
          titleFontSize: "1.4rem",
          descriptionFontSize: "0.95rem",
          percentageFontSize: "0.85rem",
          stackFontSize: "0.8rem",
          containerPadding: "clamp(3rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)",
        };
      default: // mobile
        return {
          cardPadding: "1.8rem",
          cardGap: "1.5rem",
          gridColumns: "1fr",
          cardMaxWidth: "none",
          iconSize: "48px",
          iconFontSize: "1.5rem",
          titleFontSize: "1.3rem",
          descriptionFontSize: "0.9rem",
          percentageFontSize: "0.8rem",
          stackFontSize: "0.8rem",
          containerPadding: "3rem 1.5rem",
        };
    }
  };

  const responsive = getResponsiveValues();

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: responsive.containerPadding,
        width: "100%",
        maxWidth: "none", // Removed maxWidth constraint
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          position: "absolute",
          width: screenSize === "xl-desktop" ? "600px" : "500px",
          height: screenSize === "xl-desktop" ? "600px" : "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 70%)",
          bottom: "10%",
          right: screenSize === "xl-desktop" ? "5%" : "-10%",
          zIndex: -1,
        }}
      />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          marginBottom: screenSize === "xl-desktop" ? "6rem" : 
                       screenSize === "large-desktop" ? "5rem" : "4rem",
          maxWidth: screenSize === "xl-desktop" ? "900px" : "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <motion.h2
          style={{
            fontSize: screenSize === "xl-desktop" ? "4.5rem" : 
                     screenSize === "large-desktop" ? "4rem" : "clamp(2.5rem, 5vw, 3.5rem)",
            marginBottom: "1.5rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          <span style={{ color: "#38bdf8" }}>Technical Expertise</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ 
              width: screenSize === "xl-desktop" ? "180px" : 
                     screenSize === "large-desktop" ? "150px" : "120px" 
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
          fontSize: screenSize === "xl-desktop" ? "1.4rem" : 
                   screenSize === "large-desktop" ? "1.3rem" : "1.1rem", 
          lineHeight: 1.6,
          marginTop: "1.5rem",
        }}>
          A comprehensive overview of my technical skills across full-stack development and IT support
        </p>
      </motion.div>

      {/* SKILL CATEGORIES - Full width container */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: responsive.gridColumns,
          gap: responsive.cardGap,
          marginBottom: "4rem",
        }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: screenSize === "mobile" ? 0 : -8 }}
            onMouseEnter={() => setHoveredCategory(category.title)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              borderRadius: "22px",
              padding: responsive.cardPadding,
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
          >
            {/* Category Header */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", marginBottom: "1.8rem" }}>
              <div
                style={{
                  width: responsive.iconSize,
                  height: responsive.iconSize,
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${category.color}, rgba(56, 189, 248, 0.3))`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: responsive.iconFontSize,
                  flexShrink: 0,
                }}
              >
                {category.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 style={{ 
                    fontSize: responsive.titleFontSize, 
                    fontWeight: 600, 
                    marginBottom: "0.3rem",
                    lineHeight: 1.2 
                  }}>
                    {category.title}
                  </h3>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: screenSize === "xl-desktop" ? "0.4rem 1.2rem" : "0.3rem 0.9rem",
                      background: "rgba(56, 189, 248, 0.1)",
                      borderRadius: "24px",
                      fontSize: responsive.percentageFontSize,
                      fontWeight: 600,
                      color: category.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {category.percentage}%
                  </motion.div>
                </div>
                
                {/* Percentage Bar */}
                <div style={{ marginTop: "1.2rem" }}>
                  <div
                    style={{
                      height: screenSize === "xl-desktop" ? "10px" : 
                              screenSize === "large-desktop" ? "8px" : "6px",
                      background: "rgba(56, 189, 248, 0.1)",
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.percentage}%` }}
                      transition={{ duration: 1.2, delay: 0.5 + categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        height: "100%",
                        background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ 
              fontSize: responsive.descriptionFontSize, 
              lineHeight: 1.7, 
              opacity: 0.9, 
              marginBottom: "1.8rem",
            }}>
              {category.description}
            </p>

            {/* Tech Stack */}
            <div style={{ marginTop: "1.8rem" }}>
              <h4 style={{ 
                fontSize: responsive.stackFontSize, 
                fontWeight: 600, 
                marginBottom: "1rem", 
                opacity: 0.8 
              }}>
                Tech Stack
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {category.stack.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.15)" }}
                    style={{
                      padding: screenSize === "xl-desktop" ? "0.5rem 1rem" : 
                              screenSize === "large-desktop" ? "0.4rem 0.9rem" : "0.3rem 0.8rem",
                      background: "rgba(56, 189, 248, 0.07)",
                      borderRadius: "14px",
                      fontSize: responsive.stackFontSize,
                      fontWeight: 500,
                      color: "#7dd3fc",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SOFT SKILLS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          width: "100%",
        }}
      >
        <h3 style={{ 
          fontSize: screenSize === "xl-desktop" ? "2.2rem" : 
                   screenSize === "large-desktop" ? "2rem" : "1.8rem", 
          textAlign: "center", 
          marginBottom: "2.5rem",
          color: "#38bdf8"
        }}>
          Additional Skills & Capabilities
        </h3>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: screenSize === "xl-desktop" ? "repeat(8, 1fr)" :
                               screenSize === "large-desktop" ? "repeat(4, 1fr)" : 
                               "repeat(auto-fit, minmax(180px, 1fr))",
            gap: screenSize === "xl-desktop" ? "2rem" : 
                 screenSize === "large-desktop" ? "1.5rem" : "1rem",
            marginBottom: "3rem",
          }}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.1)" }}
              style={{
                background: "rgba(56, 189, 248, 0.05)",
                border: "1px solid rgba(56, 189, 248, 0.1)",
                borderRadius: "16px",
                padding: screenSize === "xl-desktop" ? "1.8rem 1.2rem" : 
                        screenSize === "large-desktop" ? "1.5rem 1rem" : "1.2rem 0.8rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                transition: "all 0.3s ease",
                textAlign: "center",
              }}
            >
              <span style={{ 
                fontSize: screenSize === "xl-desktop" ? "2.5rem" : 
                         screenSize === "large-desktop" ? "2.2rem" : "1.8rem" 
              }}>
                {skill.icon}
              </span>
              <span style={{ 
                fontWeight: 500, 
                fontSize: screenSize === "xl-desktop" ? "1.2rem" : 
                         screenSize === "large-desktop" ? "1.1rem" : "0.9rem" 
              }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CONTINUOUS LEARNING */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          padding: screenSize === "xl-desktop" ? "3rem" : 
                   screenSize === "large-desktop" ? "2.5rem" : "2rem",
          background: "rgba(56, 189, 248, 0.03)",
          borderLeft: "4px solid #38bdf8",
          borderRadius: "16px",
          textAlign: "center",
          maxWidth: screenSize === "xl-desktop" ? "1000px" : "900px",
          margin: "0 auto",
        }}
      >
        <p style={{ 
          fontSize: screenSize === "xl-desktop" ? "1.4rem" : 
                   screenSize === "large-desktop" ? "1.3rem" : "1.1rem", 
          opacity: 0.9, 
          lineHeight: 1.7 
        }}>
          Continuously expanding my skill set. Currently exploring{" "}
          <span style={{ color: "#38bdf8", fontWeight: 500 }}>
            Next.js, GraphQL, advanced cloud infrastructure, and Flutter
          </span> 
          {" "}to build more scalable and performant applications across all platforms.
        </p>
      </motion.div>
    </section>
  );
}

export default Skills;