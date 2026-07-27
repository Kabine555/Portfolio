import React from 'react';
import { Award, Trophy, CheckCircle, FileCheck, ExternalLink } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const achievements = [
    {
      title: "2nd Place Winner – 24-Hour Hackathon",
      issuer: "National Tech Hackathon",
      type: "Achievement",
      highlight: true,
      icon: <Trophy size={24} className="trophy-icon" />,
      detail: "Recognized for building an innovative prototype under 24-hour time constraint with high algorithmic efficiency."
    },
    {
      title: "Python Workshop Certification",
      issuer: "IIT Madras",
      type: "Certification",
      date: "Dec 2023",
      highlight: true,
      icon: <Award size={24} />,
      detail: "Hands-on intensive workshop on Python programming fundamentals, data structures, and script development."
    },
    {
      title: "Java Programming Certificate",
      issuer: "Coursera",
      type: "Certification",
      highlight: false,
      icon: <FileCheck size={24} />,
      detail: "Mastered Object-Oriented Java design concepts, classes, inheritance, interfaces, and exception handling."
    },
    {
      title: "NPTEL: Cloud Computing",
      issuer: "NPTEL / IIT",
      type: "Certification",
      highlight: false,
      icon: <Award size={24} />,
      detail: "Comprehensive course on cloud infrastructure, virtualization, distributed storage, and service models."
    },
    {
      title: "NPTEL: Forest and Their Management (Elite)",
      issuer: "NPTEL / IIT",
      type: "Certification (Elite Grade)",
      highlight: true,
      icon: <Award size={24} />,
      detail: "Earned Elite recognition in environmental data management and ecological resources."
    }
  ];

  return (
    <section id="certifications" className="section-padding certifications-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Recognition & Learning</span>
          <h2 className="section-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            Verified course certifications, competitive hackathon awards, and NPTEL achievements.
          </p>
        </div>

        <div className="cert-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className={`glass-card cert-card ${item.highlight ? 'cert-highlight' : ''}`}>
              <div className="cert-card-header">
                <div className="cert-icon-box">{item.icon}</div>
                <div className="cert-type-pill">
                  {item.date ? `${item.type} • ${item.date}` : item.type}
                </div>
              </div>

              <h3 className="cert-title">{item.title}</h3>
              <span className="cert-issuer">{item.issuer}</span>
              <p className="cert-detail">{item.detail}</p>

              <div className="cert-verified-badge">
                <CheckCircle size={14} />
                <span>Verified Qualification</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
