import React from 'react';
import { Activity, Languages, MessageSquare, Dices, Award } from 'lucide-react';
import './Extracurricular.css';

export default function Extracurricular() {
  const sports = [
    { name: "National-Level Throwball", detail: "Represented state/school in national competitive level" },
    { name: "National-Level Tennikoit", detail: "State & National level sports representation" }
  ];

  const hobbies = ["Chess (Tactical Strategy)", "Shuttle / Badminton"];

  const languages = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Tamil", level: "Native / Full Professional Proficiency" }
  ];

  const softSkills = [
    { title: "Strong Communication", desc: "Articulating technical concepts clearly to teams and stakeholders" },
    { title: "Presentation Skills", desc: "Delivering structured presentations and technical demos" },
    { title: "Analytical Problem Solving", desc: "Deconstructing complex bugs and logical challenges systematically" }
  ];

  return (
    <section className="section-padding extracurricular-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Beyond Engineering</span>
          <h2 className="section-heading">
            Sports, Languages & <span className="gradient-text">Soft Skills</span>
          </h2>
          <p className="section-subheading">
            Athletic achievements, strategic interests, communication skills, and linguistic background.
          </p>
        </div>

        <div className="extra-grid">
          {/* Sports & Athletics */}
          <div className="glass-card extra-card">
            <div className="extra-card-header">
              <Activity size={24} className="extra-icon cyan" />
              <h3 className="extra-card-title">National Sports Representation</h3>
            </div>
            <div className="extra-sports-list">
              {sports.map((sp, idx) => (
                <div key={idx} className="sport-item">
                  <Award size={18} className="sport-icon" />
                  <div>
                    <h4 className="sport-name">{sp.name}</h4>
                    <p className="sport-detail">{sp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="extra-hobbies-box">
              <span className="hobbies-label">
                <Dices size={16} /> Recreational Interests:
              </span>
              <div className="hobby-pills">
                {hobbies.map((hb, idx) => (
                  <span key={idx} className="hobby-pill">{hb}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="glass-card extra-card">
            <div className="extra-card-header">
              <MessageSquare size={24} className="extra-icon indigo" />
              <h3 className="extra-card-title">Languages & Soft Skills</h3>
            </div>

            <div className="extra-section-group">
              <h4 className="group-subheading">
                <Languages size={18} /> Languages
              </h4>
              <div className="lang-grid">
                {languages.map((lang, idx) => (
                  <div key={idx} className="lang-chip">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="extra-section-group">
              <h4 className="group-subheading">Soft Skills</h4>
              <div className="soft-skills-list">
                {softSkills.map((sk, idx) => (
                  <div key={idx} className="soft-skill-chip">
                    <span className="soft-title">{sk.title}</span>
                    <span className="soft-desc">{sk.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
