import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaCode, FaLock, FaCog } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Financial Analytics Platform",
      description: "Full-stack financial analytics platform integrating Ministry of Finance pension data with interactive D3.js visualizations and AI-powered recommendations.",
      longDescription: "Comprehensive pension fund management system built in collaboration with market partners. Features real-time data integration, interactive visualizations, and personalized investment recommendations based on user profiles.",
      technologies: ["React.js", "Express.js", "MongoDB", "D3.js", "Node.js"],
      features: [
        "Interactive D3.js fund performance visualizations",
        "AI-powered investment recommendation system",
        "Ministry of Finance data integration",
        "User questionnaire-based matching",
        "Real-time market data processing"
      ],
      icon: <FaCode />,
      color: "#4ade80",
      github: "https://github.com/GaiShukrun/Kupot_Gemel",
      demo: "https://hayat-gemel.netlify.app",
      category: "Full Stack Web"
    },
    {
      id: 2,
      title: "Donation Wagon",
      description: "Cross-platform mobile application with MERN stack backend that streamlines clothing donation logistics using AI-powered image recognition.",
      longDescription: "Revolutionary donation management platform featuring Google Gemini AI integration for automated clothing classification, real-time pickup scheduling, and gamified community engagement with leaderboards.",
      technologies: ["React Native", "Express.js", "MongoDB", "Google Gemini AI", "Expo"],
      features: [
        "AI-powered clothing recognition with Google Gemini",
        "Cross-platform mobile app with React Native",
        "Real-time pickup scheduling system",
        "Gamified leaderboards and achievements",
        "Driver dashboard with route optimization"
      ],
      icon: <FaShieldAlt />,
      color: "#61dafb",
      github: "https://github.com/GaiShukrun/DonationWagon",
      demo: "#",
      category: "Mobile Full Stack"
    },
    {
      id: 3,
      title: "PawSome Hub E-Commerce",
      description: "Full-stack pet e-commerce platform with secure payment processing, real-time inventory management, and comprehensive business analytics.",
      longDescription: "Complete MERN stack e-commerce solution for pet products featuring PayPal integration, encrypted payment data, real-time inventory tracking, and advanced business intelligence with popular items analytics.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "PayPal API"],
      features: [
        "Secure payment processing with PayPal integration",
        "AES-256 encryption for sensitive data",
        "Real-time inventory and cart management",
        "Business analytics and popular items tracking",
        "Responsive design with modern UX"
      ],
      icon: <FaCog />,
      color: "#a78bfa",
      github: "https://github.com/GaiShukrun/PawSome-Hub",
      demo: "#",
      category: "Full Stack Web"
    },
    {
      id: 4,
      title: "Interactive Attack Tree Visualization",
      description: "React-based cybersecurity visualization system modeling MITRE ATT&CK framework with TypeScript and D3.js for educational demonstrations.",
      longDescription: "Professional cybersecurity tool developed at ICNL (INCD) connecting real-world attack examples to interactive demonstrations. Features modular component architecture and dynamic visualization rendering.",
      technologies: ["React", "TypeScript", "D3.js", "MITRE ATT&CK"],
      features: [
        "Interactive attack tree visualization with D3.js",
        "MITRE ATT&CK framework integration",
        "Modular component system architecture",
        "Real-world cybersecurity demonstrations",
        "Educational lab visitor interface"
      ],
      icon: <FaShieldAlt />,
      color: "#f59e0b",
      github: "#",
      demo: "#",
      category: "React Visualization"
    },
    {
      id: 5,
      title: "C-Like Compiler",
      description: "Sophisticated compiler built with C, Flex, and Bison translating C-like source code into optimized Three-Address Code with comprehensive analysis.",
      longDescription: "Advanced compiler implementation featuring complete lexical analysis, syntax parsing, semantic analysis, and code generation. Includes 40+ token types, 50+ grammar rules, and multi-level symbol table management.",
      technologies: ["C", "Flex/Bison", "Yacc", "Assembly", "Compiler Design"],
      features: [
        "Complete lexical and syntax analysis",
        "Multi-level symbol table management",
        "Semantic analysis and type checking",
        "Three-Address Code generation",
        "Advanced error handling mechanisms"
      ],
      icon: <FaCode />,
      color: "#ef4444",
      github: "https://github.com/GaiShukrun/C-Like-Compiler",
      demo: "#",
      category: "Systems Programming"
    }
  ];

  const categories = ["All", "Full Stack Web", "Mobile Full Stack", "React Visualization", "Systems Programming"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Full Stack MERN applications, mobile development, and interactive visualizations
          </p>
        </motion.div>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div 
                  className="project-icon"
                  style={{ background: project.color }}
                >
                  {project.icon}
                </div>
                <div className="project-category">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-actions">
                <a 
                  href={project.github} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.demo} 
                  className="project-link primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>

              <div className="project-overlay">
                <div className="overlay-content">
                  <h4>{project.title}</h4>
                  <p>{project.longDescription}</p>
                  <div className="overlay-features">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="overlay-feature">
                        <FaLock className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Interested in collaborating?</h3>
          <p>I'm always open to discussing new projects and opportunities in cybersecurity and development.</p>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
