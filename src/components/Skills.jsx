import React from 'react';
import { Code2, Database, Globe, Wrench, BarChart3, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillGroups = [
    {
      icon: <Code2 size={20} />,
      title: 'Programming Languages',
      color: 'emerald',
      skills: ['Java', 'Python (Basic)', 'SQL (Basic)'],
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Core Computer Science',
      color: 'lavender',
      skills: ['Data Structures & Algorithms', 'Computer Networks', 'Object-Oriented Programming'],
    },
    {
      icon: <Globe size={20} />,
      title: 'Backend & Web Development',
      color: 'emerald',
      skills: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    },
    {
      icon: <Database size={20} />,
      title: 'Database',
      color: 'lavender',
      skills: ['MongoDB (Basic)', 'SQL (Basic)'],
    },
    {
      icon: <Wrench size={20} />,
      title: 'Tools',
      color: 'emerald',
      skills: ['Git', 'GitHub', 'VS Code'],
    },
    {
      icon: <BarChart3 size={20} />,
      title: 'Data Analytics & Visualization',
      color: 'lavender',
      skills: ['Tableau', 'Power BI', 'MS Excel'],
    },
    {
      icon: <Terminal size={20} />,
      title: 'Coding Platforms',
      color: 'emerald',
      skills: ['LeetCode'],
    },
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Technical Arsenal</span>
          <h2 className="section-heading">
            Skills &amp; <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subheading">
            A structured breakdown of my programming languages, core CS fundamentals, web technologies, tools and platforms.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i} className={`glass-card skill-group-card skill-group--${group.color}`}>
              <div className="skill-group-header">
                <div className={`skill-group-icon icon--${group.color}`}>{group.icon}</div>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((s, j) => (
                  <span key={j} className={`skill-tag skill-tag--${group.color}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
