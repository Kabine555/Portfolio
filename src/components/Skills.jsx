import React, { useState } from 'react';
import { Code2, Database, BarChart3, Wrench, ShieldCheck, Code, Check } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack' },
    { id: 'prog_db', label: 'Languages & Databases' },
    { id: 'analytics', label: 'Data Analytics & Tools' },
    { id: 'core', label: 'Core Skills & Platforms' }
  ];

  const skillGroups = [
    {
      category: 'prog_db',
      title: 'Programming Languages',
      icon: <Code2 size={22} />,
      skills: [
        { name: 'Java', level: 'Core', highlight: true, note: 'OOP, Collections, Software Dev' },
        { name: 'Python', level: 'Basic', highlight: false, note: 'Data Analysis & Scripts' }
      ]
    },
    {
      category: 'prog_db',
      title: 'Databases',
      icon: <Database size={22} />,
      skills: [
        { name: 'SQL', level: 'Proficient', highlight: true, note: 'Queries, Joins, Relational Schema' },
        { name: 'MongoDB', level: 'Basic', highlight: false, note: 'NoSQL & MERN Applications' }
      ]
    },
    {
      category: 'analytics',
      title: 'Data Analytics & Visualization',
      icon: <BarChart3 size={22} />,
      skills: [
        { name: 'Tableau', level: 'Intermediate', highlight: true, note: 'Interactive Dashboards' },
        { name: 'Power BI', level: 'Intermediate', highlight: true, note: 'Business Analytics & Reports' },
        { name: 'MS Excel', level: 'Proficient', highlight: false, note: 'Data Manipulation & Analysis' }
      ]
    },
    {
      category: 'analytics',
      title: 'Developer Tools',
      icon: <Wrench size={22} />,
      skills: [
        { name: 'GitHub', level: 'Version Control', highlight: true, note: 'Repositories & Collaboration' },
        { name: 'VS Code', level: 'Primary IDE', highlight: false, note: 'Code Editing & Debugging' },
        { name: 'MS Word', level: 'Documentation', highlight: false, note: 'Technical Reports' }
      ]
    },
    {
      category: 'core',
      title: 'Core Software Principles',
      icon: <ShieldCheck size={22} />,
      skills: [
        { name: 'Object-Oriented Programming (OOP)', level: 'Core Focus', highlight: true, note: 'Abstractions & Encapsulation' },
        { name: 'Software Development', level: 'Practical', highlight: true, note: 'Full Lifecycle Principles' },
        { name: 'Debugging & Troubleshooting', level: 'Analytical', highlight: false, note: 'Code Fixes & Testing' },
        { name: 'Problem Solving', level: 'Algorithmic', highlight: true, note: 'Analytical Reasoning' }
      ]
    },
    {
      category: 'core',
      title: 'Coding Platforms',
      icon: <Code size={22} />,
      skills: [
        { name: 'HackerRank', level: 'Active', highlight: true, note: 'Problem Solving & SQL Challenges' },
        { name: 'LeetCode', level: 'Active', highlight: true, note: 'Data Structures Practice' }
      ]
    }
  ];

  const filteredGroups = activeCategory === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">Technical Arsenal</span>
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subheading">
            Structured breakdown of programming languages, software engineering concepts, databases, and analytical tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`skills-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="skills-grid">
          {filteredGroups.map((group, idx) => (
            <div key={idx} className="glass-card skill-group-card">
              <div className="group-header">
                <div className="group-icon">{group.icon}</div>
                <h3 className="group-title">{group.title}</h3>
              </div>

              <div className="skills-list">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={`skill-chip ${skill.highlight ? 'highlight' : ''}`}>
                    <div className="skill-chip-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-badge-level">{skill.level}</span>
                    </div>
                    <p className="skill-note">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
