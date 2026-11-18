import React from 'react';
import { Trophy, Award, FileCheck, Cloud } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const achievements = [
    {
      icon: <Trophy size={22} />,
      type: 'Achievement',
      typeColor: 'emerald',
      title: '2nd Place – 24-Hour Makeathon',
      issuer: 'National Level Event',
      detail: 'Recognized for building an innovative prototype within a 24-hour challenge. Demonstrated rapid problem-solving and technical execution under pressure.',
    },
    {
      icon: <Award size={22} />,
      type: 'Certification',
      typeColor: 'lavender',
      title: 'Python Workshop',
      issuer: 'IIT Madras – December 2023',
      detail: 'Hands-on intensive workshop on Python programming fundamentals, data structures and script development conducted by IIT Madras.',
    },
    {
      icon: <FileCheck size={22} />,
      type: 'Certification',
      typeColor: 'emerald',
      title: 'Java Programming Certificate',
      issuer: 'Coursera',
      detail: 'Completed certification covering Java OOP principles, classes, inheritance, interfaces and exception handling through Coursera.',
    },
    {
      icon: <Cloud size={22} />,
      type: 'Certification',
      typeColor: 'lavender',
      title: 'NPTEL – Cloud Computing',
      issuer: 'NPTEL / IIT',
      detail: 'Comprehensive NPTEL course on cloud infrastructure, virtualization, distributed storage, service models and cloud security concepts.',
    },
  ];

  return (
    <section id="certifications" className="section-padding certifications-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Certifications & Achievements</span>
          <h2 className="section-heading">
            Credentials &amp; <span className="gradient-text">Recognition</span>
          </h2>
          <p className="section-subheading">
            Professional certifications and achievements that complement my technical education.
          </p>
        </div>

        <div className="certs-grid">
          {achievements.map((item, i) => (
            <div key={i} className={`cert-card glass-card cert-card--${item.typeColor}`}>
              <div className="cert-card-top">
                <div className={`cert-icon cert-icon--${item.typeColor}`}>{item.icon}</div>
                <span className={`cert-type-pill cert-type-pill--${item.typeColor}`}>{item.type}</span>
              </div>
              <h3 className="cert-title">{item.title}</h3>
              <p className="cert-issuer">{item.issuer}</p>
              <p className="cert-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
