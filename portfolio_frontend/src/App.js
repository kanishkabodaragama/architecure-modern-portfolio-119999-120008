import React, { useState, useEffect } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Effect to handle smooth scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // PUBLIC_INTERFACE
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Fixed Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Architect</span>
          </div>
          <div className="nav-menu">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-item ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Modern Architecture Studio</h1>
            <p className="hero-subtitle">
              Creating innovative spaces that blend functionality with artistic vision
            </p>
            <p className="hero-description">
              I'm a freelance architect passionate about designing sustainable, modern spaces 
              that enhance the way people live and work. With a focus on clean lines, 
              natural light, and thoughtful integration with the environment.
            </p>
            <button 
              className="cta-button"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                With over 8 years of experience in architectural design, I specialize in 
                creating modern, sustainable buildings that respond to their environment 
                and the needs of their inhabitants.
              </p>
              <p className="about-paragraph">
                My approach combines traditional architectural principles with contemporary 
                design thinking, always prioritizing functionality, sustainability, and 
                aesthetic appeal. I believe that great architecture should enhance daily 
                life while respecting the natural environment.
              </p>
              <p className="about-paragraph">
                I hold a Master's degree in Architecture from a prestigious university 
                and am licensed to practice in multiple states. My work has been featured 
                in several architectural publications and has received recognition from 
                industry organizations.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Portrait Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {[
              {
                id: 1,
                title: "Modern Family Residence",
                description: "A contemporary home designed for a young family, featuring open floor plans, sustainable materials, and seamless indoor-outdoor living.",
                category: "Residential"
              },
              {
                id: 2,
                title: "Urban Office Complex",
                description: "A 6-story office building in downtown, incorporating green building practices and flexible workspace design.",
                category: "Commercial"
              },
              {
                id: 3,
                title: "Community Arts Center",
                description: "A cultural hub designed to bring the community together through art, featuring gallery spaces and performance venues.",
                category: "Public"
              },
              {
                id: 4,
                title: "Sustainable Housing Development",
                description: "A 20-unit housing project focusing on affordability and environmental sustainability.",
                category: "Residential"
              },
              {
                id: 5,
                title: "Renovation: Historic Library",
                description: "Restoration and modernization of a 1920s library, preserving historical elements while adding contemporary functionality.",
                category: "Renovation"
              },
              {
                id: 6,
                title: "Minimalist Retreat",
                description: "A private retreat in the mountains, designed for contemplation and connection with nature.",
                category: "Residential"
              }
            ].map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>Project Image</span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Design & Planning</h3>
              <ul className="skill-list">
                <li>Architectural Design</li>
                <li>Space Planning</li>
                <li>Site Analysis</li>
                <li>Concept Development</li>
                <li>Design Documentation</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Technical Skills</h3>
              <ul className="skill-list">
                <li>AutoCAD</li>
                <li>Revit</li>
                <li>SketchUp</li>
                <li>Rhino</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Specializations</h3>
              <ul className="skill-list">
                <li>Sustainable Design</li>
                <li>LEED Certification</li>
                <li>Universal Design</li>
                <li>Historic Preservation</li>
                <li>3D Visualization</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Project Management</h3>
              <ul className="skill-list">
                <li>Construction Administration</li>
                <li>Building Codes</li>
                <li>Zoning Regulations</li>
                <li>Client Relations</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Discuss Your Project</h3>
              <p>
                I'd love to hear about your architectural needs and discuss how we can 
                bring your vision to life. Whether you're planning a new build, renovation, 
                or just exploring possibilities, I'm here to help.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong> hello@architectstudio.com
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> (555) 123-4567
                </div>
                <div className="contact-item">
                  <strong>Location:</strong> San Francisco, CA
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
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
                  required
                  placeholder="Project inquiry"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Modern Architecture Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
