import React from 'react';
import './about.css'; // Make sure this path is correct

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>To provide exceptional services and create value for our customers through innovation and dedication.</p>
      </section>
      
      <section className="vision">
        <h2>Our Vision</h2>
        <p>To be the leading provider in our industry, recognized for our commitment to excellence and customer satisfaction.</p>
      </section>
      
      <section className="team">
        <h2>Our Team</h2>
        <p>We are a group of passionate professionals dedicated to delivering the best solutions for our clients.</p>
      </section>
      
      <div className="contact-prompt">
        <p>Want to get in touch? <a href="/contact">Contact Us</a></p>
      </div>
    </div>
  );
};

export default AboutUs;