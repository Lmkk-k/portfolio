import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Lmkk-k", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/lmkk", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/lemarkkkk_/", label: "Instagram" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {/* Top Row: Logo + Social Icons */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "2rem"
        }}>
          {/* Left: Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0
            }}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                flexShrink: 0
              }}
              onClick={scrollToTop}
            >
              <img
                src="/LR logo.png"
                alt="LR Logo"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  boxShadow: "0 1px 5px rgba(56, 189, 248, 0.3)",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              gap: "0.8rem",
              flexShrink: 0
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

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.2), transparent)",
          margin: "2rem 0"
        }} />

        {/* Bottom: Only Back to Top Button */}
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
          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
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