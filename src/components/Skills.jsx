import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills section-box" id="skills">

      <h2 className="section-title">Skills</h2>
      <p className="skills-intro">
        Here are some technologies and tools I work with:
      </p>
      <div className="skills-grid">
        <div className="skill-card">💻 HTML, CSS, JavaScript</div>
        <div className="skill-card">⚛️ React.js, Node.js</div>
        <div className="skill-card">🛢️ MongoDB, MySQL</div>
        <div className="skill-card">🔧 Git, GitHub</div>
      </div>
    </section>
  );
};

export default Skills;
