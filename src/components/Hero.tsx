import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
// Import your profile image
import profileImage from '../Images/04.jpg'; // Image exists in the Images directory
import CurvedLoop from './CurvedLoop.tsx';
import CountUp from './CountUp.tsx';

const Hero: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (imageLoaded && profileRef.current) {
      profileRef.current.classList.add('loaded');
    }
  }, [imageLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      name: "Financial Analytics Platform",
      icon: "icon-money",
      tech: "React.js, Express.js, MongoDB, D3.js"
    },
    {
      name: "Donation Wagon Mobile App",
      icon: "icon-shirt",
      tech: "React Native, Express.js, MongoDB, AI"
    },
    {
      name: "PawSome Hub E-Commerce",
      icon: "icon-paw",
      tech: "MERN Stack, PayPal Integration"
    }
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content hero-section">
          <div className="hero-right">
            <div className="profile-container" ref={profileRef}>
              <div className="profile-frame">
                <div className="profile-image-container">
                  <img 
                    src={profileImage} 
                    alt="Guy Shukrun - Full Stack Developer" 
                    className="profile-image"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <CurvedLoop 
                  marqueeText="✦ Full Stack Developer ✦ MERN Stack ✦ React ✦ Node.js ✦ TypeScript ✦" 
                  speed={1.5}
                  curveAmount={300}
                  direction="left"
                  interactive={true}
                  className="profile-text-loop"
                />
              </div>
            </div>
            <div className="social-icons-container">
              <div className="social-icons">
                <a href="https://github.com/GaiShukrun" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/guy--shukrun/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:gaisom100@gmail.com" className="social-icon email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero-left">
            <div className="title-container">
              <h1 className="hero-greeting">Hi, I'm <span className="name-highlight">Guy Shukrun</span></h1>
              <span className="pre-title">Full Stack Developer</span>

            </div>
            
            <p className="hero-description">
            B.sc. in software engineering with a passion for building real-world applications. Experienced in <strong>AI-powered </strong>
features and data-rich interfaces. Looking forward to my next challenge. Strong communication skills and
proven ability to deliver under pressure.
             </p>
            
            <div className="content-column">
              <div className="tech-stack">
                <div className="tech-radio-buttons">
                  <label className="tech-radio">
                    <input type="radio" name="tech" value="mongodb" defaultChecked />
                    <span className="tech-icon mongodb-icon"></span>
                  </label>
                  <label className="tech-radio">
                    <input type="radio" name="tech" value="express" />
                    <span className="tech-icon express-icon"></span>
                  </label>
                  <label className="tech-radio">
                    <input type="radio" name="tech" value="react" />
                    <span className="tech-icon react-icon"></span>
                  </label>
                  <label className="tech-radio">
                    <input type="radio" name="tech" value="nodejs" />
                    <span className="tech-icon nodejs-icon"></span>
                  </label>
                  <label className="tech-radio">
                    <input type="radio" name="tech" value="typescript" />
                    <span className="tech-icon typescript-icon"></span>
                  </label>
                  <label className="tech-radio">
                    <input type="radio" name="tech" value="javascript" /> 
                    <span className="tech-icon javascript-icon"></span>
                  </label>
                </div>
              </div>
              
              <div className="hero-stats">
                <div className="stat-card">
                  <span className="stat-value">
                    <CountUp
                      from={0}
                      to={92.5}
                      duration={2.5}
                      delay={0.5}
                      className="count-up-text"
                    />
                  </span>
                  <span className="stat-label">GPA Score</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">
                    <CountUp
                      from={0}
                      to={5}
                      duration={2}
                      delay={1}
                      className="count-up-text"
                    />+
                  </span>
                  <span className="stat-label">Full Stack Projects</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">MERN</span>
                  <span className="stat-label">Stack Mastery</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <button 
                  className="hero-btn primary" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
                >
                  <span>View My Work</span>
                </button>
                <button 
                  className="hero-btn secondary" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                >
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* <div className="project-dashboard">
              <div className="dashboard-header">
                <span className="dashboard-title">Full Stack Projects</span>
                <div className="status-indicator">
                  <span className="status-dot active"></span>
                  <span>Active</span>
                </div>
              </div>
              
              <div className="dashboard-content">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`project-item ${index === activeProject ? 'active' : ''}`}
                    onClick={() => setActiveProject(index)}
                  >
                    <span className="project-icon"><i className={project.icon}></i></span>
                    <div className="project-details">
                      <span className="project-name">{project.name}</span>
                      <span className="project-tech">{project.tech}</span>
                    </div>
                    <span className="project-status">•</span>
                  </div>
                ))}
              </div>
              
              <div className="project-preview">
                <div className="preview-header">
                  <span>Project Preview</span>
                </div>
                <div className="preview-content">
                  <div className="preview-tech-stack">
                    {projects[activeProject].tech.split(', ').map((tech, i) => (
                      <span key={i} className="preview-tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};


export default Hero;