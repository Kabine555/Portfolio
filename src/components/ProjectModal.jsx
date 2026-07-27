import React from 'react';
import { X, Code2, Layers, CheckCircle2, Cpu, ExternalLink, Github } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-category-badge">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Tagline & Overview */}
          <p className="modal-overview">{project.longDescription || project.description}</p>

          {/* Tech Stack Badges */}
          <div className="modal-section">
            <h3 className="modal-subtitle">
              <Code2 size={18} className="modal-icon" />
              Technology Stack
            </h3>
            <div className="modal-tech-tags">
              {project.tech.map((t, idx) => (
                <span key={idx} className="modal-tech-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Key Features & Architecture Highlights */}
          <div className="modal-section">
            <h3 className="modal-subtitle">
              <Layers size={18} className="modal-icon" />
              Key System Capabilities & Highlights
            </h3>
            <div className="modal-features-list">
              {project.features.map((feat, idx) => (
                <div key={idx} className="modal-feature-item">
                  <CheckCircle2 size={16} className="modal-check" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Impact */}
          {project.impact && (
            <div className="modal-section">
              <h3 className="modal-subtitle">
                <Cpu size={18} className="modal-icon" />
                Technical Implementation & Engineering Focus
              </h3>
              <p className="modal-impact-text">{project.impact}</p>
            </div>
          )}
        </div>

        {/* Modal Footer with verified links or close */}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Close Breakdown
          </button>
          
          {/* Only render external buttons if verified links exist */}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Github size={16} />
              <span>GitHub Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
