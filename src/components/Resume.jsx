import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume section-box" id="resume">
  

      <h2 className="section-title">Resume</h2>
      <p className="resume-intro">
        Click the button below to view or download my resume.
      </p>
      <a
        href="/resume/ANU resume.pdf"
        className="resume-btn"
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>
    </section>
  );
};

export default Resume;

