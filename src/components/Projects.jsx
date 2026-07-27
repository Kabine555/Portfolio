import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, Code, Layers, Sparkles, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'civic-reporting',
      category: 'Full-Stack & Java',
      title: 'Smart Civic Issue Reporting and Resolution System',
      tech: ['MERN Stack', 'Java', 'SQL', 'JWT Auth'],
      description: 'Developed a full-stack web application for reporting, tracking, and managing civic issues.',
      longDescription: 'A comprehensive full-stack municipal management application enabling citizens to report community issues (e.g., sanitation, road damage, lighting) while providing local authorities with automated task prioritization and resolution workflows.',
      features: [
        'Citizen issue logging with location coordinates and photo evidence upload',
        'Role-based access control (Citizens vs Municipal Employees)',
        'Real-time status tracking timeline (Pending, Assigned, In Progress, Resolved)',
        'Java and SQL backend services for query execution and issue indexing'
      ],
      impact: 'Designed to streamline municipal response times and enhance civic engagement through structured status tracking and database normalization.',
      githubUrl: null, // No fake links per strict prompt rule
      liveUrl: null
    },
    {
      id: 'ai-presentation-maker',
      category: 'AI & Full-Stack',
      title: 'AI Presentation Maker',
      tech: ['Python', 'MERN Stack', 'AI Models', 'REST API'],
      description: 'Developed an AI-powered application to generate presentation slides from user input.',
      longDescription: 'An intelligent web application that converts raw text prompts or topic summaries into structured, beautifully formatted presentation slides using AI natural language understanding.',
      features: [
        'Natural Language Processing pipeline parsing topic outlines and key takeaways',
        'Automated slide structure creation with customizable headers and bullet points',
        'Interactive preview editor allowing rapid content customization',
        'MERN stack web frontend with Python AI backend microservices'
      ],
      impact: 'Engineered during internship work at CubeAI Solutions Tech to dramatically accelerate content creation workflows for presentations.',
      githubUrl: null,
      liveUrl: null
    },
    {
      id: 'lifi-communication',
      category: 'IoT & Hardware Systems',
      title: 'Li-Fi-Based Data Communication System',
      tech: ['IoT', 'Arduino', 'Li-Fi Photodiodes', 'C/C++'],
      description: 'Developed an IoT-based Li-Fi system for wireless data transmission using LED light.',
      longDescription: 'An innovative wireless communication prototype transmitting data securely through visible light waves utilizing LED illumination and high-speed photodiode optical sensors.',
      features: [
        'Optical data modulation transmitting sensor data using LED light pulses',
        'Arduino microcontroller interfacing for real-time signal transmission',
        'Noise filtration circuitry maximizing signal-to-noise ratio',
        'High-security point-to-point wireless link immune to RF interference'
      ],
      impact: 'Demonstrated high-speed optical wireless data transmission for environments where radio frequencies are hazardous or restricted.',
      githubUrl: null,
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Engineering Work</span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Practical applications built across Software Engineering, Full-Stack Development, AI, and IoT Systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-card project-card">
              <div className="project-card-top">
                <div className="project-icon-badge">
                  <FolderGit2 size={24} />
                </div>
                <span className="project-cat-pill">{proj.category}</span>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              <div className="project-tech-tags">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="project-card-bottom">
                <button 
                  className="btn-secondary btn-sm view-details-btn"
                  onClick={() => setSelectedProject(proj)}
                >
                  <Eye size={16} />
                  <span>View Project Breakdown</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
