import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, Code2, FileDown } from 'lucide-react';
import './Footer.css';

const RESUME_URL = '/Kabine_R_Resume.pdf';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <Code2 size={22} className="logo-icon-f" />
              <span>KABINE<span className="logo-dot-f">.R</span></span>
            </a>
            <p className="footer-tagline">
              Software Engineer | Java Backend Developer | AI & Data Science
            </p>
          </div>

          <div className="footer-links">
            <span className="footer-links-label">Quick Links</span>
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer-nav-link">{l}</a>
            ))}
          </div>

          <div className="footer-socials-col">
            <span className="footer-links-label">Connect</span>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/kabine27" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href="https://github.com/Kabine555" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="GitHub">
                <Github size={17} />
              </a>
              <a href="mailto:kabine.r27@gmail.com" className="footer-social-btn" title="Email">
                <Mail size={17} />
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Resume">
                <FileDown size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Kabine R. All Rights Reserved. Built with React & Vite.
          </p>
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
            <ArrowUp size={15} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
