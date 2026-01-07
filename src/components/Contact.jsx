import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "lemarkrosales123@gmail.com",
      // action: "mailto:lemarkrosales123@gmail.com",
      color: "#38bdf8"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "@Lmkk-k",
      action: "https://github.com/Lmkk-k",
      color: "#8b5cf6"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/lmkk",
      action: "https://linkedin.com/in/lmkk",
      color: "#0ea5e9"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+63 960 852 2397",
      // action: "tel:+639123456789",
      color: "#10b981"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Lmkk-k", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/lmkk", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/lemarkkkk_/", label: "Instagram" }
  ];

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "clamp(3rem, 5vw, 6rem) clamp(1.5rem, 4vw, 4rem)",
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)",
          top: "10%",
          right: "5%",
          zIndex: -1
        }}
      />
      
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, transparent 70%)",
          bottom: "15%",
          left: "5%",
          zIndex: -1
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
          marginBottom: "4rem"
        }}
      >
        <motion.h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            marginBottom: "1rem",
            position: "relative",
            display: "inline-block"
          }}
        >
          <span style={{ color: "#38bdf8" }}>Get In Touch</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #38bdf8, transparent)",
              borderRadius: "2px",
              margin: "0.5rem auto 0"
            }}
          />
        </motion.h2>
        <p style={{ 
          opacity: 0.8, 
          fontSize: "1.1rem", 
          maxWidth: "700px", 
          margin: "1rem auto 0",
          lineHeight: 1.6
        }}>
          Have a project in mind? Want to collaborate or just say hello? 
          I'm always open to discussing new opportunities and interesting ideas.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "3rem",
        alignItems: "stretch"
      }}>
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {/* Send a Message Form - Fixed height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              borderRadius: "20px",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
              height: "650px",  // Fixed height
              display: "flex",
              flexDirection: "column"
            }}
          >
            <h3 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "1.5rem",
              color: "#38bdf8",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <FaPaperPlane /> Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", flex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
                      color: "#7dd3fc",
                      fontWeight: 500
                    }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        background: "rgba(56, 189, 248, 0.05)",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        borderRadius: "10px",
                        color: "#f8fafc",
                        fontSize: "1rem",
                        transition: "all 0.3s ease"
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.9rem",
                      color: "#7dd3fc",
                      fontWeight: 500
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        background: "rgba(56, 189, 248, 0.05)",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        borderRadius: "10px",
                        color: "#f8fafc",
                        fontSize: "1rem",
                        transition: "all 0.3s ease"
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                    color: "#7dd3fc",
                    fontWeight: 500
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      background: "rgba(56, 189, 248, 0.05)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      borderRadius: "10px",
                      color: "#f8fafc",
                      fontSize: "1rem",
                      transition: "all 0.3s ease"
                    }}
                  />
                </div>
                
                <div style={{ flex: 2, minHeight: "200px" }}>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                    color: "#7dd3fc",
                    fontWeight: 500
                  }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "180px",
                      padding: "0.8rem 1rem",
                      background: "rgba(56, 189, 248, 0.05)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      borderRadius: "10px",
                      color: "#f8fafc",
                      fontSize: "1rem",
                      resize: "vertical",
                      transition: "all 0.3s ease",
                      fontFamily: "inherit"
                    }}
                  />
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: "100%",
                      padding: "1rem 2rem",
                      background: isSubmitting 
                        ? "rgba(56, 189, 248, 0.5)" 
                        : "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                      color: "#0f172a",
                      border: "none",
                      borderRadius: "10px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={{ display: "inline-block" }}
                        >
                          ⏳
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: "1rem",
                        background: "rgba(34, 197, 94, 0.1)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                        borderRadius: "10px",
                        color: "#4ade80",
                        textAlign: "center",
                        fontSize: "0.95rem",
                        marginTop: "1rem"
                      }}
                    >
                      ✅ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </div>
              </div>
            </form>
          </motion.div>

          {/* Open to Opportunities Card - Fixed height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(139, 92, 246, 0.05))",
              borderRadius: "20px",
              padding: "2.5rem",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              backdropFilter: "blur(10px)",
              height: "300px",  // Fixed height
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <div style={{ 
              fontSize: "3rem", 
              marginBottom: "1.5rem", 
              textAlign: "center",
              color: "#38bdf8"
            }}>
              💼
            </div>
            <h4 style={{ 
              fontSize: "1.5rem", 
              marginBottom: "1rem",
              color: "#38bdf8",
              textAlign: "center"
            }}>
              Open to Opportunities
            </h4>
            <p style={{ 
              fontSize: "1rem", 
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: "1.5rem",
              textAlign: "center"
            }}>
              Currently available for freelance projects and full-time opportunities in web & game development.
            </p>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.8rem 1.5rem",
              background: "rgba(56, 189, 248, 0.1)",
              borderRadius: "20px",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              fontSize: "0.95rem",
              color: "#38bdf8",
              fontWeight: 500,
              margin: "0 auto",
              width: "fit-content"
            }}>
              <FaMapMarkerAlt />
              <span>Don't hesitate to get in touch with me</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {/* Contact Information - Fixed height */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              borderRadius: "20px",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
              height: "650px",  // Fixed height - same as form
              display: "flex",
              flexDirection: "column"
            }}
          >
            <h3 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "1.5rem",
              color: "#38bdf8"
            }}>
              Contact Information
            </h3>
            
            <div style={{ display: "grid", gap: "1.2rem", flex: 1 }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    textDecoration: "none",
                    padding: "1.2rem",
                    background: "rgba(56, 189, 248, 0.03)",
                    borderRadius: "12px",
                    border: "1px solid rgba(56, 189, 248, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    color: info.color,
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: "0.9rem", 
                      color: "#7dd3fc",
                      marginBottom: "0.2rem"
                    }}>
                      {info.title}
                    </div>
                    <div style={{ 
                      fontSize: "1rem", 
                      color: "#f8fafc",
                      fontWeight: 500
                    }}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect With Me - Fixed height */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              borderRadius: "20px",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
              height: "300px",  // Fixed height - same as opportunities
              display: "flex",
              flexDirection: "column"
            }}
          >
            <h3 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "1.5rem",
              color: "#38bdf8"
            }}>
              Connect With Me
            </h3>
            
            <p style={{ 
              fontSize: "1rem", 
              opacity: 0.8,
              marginBottom: "1.5rem",
              lineHeight: 1.6
            }}>
              Follow me on social media to stay updated with my latest projects and insights.
            </p>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              flex: 1
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "1.2rem 0.8rem",
                    background: "rgba(56, 189, 248, 0.05)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.8rem",
                    textDecoration: "none",
                    color: "#f8fafc",
                    transition: "all 0.3s ease",
                    minHeight: "110px"
                  }}
                >
                  <div style={{ fontSize: "1.8rem", color: "#38bdf8" }}>
                    {social.icon}
                  </div>
                  <span style={{ 
                    fontSize: "0.9rem", 
                    fontWeight: 500,
                    textAlign: "center"
                  }}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Location Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        style={{
          marginTop: "4rem",
          textAlign: "center"
        }}
      >
        <div style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "0.5rem",
          padding: "0.8rem 1.5rem",
          background: "rgba(56, 189, 248, 0.05)",
          borderRadius: "20px",
          border: "1px solid rgba(56, 189, 248, 0.2)"
        }}>
          <FaMapMarkerAlt style={{ color: "#38bdf8" }} />
          <span style={{ fontSize: "0.95rem", opacity: 0.9 }}>
            Based in Cebu City, Philippines • Open to Remote Work Worldwide
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;