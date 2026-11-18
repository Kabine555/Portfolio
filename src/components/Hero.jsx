import React, { useState } from 'react';
import { ArrowRight, FileDown, Mail, Linkedin, Github, Terminal, Sparkles, Copy, Check, Play, ChevronRight } from 'lucide-react';
import './Hero.css';

const RESUME_URL = '/Kabine_R_Resume.pdf';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('java');

  const javaCode = `package com.kabine.profile;

public class SoftwareEngineer {
    private String name    = "Kabine R";
    private String role    = "Java Backend Developer";
    private String degree  = "B.Tech AI & Data Science";
    private String[] skills = {
        "Java", "DSA", "MERN", "SQL", "Python"
    };
    private double cgpa = 8.3;

    public void buildScalableSoftware() {
        System.out.println(
          "Building reliable, scalable applications."
        );
    }
}`;

  const pyCode = `# Developer Profile — Kabine R
profile = {
    "name":       "Kabine R",
    "role":       "Java Backend Developer",
    "degree":     "B.Tech AI & Data Science",
    "cgpa":       8.3,
    "focus":      ["DSA", "Java", "MERN", "Data Science"],
    "internships": 3,
    "projects":   5,
    "research":   True  # MorphoPrint-OD (97.33% acc)
}

print(f"Open for opportunities: {profile['name']}")`;

  const copyCode = () => {
    navigator.clipboard.writeText(activeTab === 'java' ? javaCode : pyCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-grid" />
      <div className="container hero-container">

        {/* Left Column */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>Open for Software Engineer Roles</span>
          </div>

          <h1 className="hero-name">
            KABINE <span className="gradient-text">R</span>
          </h1>

          <h2 className="hero-role">
            Software Engineer
            <span className="role-divider"> | </span>
            Java Backend Developer
          </h2>

          <div className="hero-pills">
            <span className="pill">Java</span>
            <span className="pill-sep">•</span>
            <span className="pill">DSA</span>
            <span className="pill-sep">•</span>
            <span className="pill">MERN Stack</span>
            <span className="pill-sep">•</span>
            <span className="pill">AI & Data Science</span>
          </div>

          <p className="hero-bio">
            Java backend-focused B.Tech student in Artificial Intelligence and Data Science with strong
            DSA and problem-solving skills. Built full-stack and data-driven applications through
            internships and Java and MERN projects. Seeking opportunities to develop reliable and
            scalable software applications.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={RESUME_URL}
              download="Kabine_R_Resume.pdf"
              className="btn-secondary"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn-outline">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a
              href="https://linkedin.com/in/kabine27"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
              title="LinkedIn Profile"
            >
              <Linkedin size={19} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Kabine555"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
              title="GitHub Profile"
            >
              <Github size={19} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Widget */}
        <div className="hero-terminal-wrapper">
          <div className="terminal-card">
            {/* Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="terminal-title">
                <Terminal size={13} />
                <span>Kabine_Profile.{activeTab === 'java' ? 'java' : 'py'}</span>
              </div>
              <button className="copy-btn" onClick={copyCode} title="Copy code">
                {copied ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Tabs */}
            <div className="terminal-tabs">
              <button
                className={`tab-btn ${activeTab === 'java' ? 'active' : ''}`}
                onClick={() => setActiveTab('java')}
              >Engineer.java</button>
              <button
                className={`tab-btn ${activeTab === 'python' ? 'active' : ''}`}
                onClick={() => setActiveTab('python')}
              >Profile.py</button>
            </div>

            {/* Code */}
            <div className="terminal-body">
              <pre className="code-block">
                <code>{activeTab === 'java' ? javaCode : pyCode}</code>
              </pre>
            </div>

            {/* Footer */}
            <div className="terminal-footer">
              <div className="status-indicator">
                <Play size={11} className="play-icon" />
                <span>BUILD SUCCESSFUL (0.08s)</span>
              </div>
              <span className="status-badge">Java 17 / Python 3.11</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">8.3</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">3</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">5</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">1</span>
              <span className="stat-label">Research</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint">
        <ChevronRight size={16} className="scroll-chevron" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
