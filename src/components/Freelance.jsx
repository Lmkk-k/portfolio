import { motion } from "framer-motion";
import { useState } from "react";
import "../Frontend CSS/Freelance.css";

const allFreelanceProjects = [
  {
    id: 1,
    title: "E-commerce Store for Local Business",
    client: "Local Clothing Brand",
    category: "web",
    year: "2024",
    description: "Developed a fully functional e-commerce store for a local clothing brand, enabling online sales and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "PayPal API", "Tailwind CSS"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #92400e 0%, #78350f 50%, #451a03 100%)"
  },
  {
    id: 2,
    title: "Portfolio Website for Photographer",
    client: "Professional Photographer",
    category: "portfolio",
    year: "2023-2024",
    description: "Designed and developed a stunning portfolio website to showcase photography work with smooth gallery navigation.",
    technologies: ["Next.js", "TypeScript", "Cloudinary", "Nodemailer", "Framer Motion", "CSS Modules"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #431407 100%)"
  },
  {
    id: 3,
    title: "Business Website with Booking System",
    client: "Beauty Salon",
    category: "web",
    year: "2023",
    description: "Created a business website with integrated booking system, service catalog, and staff management.",
    technologies: ["React", "Laravel", "MySQL", "Twilio API", "FullCalendar", "Bootstrap"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #854d0e 0%, #a16207 50%, #422006 100%)"
  },
  {
    id: 4,
    title: "AI-Powered Chat Assistant",
    client: "Tech Startup",
    category: "ai",
    year: "2024",
    description: "Developed an AI-powered chat assistant for customer support with natural language processing.",
    technologies: ["Python", "OpenAI API", "FastAPI", "React", "WebSocket", "PostgreSQL"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #713f12 0%, #854d0e 50%, #422006 100%)"
  },
  {
    id: 5,
    title: "UI/UX Design System",
    client: "SaaS Company",
    category: "design",
    year: "2023",
    description: "Created a comprehensive design system with reusable components and design guidelines.",
    technologies: ["Figma", "Storybook", "React", "TypeScript", "CSS-in-JS", "Jest"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #451a03 100%)"
  },
  {
    id: 6,
    title: "Real Estate Property Listing Site",
    client: "Real Estate Agency",
    category: "web",
    year: "2024",
    description: "Created a property listing platform with advanced filtering and virtual tours.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Matterport API", "Redux", "Chakra UI"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #854d0e 0%, #a16207 50%, #422006 100%)"
  },
  {
    id: 7,
    title: "Discord Bot with Custom Commands",
    client: "Gaming Community",
    category: "ai",
    year: "2023",
    description: "Developed a Discord bot with custom commands, moderation tools, and game integration.",
    technologies: ["Python", "discord.py", "MongoDB", "Redis", "Docker", "AWS"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #92400e 0%, #78350f 50%, #451a03 100%)"
  },
  {
    id: 8,
    title: "Event Management Platform",
    client: "Event Planning Company",
    category: "web",
    year: "2024",
    description: "Created an event management platform with ticketing, scheduling, and attendee management.",
    technologies: ["Vue.js", "Laravel", "MySQL", "QR Code", "WebSocket", "PDF Generation"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #431407 100%)"
  },
  {
    id: 9,
    title: "Brand Identity & Logo Design",
    client: "Startup Tech Company",
    category: "design",
    year: "2023",
    description: "Designed complete brand identity including logo, color palette, and brand guidelines.",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Guidelines", "Print Design"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #854d0e 0%, #a16207 50%, #422006 100%)"
  },
  {
    id: 10,
    title: "Personal Portfolio Website",
    client: "Graphic Designer",
    category: "portfolio",
    year: "2023",
    description: "Designed and developed a personal portfolio website showcasing design projects and resume.",
    technologies: ["React", "GSAP", "Framer Motion", "Contentful", "Vercel", "CSS Grid"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #713f12 0%, #854d0e 50%, #422006 100%)"
  },
  {
    id: 11,
    title: "Automated Trading Bot",
    client: "Financial Trader",
    category: "ai",
    year: "2024",
    description: "Built an automated trading system using machine learning algorithms for market analysis.",
    technologies: ["Python", "TensorFlow", "Pandas", "Binance API", "Docker", "Redis"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #451a03 100%)"
  },
  {
    id: 12,
    title: "Mobile App for Fitness Tracking",
    client: "Fitness Startup",
    category: "mobile",
    year: "2023",
    description: "Developed a cross-platform fitness tracking app with workout plans and progress monitoring.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Push Notifications"],
    demoUrl: "https://github.com/Lmkk-k",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #431407 100%)"
  }
];

const Freelance = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "design", label: "Design" },
    { id: "portfolio", label: "Portfolio" },
    { id: "ai", label: "AI" },
    { id: "mobile", label: "Mobile" }
  ];

  const filteredProjects = allFreelanceProjects.filter(project => {
    if (selectedFilter === "all") return true;
    return project.category === selectedFilter;
  });

  const displayProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="freelance-container">
      {/* Background Element */}
      <div className="freelance-bg-element"></div>

      {/* Header Section */}
      <div className="freelance-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="freelance-title"
        >
          <span className="freelance-title-text">Freelance Projects</span>
        </motion.h1>
        <div className="freelance-title-underline"></div>
        <p className="freelance-subtitle">
          A collection of projects I've worked on for various clients across different domains
        </p>
      </div>

      {/* Filter Navigation */}
      <motion.div 
        className="filter-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-button ${selectedFilter === filter.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedFilter(filter.id);
              setVisibleProjects(6);
            }}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {displayProjects.length > 0 ? (
          displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Gradient Background */}
              <div 
                className="gradient-background"
                style={{ background: project.gradient }}
              ></div>

              {/* Hover Gradient Overlay */}
              <div className="gradient-overlay"></div>

              {/* Category Icon */}
              <div className="category-icon">
                {project.category === "web" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                )}
                {project.category === "design" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                )}
                {project.category === "portfolio" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                )}
                {project.category === "ai" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 0 1 7.38 16.75"></path>
                    <path d="M12 2a10 10 0 0 0-7.38 16.75"></path>
                    <path d="M12 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"></path>
                  </svg>
                )}
                {project.category === "mobile" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                )}
              </div>

              {/* REMOVED: Freelance Badge and Category Badge from main cards */}

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-item">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-item">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>

              <div className="view-button" onClick={(e) => {
                e.stopPropagation();
                window.open(project.demoUrl, '_blank');
              }}>
                <span>View Demo</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="no-projects">
            <h3 className="no-projects-title">No Projects Found</h3>
            <p className="no-projects-text">Try selecting a different filter category</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {hasMoreProjects && (
        <motion.div 
          className="load-more-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button className="load-more-button" onClick={handleLoadMore}>
            <span>Load More Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </button>
        </motion.div>
      )}

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleCloseModal}
        >
          <motion.div 
            className="modal-container"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={handleCloseModal}>
              ×
            </button>

            <div className="modal-content">
              {/* Modal Gradient Background */}
              <div 
                className="modal-gradient-background"
                style={{ background: selectedProject.gradient }}
              >
                <div className="modal-gradient-overlay"></div>
              </div>

              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-badges">
                  {/* KEPT: Badges still show in modal */}
                  <span className="modal-badge modal-badge-green">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Freelance Project
                  </span>
                  <span className="modal-badge modal-badge-purple">
                    {selectedProject.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="modal-grid">
                <div>
                  <h3 className="modal-section-title">Project Description</h3>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <h3 className="modal-section-title">Technologies Used</h3>
                  <div className="modal-tech-stack">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="modal-tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="modal-section-title">Project Details</h3>
                  <div className="modal-details-grid">
                    <div className="detail-item">
                      <div className="detail-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <div className="detail-label">Client</div>
                        <div className="detail-value">{selectedProject.client}</div>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <div className="detail-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </div>
                      <div>
                        <div className="detail-label">Year</div>
                        <div className="detail-value">{selectedProject.year}</div>
                      </div>
                    </div>
                  </div>

                  <button 
                    className="modal-view-button"
                    onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Live Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Freelance;