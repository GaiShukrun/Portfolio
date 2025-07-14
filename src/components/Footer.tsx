import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaShieldAlt, FaCode, FaRocket } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/gaishukrun',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/gaishukrun',
      color: '#0077B5'
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      url: 'mailto:gaisom100@gmail.com',
      color: '#EA4335'
    }
  ];

  const expertise = [
    { icon: <FaShieldAlt />, text: 'Cybersecurity Analysis' },
    { icon: <FaCode />, text: 'Full Stack Development' },
    { icon: <FaRocket />, text: 'Security Engineering' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="brand-header">
                <h3 className="brand-name">Gai Shukrun</h3>
                <p className="brand-tagline">Cybersecurity Analyst & Full Stack Developer</p>
              </div>
              
              <div className="expertise-list">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    className="expertise-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="expertise-icon">{item.icon}</span>
                    <span className="expertise-text">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="brand-description">
                <p>
                  Passionate about securing digital infrastructure and building robust applications. 
                  Currently working at INCD's National Security Operation Center, specializing in 
                  threat detection and incident response.
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                <motion.div
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:gaisom100@gmail.com" className="contact-text">
                    gaisom100@gmail.com
                  </a>
                </motion.div>
                
                <motion.div
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaPhone className="contact-icon" />
                  <a href="tel:+972524031660" className="contact-text">
                    052-4031660
                  </a>
                </motion.div>
                
                <motion.div
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <FaMapMarkerAlt className="contact-icon" />
                  <span className="contact-text">Israel</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social & Professional */}
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="footer-title">Connect</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color } as React.CSSProperties}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="availability-status">
                <div className="status-indicator"></div>
                <span className="status-text">Available for opportunities</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <motion.div 
              className="copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                © {currentYear} Gai Shukrun. Made with <FaHeart className="heart-icon" /> 
                for cybersecurity and innovation.
              </p>
            </motion.div>

            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaRocket />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
