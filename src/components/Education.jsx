import React from 'react';
import { GraduationCap, School, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Education.css';

export default function Education() {
  const educationList = [
    {
      institution: "Nandha Engineering College",
      location: "Erode, Tamil Nadu",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Artificial Intelligence and Data Science",
      duration: "2023 – 2027",
      cgpa: "8.3 / 10.0 (Current CGPA)",
      icon: <GraduationCap size={24} />,
      highlights: [
        "Specializing in Machine Learning, Data Analytics, and Java Software Development",
        "Active participant in technical hackathons and competitive programming workshops",
        "Consistent academic track record across engineering coursework"
      ]
    },
    {
      institution: "Sri Sathya Sai Matriculation Higher Secondary School",
      location: "Erode, Tamil Nadu",
      degree: "Higher Secondary Education (HSC)",
      field: "Science & Mathematics Stream",
      duration: "2020 – 2023",
      cgpa: null,
      icon: <School size={24} />,
      highlights: [
        "Completed Higher Secondary Education with focus on Physics, Chemistry, and Mathematics",
        "Represented school in national-level sports tournaments (Throwball & Tennikoit)"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Academic Timeline</span>
          <h2 className="section-heading">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subheading">
            My academic journey and foundation in Artificial Intelligence, Data Science, and Computer Science fundamentals.
          </p>
        </div>

        <div className="education-grid">
          {educationList.map((item, idx) => (
            <div key={idx} className="glass-card edu-card">
              <div className="edu-card-top">
                <div className="edu-icon-wrap">{item.icon}</div>
                <div className="edu-time-badge">
                  <Calendar size={14} />
                  <span>{item.duration}</span>
                </div>
              </div>

              <h3 className="edu-institution">{item.institution}</h3>
              <p className="edu-location">
                <MapPin size={14} />
                {item.location}
              </p>

              <div className="edu-degree-box">
                <h4 className="edu-degree">{item.degree}</h4>
                <span className="edu-field">{item.field}</span>
              </div>

              {item.cgpa && (
                <div className="edu-cgpa-pill">
                  <Award size={16} />
                  <span>Current CGPA: <strong>{item.cgpa}</strong></span>
                </div>
              )}

              <ul className="edu-highlights">
                {item.highlights.map((hl, hIdx) => (
                  <li key={hIdx}>
                    <CheckCircle2 size={15} className="edu-check" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
