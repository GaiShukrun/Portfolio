import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '🔷' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'HTML5', level: 98, icon: '🌐' },
    { name: 'CSS3', level: 92, icon: '🎨' },
    { name: 'React Native', level: 88, icon: '📱' }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 92, icon: '🟢' },
    { name: 'Express.js', level: 90, icon: '🚀' },
    { name: 'RESTful APIs', level: 94, icon: '🔗' },
    { name: 'JWT Auth', level: 87, icon: '🔐' },
    { name: 'Mongoose ODM', level: 85, icon: '🍃' }
  ];

  const databaseSkills = [
    { name: 'MongoDB', level: 90, icon: '🍃' },
    { name: 'Database Design', level: 88, icon: '🗄️' },
    { name: 'Data Modeling', level: 85, icon: '📊' }
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', level: 95, icon: '🐙' },
    { name: 'Expo', level: 88, icon: '📲' },
    { name: 'D3.js', level: 82, icon: '📈' },
    { name: 'npm/yarn', level: 90, icon: '📦' }
  ];

  const SkillCategory = ({ title, skills, color }: { title: string; skills: any[]; color: string }) => (
    <div className="skill-category">
      <h3 className="category-title" style={{ color }}>{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ 
                  width: `${skill.level}%`,
                  backgroundColor: color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <p className="skills-subtitle">
            Full Stack Development Expertise with Modern Technologies
          </p>
        </div>
        
        <div className="skills-content">
          <div className="skills-overview">
            <div className="overview-card">
              <div className="overview-icon">🎯</div>
              <h4>Full Stack Focus</h4>
              <p>End-to-end development from database to user interface</p>
            </div>
            
            <div className="overview-card">
              <div className="overview-icon">⚡</div>
              <h4>Modern Stack</h4>
              <p>MERN stack with TypeScript for robust applications</p>
            </div>
            
            <div className="overview-card">
              <div className="overview-icon">🔄</div>
              <h4>Continuous Growth</h4>
              <p>Always learning and adapting to new technologies</p>
            </div>
          </div>
          
          <div className="skills-categories">
            <SkillCategory 
              title="🎨 Frontend Development" 
              skills={frontendSkills} 
              color="#61dafb" 
            />
            
            <SkillCategory 
              title="⚙️ Backend Development" 
              skills={backendSkills} 
              color="#68d391" 
            />
            
            <SkillCategory 
              title="🗄️ Database & Storage" 
              skills={databaseSkills} 
              color="#4ade80" 
            />
            
            <SkillCategory 
              title="🛠️ Tools & Technologies" 
              skills={toolsSkills} 
              color="#a78bfa" 
            />
          </div>
          
          <div className="skills-footer">
            <div className="experience-highlight">
              <h3>🏆 Key Strengths</h3>
              <div className="strengths-grid">
                <div className="strength-item">
                  <strong>Responsive Design:</strong> Creating mobile-first, accessible applications
                </div>
                <div className="strength-item">
                  <strong>API Development:</strong> Building scalable RESTful services
                </div>
                <div className="strength-item">
                  <strong>State Management:</strong> Complex application state handling
                </div>
                <div className="strength-item">
                  <strong>Performance:</strong> Optimizing for speed and user experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;