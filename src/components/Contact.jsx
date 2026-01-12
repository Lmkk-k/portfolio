import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../Frontend CSS/Contact.css";

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
    
    const serviceID = 'service_8n6gvnu';
    const templateID = 'template_ooutr1p';
    const publicKey = 'Qat85Y1apOX9aQ3Lm';
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
        to_email: 'lemarkrosales123@gmail.com',
        reply_to: formData.email,
        to_name: 'Lemark',
        site_url: window.location.origin,
        year: new Date().getFullYear()
      };
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "lemarkrosales123@gmail.com",
      action: "mailto:lemarkrosales123@gmail.com",
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
      action: "tel:+639608522397",
      color: "#10b981"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Lmkk-k", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/lmkk", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/lemarkkkk_/", label: "Instagram" }
  ];

  const technologies = [
    "React", "ASP.NET", "Godot", "Laravel", 
    "Node.js", "C#", "GDScript", "Blender",
    "SQL", "DBeaver", "Javascript", "Docker"
  ];

  return (
    <section id="contact" className="contact-section">
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
        className="contact-animated-bg-1"
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
        className="contact-animated-bg-2"
      />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="contact-header"
      >
        <motion.h2 className="contact-title">
          <span>Get In Touch</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="contact-title-line"
          />
        </motion.h2>
        <p className="contact-subtitle">
          Have a project in mind? Want to collaborate or just say hello? 
          I'm always open to discussing new opportunities and interesting ideas.
        </p>
      </motion.div>

      <div className="contact-container">
        {/* LEFT COLUMN */}
        <div className="contact-left-column">
          {/* Send a Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-card contact-form-card"
          >
            <h3 className="contact-card-header">
              <FaPaperPlane /> Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-fields">
                <div className="contact-form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group" style={{ flex: 2, minHeight: "200px" }}>
                  <label className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  />
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className="form-button"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`form-status ${submitStatus}`}
                    >
                      {submitStatus === "success" 
                        ? "✅ Message sent successfully! I'll get back to you soon."
                        : "❌ Failed to send message. Please try again or contact me directly."}
                    </motion.div>
                  )}
                </div>
              </div>
            </form>
          </motion.div>

          {/* Open to Opportunities Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="contact-card contact-card-sm"
          >
            <div className="opportunities-emoji">
              💼
            </div>
            <h4 className="opportunities-title">
              Open to Opportunities
            </h4>
            <p className="opportunities-text">
              Currently available for freelance projects and full-time opportunities in web & game development.
            </p>
            <div className="opportunities-badge">
              <FaMapMarkerAlt />
              <span>Don't hesitate to get in touch with me</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="contact-right-column">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="contact-card contact-info-card"
          >
            <h3 className="contact-card-header">
              Contact Information
            </h3>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  target={info.action?.startsWith('http') ? "_blank" : undefined}
                  rel={info.action?.startsWith('http') ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 5 }}
                  className="contact-info-item"
                >
                  <div 
                    className="contact-info-icon"
                    style={{
                      background: `${info.color}15`,
                      border: `1px solid ${info.color}30`,
                      color: info.color
                    }}
                  >
                    {info.icon}
                  </div>
                  
                  <div className="contact-info-content">
                    <div className="contact-info-title">
                      {info.title}
                    </div>
                    <div className="contact-info-value">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect With Me */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="contact-card contact-card-sm"
          >
            <h3 className="contact-card-header">
              Connect With Me
            </h3>
            
            <p className="opportunities-text">
              Follow me on social media to stay updated with my latest projects and insights.
            </p>
            
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-item"
                >
                  <div className="social-icon">
                    {social.icon}
                  </div>
                  <span className="social-label">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="technologies-section"
      >
        <h4 className="technologies-title">
          Technologies I Work With
        </h4>
        <div className="technologies-list">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Location Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="location-badge"
      >
        <div className="location-content">
          <FaMapMarkerAlt className="location-icon" />
          <span className="location-text">
            Based in Cebu City, Philippines • Open to Remote Work Worldwide
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;