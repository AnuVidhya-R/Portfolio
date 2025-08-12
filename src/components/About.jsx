import React from 'react';
import './About.css';
import profile from './assets/Anu.jpeg'; // ✅ correct path and case
 // Use your own image

const About = () => {
  return (
   <section className="about section-box" id="about">

  <div className="about-left">
    <img src={profile} alt="Anu Vidhya" className="about-img" />
  </div>
  <div className="about-right">
    <h2 className="section-title">About Me</h2>
    <p className="about-description">
     👋 Hi! I’m Anu Vidhya R, a passionate and motivated B.Tech Computer Science and Business Systems student at Sri Eshwar College of Engineering. I’m deeply interested in building meaningful digital experiences through web development, problem solving, and software development.
     </p>
     <p className="about-description">
       🎯 My Goal: To become a skilled full-stack developer and contribute to impactful projects that make a difference.
      </p>
      <p className="about-description">
📫 Let’s connect! Whether it’s for collaboration, internship opportunities, or just a tech chat — I’m open and enthusiastic to connect.
    </p>
    <p className="about-description">
      My goal is to craft elegant, performant, and accessible applications that make a difference.
    </p>
  </div>
</section>

  );
};

export default About;

