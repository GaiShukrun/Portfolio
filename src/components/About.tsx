import React, { useState, useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('experience');
  const [activeProject, setActiveProject] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);
  const [activeInfo, setActiveInfo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Approach data
  const approaches = [
    {
      title: "Community Focus",
      description: "Building solutions that solve real community challenges and everyday difficulties",
      icon: "💫"
    },
    {
      title: "Dedication",
      description: "Persistence to deliver exceptional results through hard work",
      icon: "⚡"
    },
    {
      title: "Continuous Growth",
      description: "Continuous growth through collaboration and learning from others",
      icon: "🌱"
    },
    {
      title: "Passion-Driven",
      description: "Passion for creating technology that enhances people's lives",
      icon: "🔥"
    }
  ];

  // Additional information
  const additionalInfo = [
    
    {
      title: "Security Clearance",
      detail: "Holder of Level 2 Clearance",
      icon: "🔒"
    },
    {
      title: "Languages",
      detail: "Hebrew (Native), English (Professional Proficiency)",
      icon: "🌐"
    }
  ];

  // Project data
  const projects = [
    {
      title: "Kupot_Gemel",
      description: "💰 AI-driven web interface integrates Ministry of Finance pension data, providing personalized fund recommendations and interactive analysis tools for informed retirement planning decisions.",
      icons: ["react", "nodejs", "mongodb", "d3", "javascript"]
    },
    {
      title: "Donation Wagon",
      description: "Community-driven donation platform facilitating charitable giving and fundraising campaigns. Empowering nonprofits and social causes with modern digital fundraising tools.",
      icons: ["react-native", "nodejs", "mongodb", "ai"]
    },
    {
      title: "PawSome Hub",
      description: "🐾 MERN stack pet e-commerce platform with secure payments, real-time inventory, and business analytics. Full shopping experience for pet products with PayPal integration and encrypted transactions.",
      icons: ["react", "express", "mongodb", "nodejs"]
    },
    {
      title: "C-Like Compiler",
      description: "🚀 Sophisticated C-like compiler translating source code to optimized Three-Address Code (3AC). Features advanced lexical analysis (40+ tokens), comprehensive parsing (50+ grammar rules), semantic analysis with type checking, and hierarchical symbol table management.",
      icons: ["c", "ubuntu", "lex", "yacc"]
    }
  ];
  
  // Project, approach, and info carousel effects
  useEffect(() => {
    let projectInterval;
    let approachInterval;
    let infoInterval;
    
    if (activeTab === 'Academic Projects') {
      projectInterval = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    
    // Approach carousel effect
    approachInterval = setInterval(() => {
      setActiveApproach((prev) => (prev + 1) % approaches.length);
    }, 4000);
    
    // Additional info carousel effect
    infoInterval = setInterval(() => {
      setActiveInfo((prev) => (prev + 1) % additionalInfo.length);
    }, 4500);
    
    return () => {
      clearInterval(projectInterval);
      clearInterval(approachInterval);
      clearInterval(infoInterval);
    };
  }, [activeTab, projects.length, approaches.length, additionalInfo.length]);
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
            <div className="about-tabs">
              <button 
                className={`about-tab ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <span className="tab-icon"></span>
                Experience
              </button>
              <button 
                className={`about-tab ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <span className="tab-icon"></span>
                Education
              </button>
              <button 
                className={`about-tab ${activeTab === 'Academic Projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('Academic Projects')}
              >
                <span className="tab-icon"></span>
                Academic Projects
              </button>

            
            </div>
            
            <div className="tab-content">
              {activeTab === 'experience' &&  (
                <div className="experience-content">
               
                      <div className="timeline-header">
                        <h3>OT Cyber Security Lab Assistant</h3>
                        <span className="timeline-period">2024 - Present</span>
                      </div>
                      <div className="timeline-company">ICNL (INCD)</div>
                      <p className="timeline-description">
                        Developed a modular component system connecting real-world attack examples to
                        interactive demonstrations, providing lab visitors with tangible understanding of
                        cybersecurity techniques. Implemented an interactive attack tree visualization system modeling MITRE ATT&CK
                       with focus on responsive design and performance optimization.
                      </p>
                    
                      <div className="tech-radio-group">
                            
                                  <span className={`tech-icon react-icon`}></span>
                                  <span className={`tech-icon typescript-icon`}></span>
                                  <span className={`tech-icon d3-icon`}></span>
                                </div>
                    </div>
                  

             
              )}
              
              {activeTab === 'Academic Projects' && (
                <div className="projects-content">
                    
                      <div className="timeline-header">
                      </div>
                      <div className="project-carousel">
                        {projects.map((project, index) => (
                          <div 
                            key={project.title} 
                            className={`project-slide ${index === activeProject ? 'active' : ''}`}
                          >
                            <h3 className="project-title" style={{fontSize: '1.6rem', fontWeight: 700}}>{project.title}</h3>
                            <p className="project-description" style={{fontSize: '1.2rem', lineHeight: 2, fontWeight: 500}}>{project.description}</p>
                            <div className="tech-radio-group">
                              {project.icons.map(icon => (
                                <div key={icon} className="tech-icon-container">
                                  <span className={`tech-icon ${icon}-icon`}></span>
                                </div>
                              ))}
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
                  
                
              )}
              
              {activeTab === 'education' && (
                <div className="education-content">
                  <div className="education-item">
                    <div className="education-degree">B.Sc in Software Engineering</div>
                    <div className="education-school">SCE - Shamoon College of Engineering</div>
                    <div className="education-details">
                      <span className="education-period">2021 - 2025</span>
                      <span className="education-gpa">GPA: 92.5/100</span>
                    </div>
                    <p className="education-description">
                      Advanced coursework in software architecture, algorithms, data structures, and modern development practices.
                      Specialized in web development and full stack applications.                      
                    </p>
                   
                  </div>
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div className="skills-content">
                  <div className="skills-group">
                    <h3 className="skills-group-title">Frontend Development</h3>
                    <div className="skills-list">
                      <div className="skill-item">
                        <span className="skill-name">React.js</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">TypeScript</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">React Native</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="skills-group">
                    <h3 className="skills-group-title">Backend Development</h3>
                    <div className="skills-list">
                      <div className="skill-item">
                        <span className="skill-name">Node.js</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">Express.js</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">MongoDB</span>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: '88%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-card">
              <div className="about-card-header">
                <h3>My Approach</h3>
                <div className="card-icon">{approaches[activeApproach].icon}</div>
              </div>
              
              <div className="approach-carousel">
                {approaches.map((approach, index) => (
                  <div 
                    key={approach.title} 
                    className={`approach-slide ${index === activeApproach ? 'active' : ''}`}
                  >
                    <h4 className="approach-title">{approach.title}</h4>
                    <p className="approach-description">{approach.description}</p>
                  </div>
                ))}
              </div>
              <div className="approach-indicators">
                {approaches.map((_, index) => (
                  <span 
                    key={index} 
                    className={`approach-indicator ${index === activeApproach ? 'active' : ''}`}
                    onClick={() => setActiveApproach(index)}
                  ></span>
                ))}
              </div>
            </div>
            
            <div className="about-card additional-info">
              <div className="about-card-header">
                <h3>Additional Information</h3>
                <div className="card-icon">{additionalInfo[activeInfo].icon}</div>
              </div>
              
              <div className="info-carousel">
                {additionalInfo.map((info, index) => (
                  <div 
                    key={info.title} 
                    className={`info-slide ${index === activeInfo ? 'active' : ''}`}
                  >
                    <h4 className="info-title">{info.title}</h4>
                    <p className="info-detail">{info.detail}</p>
                  </div>
                ))}
              </div>
              <div className="info-indicators">
                {additionalInfo.map((_, index) => (
                  <span 
                    key={index} 
                    className={`info-indicator ${index === activeInfo ? 'active' : ''}`}
                    onClick={() => setActiveInfo(index)}
                  ></span>
                ))}
              </div>
            </div>
           
            <div className="cta-container">
              <button 
                className="cta-button" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
              >
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;