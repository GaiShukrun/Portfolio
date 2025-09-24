import React, { useState, useEffect } from 'react';
import './About.css';
import donationWagonGif from '../Images/DonaionWagon1.gif';

const About: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  // Project data extracted from Projects component
  const projects = [
    {
      title: "Financial Analytics Platform",
      description: "Full-stack financial analytics platform integrating Ministry of Finance pension data with interactive D3.js visualizations and AI-powered recommendations.",
      technologies: ["React.js", "Express.js", "MongoDB", "D3.js", "Node.js"],
      icons: ["react", "express", "mongodb", "d3", "nodejs"]
    },
    {
      title: "Donation Wagon",
      description: "Empowering Giving, Transforming Communities Together. Mobile platform connecting donors with those in need through AI-powered item recognition, gamified leaderboards, and seamless pickup scheduling.",
      detailedDescription: "Revolutionary donation management system featuring Google GenAI for automatic clothing recognition, flexible pickup scheduling with GPS integration, driver interface with route optimization, and community engagement through achievement systems and impact metrics.",
      keyFeatures: [
        "🤖 AI-Powered Item Recognition: Advanced AI for rapid identification of clothing types, colors, sizes, and genders",
        "📅 Flexible Pickup Scheduling: GPS or manual address entry with delivery instructions",
        "🏆 Gamified Experience: Leaderboards, badges, and community impact visualization",
        "🚚 Driver Interface: Route optimization and real-time status updates",
        "📱 Rich Media Support: Multiple image uploads with smooth UX animations"
      ],
      technologies: ["React Native", "Express.js", "MongoDB", "Google Gemini AI", "Expo"],
      icons: ["react-native", "express", "mongodb", "google", "expo"],
      image: donationWagonGif
    },
    {
      title: "PawSome Hub E-Commerce",
      description: "Full-stack pet e-commerce platform with secure payment processing, real-time inventory management, and comprehensive business analytics.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      icons: ["react", "nodejs", "express", "mongodb"]
    },
    {
      title: "Interactive Attack Tree Visualization",
      description: "React-based cybersecurity visualization system modeling MITRE ATT&CK framework with TypeScript and D3.js for educational demonstrations.",
      technologies: ["React", "TypeScript", "D3.js"],
      icons: ["react", "typescript", "d3"]
    },
    {
      title: "C-Like Compiler",
      description: "Sophisticated compiler built with C, Flex, and Bison translating C-like source code into optimized Three-Address Code with comprehensive analysis.",
      technologies: ["C", "Flex/Bison", "Yacc"],
      icons: ["c", "flex", "yacc"]
    }
  ];
  
  // Project carousel effect - 6 seconds per project
  useEffect(() => {
    if (isPaused) return;

    const projectInterval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => {
      clearInterval(projectInterval);
    };
  }, [projects.length, isPaused]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);
    
    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);
  
  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="about-header">
          <div className="pre-title1">About Me</div>
          {/* <p className="section-subtitle">Transforming ideas into powerful web applications with modern technologies</p> */}
        </div>
        
        <div className="about-content">
          <div className="about-left">
            <div className="experience-section">
              <div className="experience-content">
                <div className="timeline-header">
                  <h3>OT Cyber Security Research Associate</h3>
                  <span className="timeline-period">2024 - Present</span>
                </div>
                <div className="timeline-company">ICNL (INCD)</div>
                <p className="timeline-description">
                  Developed a modular component system connecting real-world attack examples to
                  interactive demonstrations, providing lab visitors with tangible understanding of
                  cybersecurity techniques. Linked real-world attack examples to interactive modules, increasing cybersecurity awareness by
                  40% across 150+ stakeholders.
                </p>
                
                <div className="tech-radio-group">
                  <span className={`tech-icon react-icon`}></span>
                  <span className={`tech-icon typescript-icon`}></span>
                  <span className={`tech-icon d3-icon`}></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-right">
            <div 
              className="projects-carousel-section"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="carousel-header">
                <h3>Featured Projects</h3>
                
              </div>
              
              <div className="project-carousel">
                {projects.map((project, index) => (
                  <div 
                    key={project.title} 
                    className={`project-slide ${index === activeProject ? 'active' : ''}`}
                  >
                    <div className="project-content-wrapper">
  <div className="project-text-content">

                        <h4 className="project-title">{project.title}</h4>
                        <p className="project-description">{project.description}</p>
                        
                        {project.keyFeatures && (
                          <div className="project-features">
                            <h5 className="features-title">Key Features:</h5>
                            <ul className="features-list">
                              {project.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="feature-item">{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="project-tech-stack">
                          <div className="tech-icons-container">
                            <div className="tech-icons">
                              {project.icons.map((icon, iconIndex) => (
                                <span 
                                  key={iconIndex} 
                                  className={`tech-icon ${icon}-icon`}
                                  title={project.technologies[iconIndex]}
                                ></span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {project.image && (
                        <div className="project-image-container">
                          <img 
                            src={project.image} 
                            alt={`${project.title} demonstration`}
                            className="project-image"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="project-indicators">
                {projects.map((_, index) => (
                  <span 
                    key={index} 
                    className={`project-indicator ${index === activeProject ? 'active' : ''}`}
                    onClick={() => setActiveProject(index)}
                  ></span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;