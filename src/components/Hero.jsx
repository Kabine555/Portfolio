import React, { useState } from 'react';
import { ArrowRight, FileDown, Mail, Linkedin, Github, Terminal, Sparkles, Copy, Check, Play } from 'lucide-react';
import './Hero.css';

const RESUME_URL = "https://drive.google.com/file/d/1jzNwMotrXVZCuPPDVCJPd4PTtDkHIEJj/view?usp=sharing";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('java');

  const javaCodeSnippet = `package com.kabine.profile;

public class Engineer {
    private String name = "KABINE R";
    private String role = "Aspiring Software Engineer";
    private String degree = "B.Tech AI & Data Science";
    private String[] coreSkills = {"Java", "SQL", "MERN", "Python"};

    public void buildSolutions() {
        System.out.println("Building efficient software & solving real-world problems.");
    }
}`;

  const dsCodeSnippet = `# Developer Profile Data Pipeline
import pandas as pd

profile = {
    "Candidate": "Kabine R.",
    "Specialization": "AI & Data Science",
    "Focus": ["Data Analysis", "Predictive Modeling", "Visualization"],
    "CGPA": 8.3
}

print(f"Ready for Software Engineer & AI Opportunities: {profile['Candidate']}")`;

  const copyCode = () => {
    const textToCopy = activeTab === 'java' ? javaCodeSnippet : dsCodeSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="badge-sparkle" />
            <span>Open for Software Engineer & AI Roles</span>
          </div>

          <h1 className="hero-name">
            KABINE <span className="gradient-text">R.</span>
          </h1>

          <h2 className="hero-role-main">
            Aspiring Software Engineer
          </h2>

          <div className="hero-pills">
            <span className="pill">Java</span>
            <span className="pill-divider">•</span>
            <span className="pill">Software Development</span>
            <span className="pill-divider">•</span>
            <span className="pill">AI & Data Science</span>
          </div>

          <p className="hero-bio">
            An aspiring Software Engineer with strong knowledge of Java, SQL, and software development principles. Experienced in data analysis, visualization, and full-stack application development through internships and academic projects. Passionate about building efficient software solutions, solving real-world problems, and continuously improving technical skills.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href={RESUME_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
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
              href="https://linkedin.com/in/kabine-ramamoorthi-846730326" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            <a 
              href="https://github.com/Kabine555" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>

            <a 
              href="mailto:kabine.r27@gmail.com" 
              className="social-btn"
              title="Email Kabine"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive IDE Widget */}
        <div className="hero-terminal-wrapper">
          <div className="terminal-card">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>Kabine_Profile.{activeTab === 'java' ? 'java' : 'py'}</span>
              </div>
              <button className="copy-btn" onClick={copyCode} title="Copy code">
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Terminal Tabs */}
            <div className="terminal-tabs">
              <button 
                className={`tab-btn ${activeTab === 'java' ? 'active' : ''}`}
                onClick={() => setActiveTab('java')}
              >
                <span>Engineer.java</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'python' ? 'active' : ''}`}
                onClick={() => setActiveTab('python')}
              >
                <span>Analytics.py</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="terminal-body">
              <pre className="code-block">
                <code>{activeTab === 'java' ? javaCodeSnippet : dsCodeSnippet}</code>
              </pre>
            </div>

            {/* Console Output Bar */}
            <div className="terminal-footer">
              <div className="status-indicator">
                <Play size={12} className="play-icon" />
                <span>BUILD SUCCESSFUL (0.12s)</span>
              </div>
              <span className="status-badge">Java 17 / Python 3.11</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
