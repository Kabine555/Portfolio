import React from 'react';
import { GraduationCap, Code, LineChart, Cpu, CheckCircle2, UserCheck, Briefcase, FlaskConical } from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap size={22} />,
      title: 'B.Tech AI & Data Science',
      subtitle: 'Nandha Engineering College, Erode',
      detail: '2023 – 2027 | CGPA: 8.3 / 10',
      color: 'emerald'
    },
    {
      icon: <Code size={22} />,
      title: 'Java Backend Focus',
      subtitle: 'DSA, OOP & Software Engineering',
      detail: 'Strong problem-solving foundation',
      color: 'lavender'
    },
    {
      icon: <Briefcase size={22} />,
      title: '3 Internships',
      subtitle: 'AI, Data Science & Full-Stack',
      detail: 'Real-world industry experience',
      color: 'emerald'
    },
    {
      icon: <FlaskConical size={22} />,
      title: 'Research Contributor',
      subtitle: 'MorphoPrint-OD — 97.33% Accuracy',
      detail: 'Blood smear recognition research',
      color: 'lavender'
    }
  ];

  const focusAreas = [
    'Java Backend Development & OOP Principles',
    'Data Structures & Algorithms (DSA)',
    'Full-Stack MERN Application Development',
    'Data Analysis & Visualization — Tableau, Power BI',
    'REST APIs & Database Design (SQL, MongoDB)',
    'Problem Solving & Competitive Programming',
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">About Me</span>
          <h2 className="section-heading">
            Java Backend Developer &amp; <span className="gradient-text">AI Student</span>
          </h2>
          <p className="section-subheading">
            Passionate about building reliable, scalable software and data-driven solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Highlight Cards */}
          <div className="about-cards-col">
            {highlights.map((item, i) => (
              <div key={i} className={`glass-card about-card about-card--${item.color}`}>
                <div className={`about-card-icon icon--${item.color}`}>{item.icon}</div>
                <div className="about-card-content">
                  <h3 className="about-card-title">{item.title}</h3>
                  <p className="about-card-sub">{item.subtitle}</p>
                  <span className="about-card-detail">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Story Column */}
          <div className="about-story-col glass-card">
            <div className="story-header">
              <UserCheck size={26} className="story-icon" />
              <div>
                <h3 className="story-title">Professional Summary</h3>
                <span className="story-badge">Nandha Engineering College</span>
              </div>
            </div>

            <p className="story-text">
              Java backend-focused B.Tech student in <strong>Artificial Intelligence and Data Science</strong> with
              strong DSA and problem-solving skills. Built full-stack and data-driven applications through
              internships and Java and MERN projects. Seeking opportunities to develop reliable and scalable
              software applications.
            </p>

            <p className="story-text">
              Through three internships at <strong>Cube AI Solutions Tech</strong>, <strong>Mist Software Solution</strong>,
              and <strong>Ether Infotech</strong>, I gained real-world exposure to AI development, predictive modelling,
              Tableau dashboard creation, and full-stack application development.
            </p>

            <h4 className="focus-heading">Core Focus Areas</h4>
            <div className="focus-grid">
              {focusAreas.map((f, i) => (
                <div key={i} className="focus-item">
                  <CheckCircle2 size={16} className="focus-check" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
