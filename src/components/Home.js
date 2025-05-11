import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content fade-in">
          <h2>Discover Your Musical Potential</h2>
          <p>At Tri-Tone Music School, we believe every student has the ability to create beautiful music. Our experienced faculty and comprehensive programs provide the perfect environment for musical growth and exploration.</p>
          <div className="hero-buttons">
            <Link to="/programs" className="btn">Explore Programs</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section featured-programs">
        <div className="section-title">
          <h2>Our Programs</h2>
        </div>
        <div className="programs-grid">
          <div className="program-card fade-in">
            <div className="program-icon">
              <i className="fas fa-music" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Piano Lessons</h3>
            <p>From classical to contemporary, our piano programs cater to all ages and skill levels.</p>
            <Link to="/programs" className="program-link">Learn More</Link>
          </div>
          
          <div className="program-card fade-in">
            <div className="program-icon">
              <i className="fas fa-guitar" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Guitar Lessons</h3>
            <p>Acoustic, electric, or bass - our guitar instructors are accomplished musicians in all styles.</p>
            <Link to="/programs" className="program-link">Learn More</Link>
          </div>
          
          <div className="program-card fade-in">
            <div className="program-icon">
              <i className="fas fa-microphone" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Voice Lessons</h3>
            <p>Discover your unique voice and develop proper technique with our vocal training programs.</p>
            <Link to="/programs" className="program-link">Learn More</Link>
          </div>
        </div>
        <div className="center-btn">
          <Link to="/programs" className="btn">View All Programs</Link>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-title">
          <h2>What Our Students Say</h2>
        </div>
        <div className="testimonials-carousel">
          <div className="testimonial-card fade-in">
            <div className="testimonial-content">
              <p>"The instructors at Tri-Tone are not only talented musicians but also amazing teachers. My daughter has flourished in their piano program!"</p>
            </div>
            <div className="testimonial-author">
              <h4>Amanda P.</h4>
              <p>Parent of Piano Student</p>
            </div>
          </div>
          
          <div className="testimonial-card fade-in">
            <div className="testimonial-content">
              <p>"I started as a complete beginner, and within months I was playing songs I love. The supportive environment makes learning fun and engaging."</p>
            </div>
            <div className="testimonial-author">
              <h4>Michael T.</h4>
              <p>Guitar Student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-content fade-in">
          <h2>Ready to Begin Your Musical Journey?</h2>
          <p>Enrollment for our programs is now open. Limited spots available.</p>
          <Link to="/contact" className="btn">Enroll Now</Link>
        </div>
      </section>
    </>
  );
}

export default Home;