import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="section about-section">
        <div className="section-title">
          <h2>About Tri-Tone</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <h3>Our Story</h3>
            <p>Tri-Tone Music School was founded in 2010 by a group of passionate musicians and educators who shared a vision: to create a nurturing environment where students of all ages could discover and develop their musical abilities.</p>
            <p>Over the years, we've grown from a small studio with just three teachers to a comprehensive music education center with state-of-the-art facilities and a team of accomplished instructors. Despite our growth, we've maintained our commitment to personalized instruction and musical excellence.</p>
            <p>Our name "Tri-Tone" represents the three pillars of our teaching philosophy: technical proficiency, creative expression, and musical appreciation. We believe that a balanced approach to these elements creates well-rounded musicians who not only play well but truly understand and love music.</p>
          </div>
          
          <div className="about-image fade-in">
            <div className="treble-clef"></div>
            <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Tri-Tone Music School" />
          </div>
        </div>
      </section>
      
      <section className="section mission-section">
        <div className="section-title">
          <h2>Our Mission</h2>
        </div>
        
        <div className="mission-content text-center fade-in">
          <p className="mission-statement">To inspire musical excellence through quality instruction that nurtures creativity, builds confidence, and fosters a lifelong appreciation for music.</p>
        </div>
        
        <div className="values-grid">
          <div className="value-card fade-in">
            <div className="value-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from our teaching methods to our student performances.</p>
          </div>
          
          <div className="value-card fade-in">
            <div className="value-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Creativity</h3>
            <p>We encourage creative expression and help students develop their unique musical voice.</p>
          </div>
          
          <div className="value-card fade-in">
            <div className="value-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community</h3>
            <p>We foster a supportive community where students connect through their shared love of music.</p>
          </div>
          
          <div className="value-card fade-in">
            <div className="value-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Passion</h3>
            <p>We are passionate about music and dedicated to instilling that passion in our students.</p>
          </div>
        </div>
      </section>
      
      <section className="section cta">
        <div className="cta-content fade-in">
          <h2>Experience the Tri-Tone Difference</h2>
          <p>Join our musical community and discover the joy of learning music in a supportive, inspiring environment.</p>
          <Link to="/contact" className="btn">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}

export default About;