import { motion } from "framer-motion";
import { useState } from "react";
import "../Frontend CSS/Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    description: "Creating dynamic, responsive, and user-friendly interfaces using modern frontend technologies such as React, JavaScript, and TypeScript. Focused on building seamless web applications that prioritize performance, accessibility, and exceptional user experience.",
    color: "#38bdf8",
    stack: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    description: "Building robust server-side applications, RESTful APIs, and database architectures using Node.js and Laravel. Experienced in creating scalable backend systems with proper authentication, security, and performance optimization.",
    color: "#0ea5e9",
    stack: ["Node.js", "Laravel", "PHP", "Dbeaver", "REST APIs", "MySQL"]
  },
  {
    title: "Mobile Development",
    icon: "📱",
    description: "Developing cross-platform mobile applications using React Native, with experience in building responsive mobile interfaces, native module integration, and mobile-specific performance optimization.",
    color: "#7c3aed",
    stack: ["React Native", "Mobile UI/UX", "Cross-platform", "App Deployment", "Native Modules", "Mobile Testing", "App Store Guidelines"]
  },
  {
    title: "Website Builders & CMS",
    icon: "🌐",
    description: "Expert in WordPress development including custom theme creation, plugin development, and website optimization. Skilled in using website builders and content management systems to deliver client-ready solutions.",
    color: "#0284c7",
    stack: ["WordPress", "Custom Themes", "Plugin Development", "Website Optimization", "DNS Management", "FTP/SSH", "Email Configuration"]
  },
  {
    title: "Database & DevOps",
    icon: "🗃️",
    description: "Managing database systems and implementing DevOps practices for efficient application deployment and maintenance. Experienced in containerization, version control, and cloud services for scalable solutions.",
    color: "#0369a1",
    stack: ["MySQL", "PostgreSQL", "MongoDB", "Docker", "Git/GitHub", "AWS Basics", "Database Design", "CI/CD"]
  },
  {
    title: "Technical Support",
    icon: "🔧",
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

  return (
    <section id="skills" className="skills-container">
      {/* Background Elements */}
      <motion.div
        className="skills-bg-element"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="skills-header"
      >
        <motion.h2 className="skills-title">
          <span className="skills-title-text">Technical Expertise</span>
          <motion.div
            className="skills-title-underline"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.h2>
        <p className="skills-subtitle">
          A comprehensive overview of my technical skills across full-stack development and IT support
        </p>
      </motion.div>

      {/* SKILL CATEGORIES */}
      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onMouseEnter={() => setHoveredCategory(category.title)}
            onMouseLeave={() => setHoveredCategory(null)}
            className="skill-card"
            style={{
              '--skill-color': category.color,
            }}
          >
            {/* Category Header */}
            <div className="skill-category-header">
              <div 
                className="skill-icon-container"
                style={{
                  background: `linear-gradient(135deg, ${category.color}, rgba(56, 189, 248, 0.3))`,
                }}
              >
                {category.icon}
              </div>
              <div className="skill-header-content">
                <h3 className="skill-title">{category.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="skill-description">
              {category.description}
            </p>

            {/* Tech Stack */}
            <div className="skill-tech-stack">
              <h4 className="skill-stack-title">Tech Stack</h4>
              <div className="skill-stack-list">
                {category.stack.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="skill-stack-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.15)" }}
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
        className="soft-skills-container"
      >
        <h3 className="soft-skills-title">
          Additional Skills & Capabilities
        </h3>
        
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="soft-skill-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.1)" }}
            >
              <span className="soft-skill-icon">{skill.icon}</span>
              <span className="soft-skill-name">{skill.name}</span>
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
        className="learning-container"
      >
        <p className="learning-text">
          Continuously expanding my skill set. Currently exploring{" "}
          <span className="learning-highlight">
            Next.js, GraphQL, advanced cloud infrastructure, and Flutter
          </span> 
          {" "}to build more scalable and performant applications across all platforms.
        </p>
      </motion.div>
    </section>
  );
}

export default Skills;