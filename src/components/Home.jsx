import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home section-box" id="home">
      <div className="home-left">
        <p className="greeting">
</p>
        <h1>
         Hey I'm Anu Vidhya R 👋


        </h1>
        <h2>Web Developer </h2>
        <p className="description">
         I’m really into web development and enjoy creating websites and apps that load fast, look great, and work smoothly on any device. I'm passionate about using technology to fix everyday problems and make life easier.
Whether I’m building a feature with React or fixing bugs in a database, I love the process of learning and improving. I'm curious, determined, and always looking for ways to make things better.
        </p>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/anu-vidhya-674a77333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
             className="btn dark-btn"
             target="_blank"
             rel="noopener nereferrer">
            Hire Me
          </a>
        </div>
      </div>

      <div className="home-right">
        <img src="/images/profile.JPG" alt="profile" className="profile-pic" />
      </div>
    </section>
  );
};

export default Home;

