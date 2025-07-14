import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend here
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Let's Build Something Amazing Together</h2>
          <p className="contact-subtitle">
            Ready to bring your full stack project to life? Let's discuss how we can collaborate!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>gaisom100@gmail.com</p>
              <a href="mailto:gaisom100@gmail.com" className="contact-link">
                Send Email
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>052-4031660</p>
              <a href="tel:+972524031660" className="contact-link">
                Call Now
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>Professional Network</p>
              <a href="https://linkedin.com/in/gai-shukrun" className="contact-link" target="_blank" rel="noopener noreferrer">
                Connect
              </a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <p>View My Code</p>
              <a href="https://github.com/GaiShukrun" className="contact-link" target="_blank" rel="noopener noreferrer">
                Explore Projects
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project idea or how we can work together..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-footer">
          <div className="availability">
            <h4>🌟 Currently Available For:</h4>
            <div className="availability-list">
              <div className="availability-item">
                <span className="availability-icon">💻</span>
                <span>Full Stack Web Development</span>
              </div>
              <div className="availability-item">
                <span className="availability-icon">📱</span>
                <span>React Native Mobile Apps</span>
              </div>
              <div className="availability-item">
                <span className="availability-icon">🎨</span>
                <span>Interactive Data Visualizations</span>
              </div>
              <div className="availability-item">
                <span className="availability-icon">🤝</span>
                <span>Technical Consulting</span>
              </div>
            </div>
          </div>
          
          <div className="response-time">
            <p>⚡ <strong>Quick Response:</strong> I typically respond within 24 hours</p>
            <p>🎯 <strong>Based in:</strong> Israel | Available for remote work worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;