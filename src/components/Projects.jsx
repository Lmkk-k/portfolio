import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Hotel Management System",
    description: "Complete hotel management solution with room booking, guest management, billing, and admin dashboard.",
    longDescription: "A comprehensive hotel management system built using ASP.NET Core MVC architecture. The system handles room reservations, guest check-in/check-out, billing, housekeeping management, and provides real-time analytics for hotel administrators. Features role-based access control for staff and management.",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "Razor Pages", "Bootstrap", "JavaScript", "jQuery"],
    features: [
      "Room booking and reservation management",
      "Guest check-in/check-out automation",
      "Billing and invoice generation",
      "Housekeeping scheduling and tracking",
      "Staff management with role-based permissions",
      "Real-time room availability dashboard",
      "Financial reporting and analytics",
      "Email notifications for bookings"
    ],
    demoUrl: "https://demo-hotel-management.example.com",
    githubUrl: "https://github.com/yourusername/hotel-management",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    status: "Completed",
    date: "February 2025",
    type: "web"
  },
  {
    id: 2,
    title: "Gamified Traffic Education App (Thesis)",
    description: "Educational mobile game teaching traffic rules and jeepney routes in Cebu City through interactive gameplay.",
    longDescription: "My undergraduate thesis project: A gamified mobile application designed to educate users about traffic rules and jeepney routes in Cebu City. The app combines interactive quizzes, mini-games, and real-world traffic simulations to make learning engaging. Features map-based logic inspired by GIS concepts, 3D vehicle models, and progressive difficulty levels to enhance user learning experience.",
    technologies: ["Godot Engine", "GDScript", "Blender", "Android SDK", "GIS Concepts", "Game Design"],
    features: [
      "Interactive traffic rule quizzes with instant feedback",
      "Mini-games simulating real-world traffic scenarios",
      "Map-based navigation showing jeepney routes in Cebu City",
      "Progressive difficulty levels for different age groups",
      "3D vehicle models created in Blender",
      "Score tracking and achievement system",
      "Educational content based on actual traffic regulations",
      "Optimized for Android mobile devices"
    ],
    demoUrl: "https://demo-traffic-game.example.com",
    githubUrl: "https://github.com/yourusername/traffic-education-game",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    status: "Completed",
    date: "May 2025",
    type: "mobile"
  },
  {
    id: 3,
    title: "Pet Services Website",
    description: "A full-stack pet services platform with online booking, inquiry system, and appointment management.",
    longDescription: "A comprehensive web application for pet service providers and pet owners. Features include user registration, service booking, appointment scheduling, payment integration, and a dashboard for service providers to manage their bookings and services.",
    technologies: ["React", "Laravel", "MySQL", "Docker", "REST API"],
    features: [
      "Online booking and appointment scheduling",
      "User authentication and authorization",
      "Service provider dashboard",
      "Real-time notifications",
      "Payment gateway integration",
      "Admin panel for management"
    ],
    demoUrl: "https://demo-petservices.example.com",
    githubUrl: "https://github.com/yourusername/pet-services",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop",
    status: "Completed",
    date: "December 2024",
    type: "web"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with shopping cart, user profiles, and secure payment processing.",
    longDescription: "A fully-featured e-commerce platform built with modern web technologies. Includes product catalog, shopping cart, user authentication, order management, and payment processing. Designed with a focus on user experience and performance optimization.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    features: [
      "Product catalog with filtering and search",
      "Shopping cart and checkout process",
      "User profiles and order history",
      "Payment processing with Stripe",
      "Admin dashboard for inventory",
      "Responsive design for all devices"
    ],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    status: "Completed",
    date: "January 2025",
    type: "web"
  },
  {
    id: 5,
    title: "Task Management Dashboard",
    description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
    longDescription: "A productivity application designed for teams to manage projects and tasks efficiently. Features include task assignment, deadline tracking, team collaboration, file sharing, and real-time updates using WebSockets.",
    technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Real-time task updates with WebSockets",
      "Team collaboration and messaging",
      "File upload and sharing",
      "Progress tracking and analytics",
      "Drag-and-drop task management",
      "Calendar integration"
    ],
    demoUrl: "https://demo-taskmanager.example.com",
    githubUrl: "https://github.com/yourusername/task-dashboard",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
    status: "Completed",
    date: "November 2024",
    type: "web"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based forecasts, historical data, and interactive maps.",
    longDescription: "A weather application that provides accurate forecasts using multiple weather APIs. Features include location detection, 7-day forecasts, historical weather data, interactive weather maps, and severe weather alerts.",
    technologies: ["React", "OpenWeather API", "Leaflet.js", "Chart.js", "Geolocation API"],
    features: [
      "Real-time weather data",
      "7-day forecast with charts",
      "Interactive weather maps",
      "Location-based forecasts",
      "Severe weather alerts",
      "Favorite locations"
    ],
    demoUrl: "https://demo-weather.example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
    status: "Completed",
    date: "October 2024",
    type: "web"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          containerPadding: "clamp(3rem, 8vw, 8rem) clamp(2rem, 10vw, 10rem)",
          gridColumns: "repeat(3, 1fr)",
          cardGap: "3rem",
          cardHeight: "500px",
          imageHeight: "220px",
          cardPadding: "2rem",
          titleFontSize: "1.6rem",
          descFontSize: "1rem",
          techFontSize: "0.85rem",
          modalMaxWidth: "1300px",
          modalPadding: "4rem",
          modalGrid: "2fr 1fr",
          modalImageHeight: "350px",
          modalTitleSize: "3rem",
          modalContentFont: "1.2rem"
        };
      case "large-desktop":
        return {
          containerPadding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 8vw, 8rem)",
          gridColumns: "repeat(3, 1fr)",
          cardGap: "2.5rem",
          cardHeight: "480px",
          imageHeight: "200px",
          cardPadding: "1.8rem",
          titleFontSize: "1.5rem",
          descFontSize: "0.95rem",
          techFontSize: "0.8rem",
          modalMaxWidth: "1200px",
          modalPadding: "3.5rem",
          modalGrid: "2fr 1fr",
          modalImageHeight: "320px",
          modalTitleSize: "2.8rem",
          modalContentFont: "1.1rem"
        };
      case "desktop":
        return {
          containerPadding: "clamp(3rem, 5vw, 6rem) clamp(1.5rem, 6vw, 6rem)",
          gridColumns: "repeat(3, 1fr)",
          cardGap: "2rem",
          cardHeight: "460px",
          imageHeight: "180px",
          cardPadding: "1.6rem",
          titleFontSize: "1.4rem",
          descFontSize: "0.9rem",
          techFontSize: "0.75rem",
          modalMaxWidth: "1100px",
          modalPadding: "3rem",
          modalGrid: "2fr 1fr",
          modalImageHeight: "300px",
          modalTitleSize: "2.5rem",
          modalContentFont: "1.1rem"
        };
      case "tablet":
        return {
          containerPadding: "clamp(3rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)",
          gridColumns: "repeat(2, 1fr)",
          cardGap: "1.8rem",
          cardHeight: "440px",
          imageHeight: "170px",
          cardPadding: "1.5rem",
          titleFontSize: "1.3rem",
          descFontSize: "0.85rem",
          techFontSize: "0.7rem",
          modalMaxWidth: "95%",
          modalPadding: "2.5rem",
          modalGrid: "1fr",
          modalImageHeight: "250px",
          modalTitleSize: "2.2rem",
          modalContentFont: "1rem"
        };
      default: // mobile
        return {
          containerPadding: "3rem 1.5rem",
          gridColumns: "1fr",
          cardGap: "1.5rem",
          cardHeight: "auto",
          imageHeight: "160px",
          cardPadding: "1.3rem",
          titleFontSize: "1.2rem",
          descFontSize: "0.8rem",
          techFontSize: "0.7rem",
          modalMaxWidth: "95%",
          modalPadding: "1.5rem",
          modalGrid: "1fr",
          modalImageHeight: "200px",
          modalTitleSize: "1.8rem",
          modalContentFont: "0.95rem"
        };
    }
  };

  const responsive = getResponsiveValues();

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Modal - Fully Responsive */}
      {isModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: screenSize === "mobile" ? "0.5rem" : "1rem",
            backdropFilter: "blur(10px)",
          }}
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              borderRadius: "20px",
              width: "95%",
              maxWidth: responsive.modalMaxWidth,
              maxHeight: "90vh",
              overflow: "auto",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              backdropFilter: "blur(20px)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: screenSize === "mobile" ? "0.8rem" : "1.5rem",
                right: screenSize === "mobile" ? "0.8rem" : "1.5rem",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                width: screenSize === "mobile" ? "35px" : "40px",
                height: screenSize === "mobile" ? "35px" : "40px",
                borderRadius: "50%",
                fontSize: screenSize === "mobile" ? "1rem" : "1.2rem",
                cursor: "pointer",
                zIndex: 1001,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>

            {/* Modal Content */}
            <div style={{ padding: responsive.modalPadding }}>
              {/* Project Image */}
              <div
                style={{
                  width: "100%",
                  height: responsive.modalImageHeight,
                  borderRadius: "12px",
                  background: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url(${selectedProject.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginBottom: screenSize === "mobile" ? "1.5rem" : "2rem",
                  position: "relative",
                }}
              >
                <div style={{
                  position: "absolute",
                  bottom: screenSize === "mobile" ? "1rem" : "1.5rem",
                  left: screenSize === "mobile" ? "1rem" : "1.5rem",
                  right: screenSize === "mobile" ? "1rem" : "1.5rem",
                }}>
                  <h3 style={{ 
                    fontSize: responsive.modalTitleSize, 
                    marginBottom: screenSize === "mobile" ? "0.3rem" : "0.5rem",
                    lineHeight: 1.2 
                  }}>
                    {selectedProject.title}
                    {selectedProject.id === 2 && (
                      <span style={{
                        marginLeft: "0.8rem",
                        fontSize: screenSize === "mobile" ? "0.8rem" : "1rem",
                        background: "rgba(139, 92, 246, 0.2)",
                        color: "#a78bfa",
                        padding: screenSize === "mobile" ? "0.1rem 0.6rem" : "0.2rem 0.8rem",
                        borderRadius: "12px",
                        fontWeight: 500,
                        display: screenSize === "mobile" ? "block" : "inline-block",
                        marginTop: screenSize === "mobile" ? "0.5rem" : "0",
                      }}>
                        Thesis Project
                      </span>
                    )}
                  </h3>
                  <div style={{ 
                    display: "flex", 
                    gap: screenSize === "mobile" ? "0.5rem" : "1rem", 
                    flexWrap: "wrap",
                    marginTop: screenSize === "mobile" ? "0.5rem" : "0"
                  }}>
                    <span style={{
                      padding: screenSize === "mobile" ? "0.2rem 0.6rem" : "0.3rem 0.8rem",
                      background: "rgba(56, 189, 248, 0.1)",
                      borderRadius: "20px",
                      fontSize: screenSize === "mobile" ? "0.75rem" : "0.9rem",
                      color: "#38bdf8",
                    }}>
                      {selectedProject.status}
                    </span>
                    <span style={{
                      padding: screenSize === "mobile" ? "0.2rem 0.6rem" : "0.3rem 0.8rem",
                      background: "rgba(56, 189, 248, 0.1)",
                      borderRadius: "20px",
                      fontSize: screenSize === "mobile" ? "0.75rem" : "0.9rem",
                      color: "#7dd3fc",
                    }}>
                      {selectedProject.date}
                    </span>
                    <span style={{
                      padding: screenSize === "mobile" ? "0.2rem 0.6rem" : "0.3rem 0.8rem",
                      background: selectedProject.type === "mobile" 
                        ? "rgba(139, 92, 246, 0.1)" 
                        : "rgba(56, 189, 248, 0.1)",
                      borderRadius: "20px",
                      fontSize: screenSize === "mobile" ? "0.75rem" : "0.9rem",
                      color: selectedProject.type === "mobile" 
                        ? "#a78bfa" 
                        : "#38bdf8",
                      border: selectedProject.type === "mobile" 
                        ? "1px solid rgba(139, 92, 246, 0.3)" 
                        : "1px solid rgba(56, 189, 248, 0.3)",
                    }}>
                      {selectedProject.type === "mobile" ? "📱 Mobile App" : "🌐 Web Application"}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: responsive.modalGrid, 
                gap: screenSize === "mobile" ? "2rem" : "3rem" 
              }}>
                {/* Left Column - Description & Features */}
                <div>
                  <h4 style={{ 
                    fontSize: screenSize === "mobile" ? "1.3rem" : "1.5rem", 
                    marginBottom: screenSize === "mobile" ? "0.8rem" : "1rem", 
                    color: "#38bdf8" 
                  }}>
                    Project Overview
                  </h4>
                  <p style={{ 
                    lineHeight: 1.7, 
                    marginBottom: screenSize === "mobile" ? "1.5rem" : "2rem", 
                    fontSize: responsive.modalContentFont 
                  }}>
                    {selectedProject.longDescription}
                  </p>

                  {/* Thesis-specific content */}
                  {selectedProject.id === 2 && (
                    <div style={{
                      background: "rgba(139, 92, 246, 0.05)",
                      borderLeft: "3px solid #8b5cf6",
                      padding: screenSize === "mobile" ? "1rem" : "1.5rem",
                      borderRadius: "8px",
                      marginBottom: screenSize === "mobile" ? "1.5rem" : "2rem",
                    }}>
                      <h5 style={{ 
                        fontSize: screenSize === "mobile" ? "1.1rem" : "1.2rem", 
                        marginBottom: screenSize === "mobile" ? "0.5rem" : "0.8rem", 
                        color: "#a78bfa" 
                      }}>
                        Academic Significance
                      </h5>
                      <p style={{ 
                        lineHeight: 1.6, 
                        fontSize: screenSize === "mobile" ? "0.9rem" : "1rem", 
                        opacity: 0.9 
                      }}>
                        This project was developed as my undergraduate thesis in Computer Science. It addresses the need for 
                        innovative educational tools in traffic safety, combining game development with practical educational 
                        content. The research contributed to understanding how gamification can enhance learning retention 
                        in traffic education.
                      </p>
                    </div>
                  )}

                  <h4 style={{ 
                    fontSize: screenSize === "mobile" ? "1.3rem" : "1.5rem", 
                    marginBottom: screenSize === "mobile" ? "0.8rem" : "1rem", 
                    color: "#38bdf8" 
                  }}>
                    Key Features
                  </h4>
                  <ul style={{ 
                    paddingLeft: screenSize === "mobile" ? "1rem" : "1.2rem", 
                    lineHeight: 1.8, 
                    marginBottom: screenSize === "mobile" ? "1.5rem" : "2rem" 
                  }}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} style={{ 
                        marginBottom: screenSize === "mobile" ? "0.3rem" : "0.5rem", 
                        position: "relative",
                        fontSize: responsive.modalContentFont
                      }}>
                        <span style={{
                          position: "absolute",
                          left: screenSize === "mobile" ? "-1rem" : "-1.2rem",
                          color: selectedProject.id === 2 ? "#a78bfa" : "#38bdf8"
                        }}>▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - Tech & Links */}
                <div>
                  <h4 style={{ 
                    fontSize: screenSize === "mobile" ? "1.3rem" : "1.5rem", 
                    marginBottom: screenSize === "mobile" ? "0.8rem" : "1rem", 
                    color: "#38bdf8" 
                  }}>
                    Technologies
                  </h4>
                  <div style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    gap: screenSize === "mobile" ? "0.3rem" : "0.5rem", 
                    marginBottom: screenSize === "mobile" ? "1.5rem" : "2rem" 
                  }}>
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          padding: screenSize === "mobile" ? "0.3rem 0.7rem" : "0.4rem 0.9rem",
                          background: selectedProject.id === 2 
                            ? "rgba(139, 92, 246, 0.07)" 
                            : "rgba(56, 189, 248, 0.07)",
                          borderRadius: "12px",
                          fontSize: screenSize === "mobile" ? "0.8rem" : "0.9rem",
                          color: selectedProject.id === 2 ? "#c4b5fd" : "#7dd3fc",
                          border: selectedProject.id === 2 
                            ? "1px solid rgba(139, 92, 246, 0.1)" 
                            : "1px solid rgba(56, 189, 248, 0.1)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    background: selectedProject.id === 2 
                      ? "rgba(139, 92, 246, 0.03)" 
                      : "rgba(56, 189, 248, 0.03)",
                    borderRadius: "12px",
                    padding: screenSize === "mobile" ? "1.2rem" : "1.5rem",
                    border: selectedProject.id === 2 
                      ? "1px solid rgba(139, 92, 246, 0.1)" 
                      : "1px solid rgba(56, 189, 248, 0.1)",
                  }}>
                    <h4 style={{ 
                      fontSize: screenSize === "mobile" ? "1.2rem" : "1.3rem", 
                      marginBottom: screenSize === "mobile" ? "1rem" : "1.5rem", 
                      color: selectedProject.id === 2 ? "#a78bfa" : "#38bdf8" 
                    }}>
                      Project Links
                    </h4>
                    <div style={{ 
                      display: "flex", 
                      flexDirection: "column", 
                      gap: screenSize === "mobile" ? "0.8rem" : "1rem" 
                    }}>
                      <motion.a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        style={{
                          padding: screenSize === "mobile" ? "0.8rem 1rem" : "1rem 1.5rem",
                          background: selectedProject.id === 2 
                            ? "linear-gradient(135deg, #8b5cf6, #7c3aed)" 
                            : "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                          color: "#0f172a",
                          borderRadius: "10px",
                          textDecoration: "none",
                          fontWeight: 600,
                          textAlign: "center",
                          fontSize: screenSize === "mobile" ? "0.9rem" : "1.1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: screenSize === "mobile" ? "0.3rem" : "0.5rem",
                        }}
                      >
                        <span>{selectedProject.id === 2 ? "🎮" : "🌐"}</span>
                        {selectedProject.id === 2 ? "View Game Demo" : "View Live Demo"}
                      </motion.a>
                      
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        style={{
                          padding: screenSize === "mobile" ? "0.8rem 1rem" : "1rem 1.5rem",
                          background: selectedProject.id === 2 
                            ? "rgba(139, 92, 246, 0.1)" 
                            : "rgba(56, 189, 248, 0.1)",
                          color: selectedProject.id === 2 ? "#a78bfa" : "#38bdf8",
                          borderRadius: "10px",
                          textDecoration: "none",
                          fontWeight: 600,
                          textAlign: "center",
                          fontSize: screenSize === "mobile" ? "0.9rem" : "1.1rem",
                          border: selectedProject.id === 2 
                            ? "1px solid rgba(139, 92, 246, 0.3)" 
                            : "1px solid rgba(56, 189, 248, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: screenSize === "mobile" ? "0.3rem" : "0.5rem",
                        }}
                      >
                        <span>💻</span>
                        View Source Code
                      </motion.a>

                      {/* Thesis-specific buttons */}
                      {selectedProject.id === 2 && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            style={{
                              padding: screenSize === "mobile" ? "0.8rem 1rem" : "1rem 1.5rem",
                              background: "rgba(56, 189, 248, 0.1)",
                              color: "#38bdf8",
                              borderRadius: "10px",
                              border: "1px solid rgba(56, 189, 248, 0.3)",
                              fontWeight: 600,
                              fontSize: screenSize === "mobile" ? "0.9rem" : "1.1rem",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: screenSize === "mobile" ? "0.3rem" : "0.5rem",
                            }}
                            onClick={() => window.open("/thesis-document.pdf", "_blank")}
                          >
                            <span>📄</span>
                            View Thesis Paper
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            style={{
                              padding: screenSize === "mobile" ? "0.8rem 1rem" : "1rem 1.5rem",
                              background: "rgba(34, 197, 94, 0.1)",
                              color: "#4ade80",
                              borderRadius: "10px",
                              border: "1px solid rgba(34, 197, 94, 0.3)",
                              fontWeight: 600,
                              fontSize: screenSize === "mobile" ? "0.9rem" : "1.1rem",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: screenSize === "mobile" ? "0.3rem" : "0.5rem",
                            }}
                            onClick={() => window.open("/traffic-education-presentation.pdf", "_blank")}
                          >
                            <span>📊</span>
                            View Defense Presentation
                          </motion.button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Projects Section */}
      <section
        id="projects"
        style={{
          minHeight: "100vh",
          padding: responsive.containerPadding,
          width: "100%",
          maxWidth: "none",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Background Element */}
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
            width: screenSize === "xl-desktop" ? "500px" : 
                  screenSize === "large-desktop" ? "400px" : "300px",
            height: screenSize === "xl-desktop" ? "500px" : 
                  screenSize === "large-desktop" ? "400px" : "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 70%)",
            bottom: screenSize === "mobile" ? "5%" : "10%",
            left: screenSize === "mobile" ? "-20%" : "-10%",
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
            marginBottom: screenSize === "xl-desktop" ? "5rem" : 
                         screenSize === "large-desktop" ? "4.5rem" : "4rem",
            maxWidth: screenSize === "xl-desktop" ? "800px" : "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <motion.h2
            style={{
              fontSize: screenSize === "xl-desktop" ? "4rem" : 
                       screenSize === "large-desktop" ? "3.5rem" : "clamp(2.5rem, 5vw, 3.5rem)",
              marginBottom: "1rem",
              position: "relative",
              display: "inline-block",
            }}
          >
            <span style={{ color: "#38bdf8" }}>Featured Projects</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ 
                width: screenSize === "xl-desktop" ? "150px" : 
                       screenSize === "large-desktop" ? "130px" : "120px" 
              }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                height: "3px",
                background: "linear-gradient(90deg, #38bdf8, transparent)",
                borderRadius: "2px",
                margin: "0.5rem auto 0",
              }}
            />
          </motion.h2>
          <p style={{ 
            opacity: 0.8, 
            fontSize: screenSize === "xl-desktop" ? "1.3rem" : 
                     screenSize === "large-desktop" ? "1.2rem" : "1.1rem", 
            maxWidth: "700px", 
            margin: "1rem auto 0",
            lineHeight: 1.6
          }}>
            A diverse portfolio showcasing my skills across web development, mobile applications, and game development
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: responsive.gridColumns,
            gap: responsive.cardGap,
            marginBottom: screenSize === "mobile" ? "3rem" : "4rem",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: screenSize === "mobile" ? 0 : -8 }}
              style={{
                background: "rgba(15, 23, 42, 0.85)",
                border: project.id === 2 
                  ? "1px solid rgba(139, 92, 246, 0.2)" 
                  : "1px solid rgba(56, 189, 248, 0.15)",
                borderRadius: "16px",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                height: responsive.cardHeight,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
              onClick={() => openModal(project)}
            >
              {/* Thesis Badge */}
              {project.id === 2 && (
                <div style={{
                  position: "absolute",
                  top: screenSize === "mobile" ? "0.8rem" : "1rem",
                  left: screenSize === "mobile" ? "0.8rem" : "1rem",
                  padding: screenSize === "mobile" ? "0.2rem 0.6rem" : "0.3rem 0.8rem",
                  background: "rgba(139, 92, 246, 0.2)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: "20px",
                  fontSize: screenSize === "mobile" ? "0.7rem" : "0.8rem",
                  color: "#a78bfa",
                  fontWeight: 500,
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: screenSize === "mobile" ? "0.2rem" : "0.3rem",
                }}>
                  <span>🎓</span> Thesis Project
                </div>
              )}

              {/* Project Image */}
              <div
                style={{
                  height: responsive.imageHeight,
                  background: `linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8)), url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                {/* Status Badge */}
                <div style={{
                  position: "absolute",
                  top: screenSize === "mobile" ? "0.8rem" : "1rem",
                  right: screenSize === "mobile" ? "0.8rem" : "1rem",
                  padding: screenSize === "mobile" ? "0.2rem 0.6rem" : "0.3rem 0.8rem",
                  background: project.status === "Completed" 
                    ? "rgba(34, 197, 94, 0.2)" 
                    : "rgba(234, 179, 8, 0.2)",
                  border: project.status === "Completed" 
                    ? "1px solid rgba(34, 197, 94, 0.3)" 
                    : "1px solid rgba(234, 179, 8, 0.3)",
                  borderRadius: "20px",
                  fontSize: screenSize === "mobile" ? "0.7rem" : "0.8rem",
                  color: project.status === "Completed" ? "#4ade80" : "#fbbf24",
                  fontWeight: 500,
                }}>
                  {project.status}
                </div>

                {/* Type Badge */}
                <div style={{
                  position: "absolute",
                  bottom: screenSize === "mobile" ? "0.8rem" : "1rem",
                  left: screenSize === "mobile" ? "0.8rem" : "1rem",
                  padding: screenSize === "mobile" ? "0.2rem 0.6rem" : "0.3rem 0.8rem",
                  background: project.type === "mobile" 
                    ? "rgba(139, 92, 246, 0.2)" 
                    : "rgba(56, 189, 248, 0.2)",
                  border: project.type === "mobile" 
                    ? "1px solid rgba(139, 92, 246, 0.3)" 
                    : "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: "20px",
                  fontSize: screenSize === "mobile" ? "0.7rem" : "0.8rem",
                  color: project.type === "mobile" ? "#a78bfa" : "#38bdf8",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: screenSize === "mobile" ? "0.2rem" : "0.3rem",
                }}>
                  {project.type === "mobile" ? "📱 Mobile" : "🌐 Web"}
                </div>
              </div>

              {/* Project Content */}
              <div style={{ 
                padding: responsive.cardPadding, 
                flex: 1, 
                display: "flex", 
                flexDirection: "column" 
              }}>
                <h3 style={{ 
                  fontSize: responsive.titleFontSize, 
                  marginBottom: screenSize === "mobile" ? "0.6rem" : "0.8rem",
                  color: project.id === 2 ? "#a78bfa" : "#38bdf8",
                  lineHeight: 1.3
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  fontSize: responsive.descFontSize, 
                  lineHeight: 1.6, 
                  opacity: 0.9, 
                  marginBottom: screenSize === "mobile" ? "1rem" : "1.5rem",
                  flex: 1,
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  gap: screenSize === "mobile" ? "0.3rem" : "0.4rem", 
                  marginBottom: screenSize === "mobile" ? "1rem" : "1.5rem" 
                }}>
                  {project.technologies.slice(0, screenSize === "mobile" ? 3 : 4).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: screenSize === "mobile" ? "0.15rem 0.5rem" : "0.2rem 0.6rem",
                        background: project.id === 2 
                          ? "rgba(139, 92, 246, 0.07)" 
                          : "rgba(56, 189, 248, 0.07)",
                        borderRadius: "10px",
                        fontSize: responsive.techFontSize,
                        color: project.id === 2 ? "#c4b5fd" : "#7dd3fc",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > (screenSize === "mobile" ? 3 : 4) && (
                    <span style={{
                      padding: screenSize === "mobile" ? "0.15rem 0.5rem" : "0.2rem 0.6rem",
                      background: project.id === 2 
                        ? "rgba(139, 92, 246, 0.07)" 
                        : "rgba(56, 189, 248, 0.07)",
                      borderRadius: "10px",
                      fontSize: responsive.techFontSize,
                      color: project.id === 2 ? "#c4b5fd" : "#7dd3fc",
                    }}>
                      +{project.technologies.length - (screenSize === "mobile" ? 3 : 4)}
                    </span>
                  )}
                </div>

                {/* Date */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: screenSize === "mobile" ? "0.3rem" : "0.5rem",
                  fontSize: responsive.techFontSize,
                  opacity: 0.7,
                }}>
                  <span>📅</span>
                  {project.date}
                </div>
              </div>

              {/* View Project Button */}
              <motion.div
                whileHover={{ backgroundColor: project.id === 2 ? "rgba(139, 92, 246, 0.1)" : "rgba(56, 189, 248, 0.1)" }}
                style={{
                  padding: screenSize === "mobile" ? "0.8rem" : "1rem",
                  borderTop: project.id === 2 
                    ? "1px solid rgba(139, 92, 246, 0.1)" 
                    : "1px solid rgba(56, 189, 248, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: screenSize === "mobile" ? "0.3rem" : "0.5rem",
                  color: project.id === 2 ? "#a78bfa" : "#38bdf8",
                  fontWeight: 600,
                  fontSize: screenSize === "mobile" ? "0.85rem" : "0.95rem",
                  transition: "all 0.3s ease",
                }}
              >
                <span>{project.id === 2 ? "🎮" : "👁️"}</span>
                {project.id === 2 ? "View Game Details" : "View Project Details"}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            padding: screenSize === "mobile" ? "2rem 1.5rem" : "3rem",
            background: "rgba(56, 189, 248, 0.03)",
            borderRadius: "16px",
            border: "1px solid rgba(56, 189, 248, 0.1)",
          }}
        >
          <h3 style={{ 
            fontSize: screenSize === "xl-desktop" ? "2.2rem" : 
                     screenSize === "large-desktop" ? "2rem" : "1.8rem", 
            marginBottom: screenSize === "mobile" ? "0.8rem" : "1rem", 
            color: "#38bdf8" 
          }}>
            Diverse Technical Skills
          </h3>
          <p style={{ 
            fontSize: screenSize === "xl-desktop" ? "1.3rem" : 
                     screenSize === "large-desktop" ? "1.2rem" : "1.1rem", 
            opacity: 0.9, 
            marginBottom: screenSize === "mobile" ? "1.5rem" : "2rem", 
            maxWidth: "700px", 
            margin: "0 auto 2rem", 
            lineHeight: 1.6 
          }}>
            From enterprise web applications with .NET to educational mobile games with Godot Engine, 
            I bring versatile technical expertise across multiple domains. My experience spans full-stack 
            web development, mobile application development, and game development.
          </p>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: screenSize === "mobile" ? "0.5rem" : "1rem", 
            justifyContent: "center", 
            marginBottom: screenSize === "mobile" ? "1.5rem" : "2rem" 
          }}>
            <span style={{
              padding: screenSize === "mobile" ? "0.4rem 1rem" : "0.5rem 1.2rem",
              background: "rgba(139, 92, 246, 0.1)",
              borderRadius: "20px",
              fontSize: screenSize === "mobile" ? "0.8rem" : "0.9rem",
              color: "#a78bfa",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: screenSize === "mobile" ? "0.2rem" : "0.3rem",
            }}>
              <span>🎮</span> Godot Engine
            </span>
            <span style={{
              padding: screenSize === "mobile" ? "0.4rem 1rem" : "0.5rem 1.2rem",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: "20px",
              fontSize: screenSize === "mobile" ? "0.8rem" : "0.9rem",
              color: "#38bdf8",
              fontWeight: 500,
            }}>ASP.NET Core MVC</span>
            <span style={{
              padding: screenSize === "mobile" ? "0.4rem 1rem" : "0.5rem 1.2rem",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: "20px",
              fontSize: screenSize === "mobile" ? "0.8rem" : "0.9rem",
              color: "#38bdf8",
              fontWeight: 500,
            }}>React</span>
            <span style={{
              padding: screenSize === "mobile" ? "0.4rem 1rem" : "0.5rem 1.2rem",
              background: "rgba(139, 92, 246, 0.1)",
              borderRadius: "20px",
              fontSize: screenSize === "mobile" ? "0.8rem" : "0.9rem",
              color: "#a78bfa",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: screenSize === "mobile" ? "0.2rem" : "0.3rem",
            }}>
              <span>🖌️</span> Blender 3D
            </span>
            <span style={{
              padding: screenSize === "mobile" ? "0.4rem 1rem" : "0.5rem 1.2rem",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: "20px",
              fontSize: screenSize === "mobile" ? "0.8rem" : "0.9rem",
              color: "#38bdf8",
              fontWeight: 500,
            }}>GDScript</span>
          </div>
          <motion.a
            href="https://github.com/Lmkk-k"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: screenSize === "mobile" ? "0.8rem 2rem" : "1rem 2.5rem",
              background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
              color: "#0f172a",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: screenSize === "mobile" ? "0.9rem" : "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: screenSize === "mobile" ? "0.3rem" : "0.5rem",
            }}
          >
            <span>💻</span> Explore All Projects on GitHub
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;