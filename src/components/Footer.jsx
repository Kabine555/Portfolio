import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, Code2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <Code2 size={24} className="logo-icon" />
              <span>KABINE<span className="logo-dot">.R</span></span>
            </a>
            <p className="footer-tagline">
              Aspiring Software Engineer • Java | Software Development | AI & Data Science
            </p>
          </div>

          <div className="footer-socials">
            <a 
              href="https://linkedin.com/in/kabine-ramamoorthi-846730326" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/Kabine555" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:kabine.r27@gmail.com" 
              className="footer-social-btn"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Kabine R. All Rights Reserved.
          </p>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            title="Scroll Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
