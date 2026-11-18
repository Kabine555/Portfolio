import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle, Cpu, Database, BookOpen } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: 'AI & Data Science Intern',
      company: 'Cube AI Solutions Tech',
      duration: 'December 2025 – January 2026',
      location: 'On-site, Tiruchengode',
      badge: 'Internship',
      icon: <Cpu size={20} />,
      color: 'emerald',
      points: [
        'Built an AI-powered Presentation Maker using Python and the MERN stack.',
        'Worked with Java and the MERN stack on application development.',
        'Created interactive Tableau dashboards to visualize and communicate data insights.',
      ],
      skills: ['Python', 'Java', 'MERN Stack', 'Tableau'],
    },
    {
      role: 'Data Science Intern',
      company: 'Mist Software Solution',
      duration: 'June 2025 – July 2025',
      location: 'On-site, Coimbatore',
      badge: 'Internship',
      icon: <Database size={20} />,
      color: 'lavender',
      points: [
        'Performed data analysis and predictive modelling using Python and SQL.',
        'Worked with structured datasets to identify patterns and generate insights.',
      ],
      skills: ['Python', 'SQL', 'Data Analysis', 'Predictive Modelling'],
    },
    {
      role: 'Data Science Intern',
      company: 'Ether Infotech',
      duration: '28 December 2024 – 16 January 2025',
      location: 'Coimbatore, Tamil Nadu',
      badge: 'Internship',
      icon: <BookOpen size={20} />,
      color: 'emerald',
      points: [
        'Completed internship training in the Data Science domain.',
        'Learned introductory concepts and fundamentals of Data Science.',
        'Gained exposure to the Data Science field through internship training.',
      ],
      skills: ['Data Science', 'Python Basics'],
    },
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
            Industry experience gained through internships in AI, Data Science and Full-Stack development.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Line + Dot */}
              <div className="timeline-track">
                <div className={`timeline-dot timeline-dot--${exp.color}`}>
                  {exp.icon}
                </div>
                {index < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Card */}
              <div className={`timeline-content glass-card timeline-card--${exp.color}`}>
                <div className="timeline-header">
                  <div className="timeline-header-left">
                    <span className={`exp-badge exp-badge--${exp.color}`}>{exp.badge}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-meta-item">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                    <span className="exp-meta-item">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>
                      <CheckCircle size={15} className={`point-icon point-icon--${exp.color}`} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-skills-tags">
                  {exp.skills.map((s, i) => (
                    <span key={i} className={`exp-skill-pill exp-skill-pill--${exp.color}`}>{s}</span>
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
