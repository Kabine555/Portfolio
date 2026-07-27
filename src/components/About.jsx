import React from 'react';
import { GraduationCap, Award, Code, Cpu, LineChart, CheckCircle2, UserCheck } from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: "B.Tech AI & Data Science",
      subtitle: "Nandha Engineering College, Erode",
      detail: "2023 - 2027 | Current CGPA: 8.3 / 10.0"
    },
    {
      icon: <Code size={24} />,
      title: "Core Specialization",
      subtitle: "Java & Software Engineering",
      detail: "OOP, SQL, Data Structures & Algorithms"
    },
    {
      icon: <LineChart size={24} />,
      title: "Data Analytics & ML",
      subtitle: "Python, SQL, Tableau & Power BI",
      detail: "Predictive Modeling & Dashboarding"
    },
    {
      icon: <Cpu size={24} />,
      title: "Full-Stack Development",
      subtitle: "MERN Stack & IoT Systems",
      detail: "Civic Issue Platform & AI Slide Maker"
    }
  ];

  const focusAreas = [
    "Java Programming & OOP Architecture",
    "Software Development Principles & Debugging",
    "Relational Database Design & Complex SQL Queries",
    "Data Analysis & Visualization with Tableau & Power BI",
    "Building Practical Full-Stack & AI Applications",
    "Continuous Skill Enhancement & Problem Solving"
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-badge">About Me</span>
          <h2 className="section-heading">
            Aspiring Software Engineer & <span className="gradient-text">Data Science Student</span>
          </h2>
          <p className="section-subheading">
            Passionate about transforming complex requirements into reliable, efficient software and data-driven solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Highlight Cards */}
          <div className="about-cards-col">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card about-card">
                <div className="about-card-icon">{item.icon}</div>
                <div className="about-card-content">
                  <h3 className="about-card-title">{item.title}</h3>
                  <p className="about-card-sub">{item.subtitle}</p>
                  <span className="about-card-detail">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Detailed Story & Focus */}
          <div className="about-story-col glass-card">
            <div className="story-header">
              <UserCheck size={28} className="story-icon" />
              <div>
                <h3 className="story-title">Engineering Background & Career Vision</h3>
                <span className="story-badge">Nandha Engineering College</span>
              </div>
            </div>

            <p className="story-text">
              I am currently pursuing my <strong>Bachelor of Technology in Artificial Intelligence and Data Science</strong> at <strong>Nandha Engineering College, Erode</strong>, maintaining a consistent academic record with a <strong>CGPA of 8.3/10.0</strong>.
            </p>

            <p className="story-text">
              My technical foundation centers around <strong>Java, Object-Oriented Programming, and SQL</strong> alongside modern data science tools. Through hands-on internships at <strong>Mist Software Solution</strong> and <strong>CubeAI Solutions Tech</strong>, I have gained real-world exposure to predictive modeling, Tableau dashboard creation, and full-stack application development.
            </p>

            <h4 className="focus-heading">Core Competencies & Focus Areas:</h4>
            <div className="focus-grid">
              {focusAreas.map((focus, idx) => (
                <div key={idx} className="focus-item">
                  <CheckCircle2 size={18} className="focus-check" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
