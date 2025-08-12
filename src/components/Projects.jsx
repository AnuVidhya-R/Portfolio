import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects section-box" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="projects-intro">Here are some of the projects I’ve worked on:</p>
      
      <div className="projects-grid">
        <div className="project-card">
          <center>
          <h3>💼 Portfolio Website</h3>
          <p>A personal portfolio website developed using React to showcase my technical skills, projects, certifications, and achievements. Designed with a clean and responsive layout, it features smooth navigation between sections like About, Skills, Projects, Resume, and Contact. This project reflects my frontend development capabilities and my attention to professional UI/UX design.</p></center>
        </div>
        <div className="project-card">
            <center>
          <h3>🍽️ Food Waste Management App</h3>
          <p>Developed a mobile application to help users track food inventory, reduce household food waste, and connect with local donation centers. Integrated barcode scanning and manual entry to manage grocery items with expiry date tracking. Used Spoonacular API to dynamically generate recipes based on leftover ingredients. Implemented waste analytics dashboard to show users the amount of food and money saved.</p></center>
        </div>
        <div className="project-card">
           <center>
          <h3>🛒 E-Commerce Frontend</h3>
          <p>Built a dynamic and responsive e-commerce website using Django as the backend framework and HTML, CSS, and JavaScript for the frontend. The project includes features such as user authentication, product listing, cart management, and order placement. Designed and implemented backend logic for handling product data, user sessions, and secure login/logout functionality. This project demonstrates practical knowledge of full-stack web development and showcases the integration of frontend design with Django's backend capabilities.</p></center>
        </div>
      </div>
    </section>
  );
};

export default Projects;

