import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Layers, FlaskConical, BarChart2, Wifi, Globe, ChevronRight } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      id: 'civic',
      icon: <Globe size={22} />,
      category: 'Full-Stack',
      categoryColor: 'emerald',
      title: 'Smart Civic Issue Reporting & Resolution System',
      tech: ['MERN Stack', 'JWT Auth', 'Image Upload', 'REST API'],
      description:
        'A full-stack civic issue tracker with authentication, image uploads, location-based reporting and status tracking.',
      features: [
        'JWT-based role authentication (Citizens vs Authorities)',
        'Image upload with location-based issue reporting',
        'Real-time status tracking — Pending → In Progress → Resolved',
        'Structured workflow for issue monitoring and resolution',
      ],
      githubUrl: null,
      accent: 'emerald',
      visual: '🏙️',
    },
    {
      id: 'ai-ppt',
      icon: <Layers size={22} />,
      category: 'AI & Full-Stack',
      categoryColor: 'lavender',
      title: 'AI Presentation Maker',
      tech: ['Python', 'MERN Stack', 'AI', 'REST API'],
      description:
        'An AI-powered web application that generates presentation slides from user input automatically.',
      features: [
        'AI-driven slide generation from topic or text prompts',
        'Web interface built on MERN stack',
        'Python AI backend integration via REST APIs',
        'Automated slide structure with headers and content',
      ],
      githubUrl: null,
      accent: 'lavender',
      visual: '🤖',
    },
    {
      id: 'morphoprint',
      icon: <FlaskConical size={22} />,
      category: 'Research / AI',
      categoryColor: 'emerald',
      title: 'MorphoPrint-OD — Blood Smear Recognition',
      tech: ['Python', 'PyTorch', 'EfficientNet-B4', 'Optimal Transport'],
      description:
        'A research framework for blood smear disease classification using cell embeddings and Sinkhorn optimal transport.',
      features: [
        'Models each smear as distribution of cell embeddings (EfficientNet-B4)',
        'Matches to disease prototypes using Sinkhorn optimal transport',
        'Open-world rejection of unfamiliar / OOD cases',
        'Co-authored research paper | Tested on 150-case external set',
      ],
      metrics: [
        { label: 'Accuracy', value: '97.33%' },
        { label: 'Macro-F1', value: '0.9732' },
        { label: 'OOD AUROC', value: '0.9650' },
      ],
      githubUrl: null,
      accent: 'emerald',
      visual: '🔬',
      isResearch: true,
    },
    {
      id: 'ev-dashboard',
      icon: <BarChart2 size={22} />,
      category: 'Data Analytics',
      categoryColor: 'lavender',
      title: 'Electric Vehicle Data Intelligence Dashboard',
      tech: ['Tableau', 'Data Analytics', 'Data Visualization'],
      description:
        'An interactive Tableau dashboard analyzing EV registrations, battery range and vehicle trends across states.',
      features: [
        'Analyzes EV registrations by model year, state, manufacturer and model',
        'Battery range trends and CAFV eligibility analysis',
        'Interactive charts, maps and dynamic filters',
        'Presents insights from large-scale EV registration data',
      ],
      githubUrl: null,
      accent: 'lavender',
      visual: '⚡',
    },
    {
      id: 'lifi',
      icon: <Wifi size={22} />,
      category: 'IoT / Hardware',
      categoryColor: 'emerald',
      title: 'Li-Fi-Based Data Communication System',
      tech: ['Arduino', 'LED', 'Li-Fi', 'Electronics'],
      description:
        'A Li-Fi-based wireless data communication prototype using LED light for transmitting information.',
      features: [
        'Visible Light Communication (VLC) for data transmission',
        'LED-based data encoding and transmission',
        'Arduino microcontroller-based implementation',
        'Explores wireless communication without RF interference',
      ],
      githubUrl: null,
      accent: 'emerald',
      visual: '💡',
    },
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
            Practical applications built across Full-Stack Development, AI, Research, Data Analytics and IoT.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`project-card glass-card project-card--${proj.accent}`}
              onMouseEnter={() => setHovered(proj.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card Top */}
              <div className="project-card-top">
                <div className={`project-icon project-icon--${proj.accent}`}>{proj.icon}</div>
                <span className={`project-cat-pill project-cat-pill--${proj.categoryColor}`}>
                  {proj.category}
                </span>
              </div>

              {/* Visual Emoji */}
              <div className="project-visual">{proj.visual}</div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              {/* Research Metrics */}
              {proj.isResearch && proj.metrics && (
                <div className="research-metrics">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="metric-item">
                      <span className="metric-value">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Features */}
              <ul className="project-features">
                {proj.features.map((f, i) => (
                  <li key={i}>
                    <ChevronRight size={13} className={`feat-icon feat-icon--${proj.accent}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="project-tech-tags">
                {proj.tech.map((t, i) => (
                  <span key={i} className={`tech-tag tech-tag--${proj.accent}`}>{t}</span>
                ))}
              </div>

              {/* GitHub Button */}
              {proj.githubUrl && (
                <div className="project-links">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm project-github-btn"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
