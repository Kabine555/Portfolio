import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle, Database, Cpu, Layout } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "AI & Data Science Intern",
      company: "CubeAI Solutions Tech Pvt. Ltd.",
      location: "Tiruchengode",
      badge: "Internship",
      icon: <Cpu size={22} />,
      points: [
        "Developed an AI Presentation Maker application generating slides from user input.",
        "Created interactive Tableau dashboards leveraging Java, MERN, and SQL for analytics reporting."
      ],
      skills: ["Java", "MERN Stack", "Tableau", "SQL", "AI Systems"]
    },
    {
      role: "Data Science Intern",
      company: "Mist Software Solution",
      location: "Coimbatore",
      badge: "Internship",
      icon: <Database size={22} />,
      points: [
        "Performed data analysis and predictive modeling using Python and SQL to uncover data insights.",
        "Evaluated datasets and optimized queries to support analytical decision-making."
      ],
      skills: ["Python", "SQL", "Data Analysis", "Predictive Modeling"]
    }
  ];

  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Career & Internships</span>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            Practical industry experience gained through internships in AI, Data Science, and Software Development.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                {exp.icon}
              </div>

              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <span className="exp-badge">{exp.badge}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-location">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="point-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-skills-tags">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="exp-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
