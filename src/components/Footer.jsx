import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
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
    <footer style={{
      padding: "3rem clamp(1.5rem, 4vw, 4rem)",
      marginTop: "4rem",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        {/* Top Row: LMKK + Description + Social Icons */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "2rem"
        }}>
          {/* Left: LMKK Logo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              maxWidth: "400px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#0f172a"
              }}>
                L
              </div>
              <h3 style={{
                fontSize: "1.5rem",
                background: "linear-gradient(90deg, #38bdf8, #7dd3fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700
              }}>
                LMKK
              </h3>
            </div>
            
            <p style={{ 
              fontSize: "0.95rem", 
              opacity: 0.8, 
              lineHeight: 1.6,
              marginLeft: "calc(40px + 0.8rem)"
            }}>
              Full-Stack Developer & Game Developer creating impactful digital experiences through code and creativity.
            </p>
          </motion.div>

          {/* Right: Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              gap: "0.8rem"
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Middle: Technologies Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "3rem"
          }}
        >
          <h4 style={{ 
            fontSize: "1.2rem", 
            marginBottom: "1.5rem",
            color: "#38bdf8",
            fontWeight: 600
          }}>
            Technologies
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: "0.3rem 0.8rem",
                  background: "rgba(56, 189, 248, 0.07)",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  color: "#7dd3fc",
                  border: "1px solid rgba(56, 189, 248, 0.1)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.2), transparent)",
          margin: "2rem 0"
        }} />

        {/* Bottom: Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              padding: "0.6rem 1.5rem",
              background: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "20px",
              color: "#38bdf8",
              fontSize: "0.9rem",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease"
            }}
          >
            <span>↑</span>
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;