import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import './Education.css';

export default function Education() {
  const edu = {
    institution: 'Nandha Engineering College',
    location: 'Erode, Tamil Nadu',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Artificial Intelligence and Data Science',
    duration: '2023 – 2027',
    cgpa: '8.3 / 10',
    highlights: [
      'Specializing in AI, Data Science, Java Software Development and DSA',
      'Completed 3 internships and contributed to research during coursework',
      'Active participant in hackathons — 2nd place in 24-Hour Makeathon',
      'Consistent academic performance with 8.3 CGPA',
    ],
  };

  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Academic Background</span>
          <h2 className="section-heading">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subheading">
            My academic foundation in Artificial Intelligence, Data Science and Computer Science.
          </p>
        </div>

        <div className="edu-card-wrapper">
          <div className="edu-main-card glass-card">
            {/* Header */}
            <div className="edu-card-header">
              <div className="edu-icon-wrap">
                <GraduationCap size={28} />
              </div>
              <div className="edu-header-info">
                <h3 className="edu-institution">{edu.institution}</h3>
                <span className="edu-location-row">
                  <MapPin size={14} />
                  {edu.location}
                </span>
              </div>
              <div className="edu-duration-badge">
                <Calendar size={13} />
                <span>{edu.duration}</span>
              </div>
            </div>

            {/* Degree Info */}
            <div className="edu-degree-block">
              <h4 className="edu-degree">{edu.degree}</h4>
              <span className="edu-field">{edu.field}</span>
            </div>

            {/* CGPA */}
            <div className="edu-cgpa-pill">
              <Award size={16} />
              <span>CGPA: <strong>{edu.cgpa}</strong></span>
            </div>

            {/* Highlights */}
            <div className="edu-highlights">
              <h5 className="edu-highlights-title">Highlights</h5>
              <ul>
                {edu.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} className="edu-check" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
