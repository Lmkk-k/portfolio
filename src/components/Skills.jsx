import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../Frontend CSS/Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    description: "Building responsive, dynamic interfaces with React, JavaScript, and modern frameworks.",
    color: "#38bdf8",
    techStack: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "SASS", "Redux", "Next.js"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    description: "Creating scalable server-side applications, REST APIs, and database architectures.",
    color: "#0ea5e9",
    techStack: ["Node.js", "Express", "Laravel", "Python", "Django", "FastAPI", "REST APIs", "GraphQL"]
  },
  {
    title: "Mobile Development",
    icon: "📱",
    description: "Developing cross-platform mobile apps with React Native for iOS and Android.",
    color: "#7c3aed",
    techStack: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase", "Push Notifications"]
  },
  {
    title: "WordPress & CMS",
    icon: "🌐",
    description: "Expert in WordPress development, custom themes, plugins, and website optimization.",
    color: "#0284c7",
    techStack: ["WordPress", "WooCommerce", "PHP", "Custom Themes", "Plugin Dev", "SEO", "Elementor"]
  },
  {
    title: "Database & DevOps",
    icon: "🗃️",
    description: "Managing databases, containerization, and implementing DevOps practices.",
    color: "#0369a1",
    techStack: ["MySQL", "PostgreSQL", "MongoDB", "Docker", "AWS", "CI/CD", "Redis", "Nginx"]
  },
  {
    title: "Technical Support",
    icon: "🔧",
    description: "Providing comprehensive technical support and troubleshooting solutions.",
    color: "#075985",
    techStack: ["Troubleshooting", "Debugging", "System Admin", "Networking", "Security", "Documentation"]
  }
];

// Split tools into two categories
const frontendTools = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" }
];

const backendTools = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
];

function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [frontendPosition, setFrontendPosition] = useState(0);
  const [backendPosition, setBackendPosition] = useState(0);

  // Frontend slider moves left to right (normal)
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontendPosition(prev => {
        const newPosition = prev - 0.3;
        return newPosition < -50 ? 0 : newPosition;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Backend slider moves right to left (vice versa)
  useEffect(() => {
    const interval = setInterval(() => {
      setBackendPosition(prev => {
        const newPosition = prev + 0.3; // Positive for right-to-left
        return newPosition > 0 ? -50 : newPosition;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
          <span className="skills-title-text">Expertise & Tools</span>
          <motion.div
            className="skills-title-underline"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.h2>
        <p className="skills-subtitle">
          Full-stack development expertise with modern technologies
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

            {/* Short Description */}
            <p className="skill-description">
              {category.description}
            </p>

            {/* TECH STACK SECTION */}
            <div className="skill-tech-stack">
              {category.techStack.map((tech, index) => (
                <span key={index} className="tech-stack-item">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* TWO SLIDERS SECTION */}
      <div className="dual-sliders-container">
        
        {/* FRONTEND SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="slider-section"
        >
          <h3 className="slider-title frontend-title">
            <span className="slider-title-icon"></span> 
            Frontend
          </h3>
          
          <div className="slider-wrapper">
            <div 
              className="tools-slider"
              style={{ transform: `translateX(${frontendPosition}%)` }}
            >
              {/* First Set */}
              {frontendTools.map((tool, index) => (
                <motion.div
                  key={`frontend-${tool.name}-1`}
                  className="tool-item frontend-tool"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="tool-icon">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="tool-logo"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg`;
                        e.target.alt = `${tool.name} logo`;
                      }}
                    />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
              
              {/* Duplicate Set for Seamless Loop */}
              {frontendTools.map((tool, index) => (
                <motion.div
                  key={`frontend-${tool.name}-2`}
                  className="tool-item frontend-tool"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="tool-icon">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="tool-logo"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg`;
                        e.target.alt = `${tool.name} logo`;
                      }}
                    />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BACKEND SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="slider-section"
        >
          <h3 className="slider-title backend-title">
            <span className="slider-title-icon"></span> 
            Backend
          </h3>
          
          <div className="slider-wrapper">
            <div 
              className="tools-slider reverse-slider"
              style={{ transform: `translateX(${backendPosition}%)` }}
            >
              {/* First Set */}
              {backendTools.map((tool, index) => (
                <motion.div
                  key={`backend-${tool.name}-1`}
                  className="tool-item backend-tool"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="tool-icon">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="tool-logo"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg`;
                        e.target.alt = `${tool.name} logo`;
                      }}
                    />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
              
              {/* Duplicate Set for Seamless Loop */}
              {backendTools.map((tool, index) => (
                <motion.div
                  key={`backend-${tool.name}-2`}
                  className="tool-item backend-tool"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="tool-icon">
                    <img 
                      src={tool.icon} 
                      alt={tool.name}
                      className="tool-logo"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg`;
                        e.target.alt = `${tool.name} logo`;
                      }}
                    />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;