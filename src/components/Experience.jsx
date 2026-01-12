import { motion } from "framer-motion";
import { useState } from "react";
import "../Frontend CSS/Experience.css";

const experiences = [
  {
    role: "Technical Specialist",
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
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2023 – Present",
    points: [
      "Developed and deployed responsive web applications for personal clients and small projects using modern web technologies",
      "Designed and built personal and professional portfolio websites to showcase projects, technical skills, and real-world experience",
      "Implemented frontend interfaces using React and Tailwind CSS with a focus on usability and clean UI",
      "Provided ongoing maintenance, updates, and technical support",
      "Collaborated with clients to translate requirements into functional web applications",
      "Built full-stack applications using modern JavaScript frameworks",
    ],
    stack: ["React", "Laravel", "PHP", "JavaScript", "Figma", "MySQL", "CSS", "GIT", "HTML", "REST APIs"],
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

  return (
    <section id="experience" className="experience-container">
      {/* Background Elements */}
      <motion.div
        className="experience-bg-element"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="experience-title-container"
      >
        <motion.h2 className="experience-title">
          <span className="experience-title-text">Background & Experience</span>
          <motion.div
            className="experience-title-underline"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.h2>
        <p className="experience-subtitle">
          My professional journey and academic foundation
        </p>
      </motion.div>

      {/* TABS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="experience-tabs-container"
      >
        {["experience", "education"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`experience-tab ${activeTab === tab ? 'experience-tab-active' : 'experience-tab-inactive'}`}
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
          className="experience-grid"
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
              className="experience-card"
            >
              {/* Timeline dot */}
              <motion.div
                className="timeline-dot"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Content */}
              <div className="experience-card-content">
                <div className="experience-card-header">
                  <div className="experience-role-container">
                    <motion.h3 
                      className="experience-role"
                      whileHover={{ color: "#38bdf8" }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <p className="experience-company">
                      {exp.company}
                    </p>
                  </div>
                  
                  <motion.p 
                    className="experience-date"
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
                    className="tech-stack-container"
                  >
                    <div className="tech-stack-list">
                      {exp.stack.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="tech-stack-item"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                <ul className="experience-points-list">
                  {exp.points.map((point, i) => (
                    <motion.li 
                      key={i} 
                      className="experience-point"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="experience-point-bullet">▸</span>
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
          className="education-container"
        >
          <motion.div
            className="education-card"
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 50px rgba(56, 189, 248, 0.1)"
            }}
          >
            {/* Degree & University */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="education-header"
            >
              <motion.h3 
                className="education-degree"
                whileHover={{ color: "#38bdf8" }}
                transition={{ duration: 0.3 }}
              >
                {education.degree}
              </motion.h3>
              <p className="education-university">
                {education.university}
              </p>
              <div className="education-meta">
                <motion.p 
                  className="education-meta-item"
                  whileHover={{ scale: 1.05 }}
                >
                  {education.date}
                </motion.p>
                <motion.p 
                  className="education-meta-item"
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
              className="education-description"
            >
              <p className="education-description-text">
                {education.description}
              </p>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="education-courses-title">
                Key Courses & Skills
              </h4>
              <div className="education-courses-grid">
                {education.courses.map((course, i) => (
                  <motion.div
                    key={i}
                    className="education-course-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      transform: "translateY(-3px)"
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