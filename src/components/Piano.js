import React from 'react';
import { Link } from 'react-router-dom';
import pianoWhyImage from '../assets/piano_why.jpg';
import pianoLessonImage from '../assets/piano.png';

function Piano() {
  return (
    <>
      <section className="instrument-hero">
        <div className="instrument-hero-content">
          <h1>Piano</h1>
          <p>Learn the foundation of all music through comprehensive piano instruction</p>
        </div>
      </section>

      <section className="section instrument-details">
        <div className="instrument-content">
          <div className="instrument-description">
            <h2>About Piano</h2>
            <p>Students pursue structured progressive system to gain understanding and technical facility to play the Piano. The course carefully covers all aspects of playing the piano including Scales & Arpeggios, Sight Reading, Ear Training, and performance techniques.</p>
            
            <p>Piano is often considered the foundation of musical education, as it provides students with a comprehensive understanding of music theory, harmony, and melody. Our piano program is designed to take students from beginner to advanced levels, covering both classical and contemporary styles of piano playing.</p>

            <h3>What You'll Learn:</h3>
            <ul>
              <li>Proper hand position and finger technique</li>
              <li>Scales and arpeggios</li>
              <li>Sight reading and music notation</li>
              <li>Ear training and interval recognition</li>
              <li>Classical and contemporary repertoire</li>
              <li>Music theory and harmony</li>
              <li>Performance skills and stage presence</li>
            </ul>
          </div>
          
          <div className="instrument-image">
            <img src={pianoLessonImage} alt="Piano lesson" />
          </div>
        </div>
      </section>

      <section className="section why-choose-us">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h3>Why Choose Us</h3>
            <h2>Connecting Souls With Music</h2>
            <p>Tri-Tone Music Academy was formed in 2010 with a vision to offer International standard education in Western Music. Our piano instructors are classically trained professionals with extensive experience in both performance and pedagogy.</p>
            
            <p>Each faculty member specializes specifically in piano instruction, ensuring that students receive the highest quality education. We believe that every student has a different learning curve, goals, and aptitude, which is why more than 90% of our piano students take one-to-one lessons that are tailored to suit their individual musical development.</p>
            
            <div className="contact-button">
              <Link to="/contact" className="btn-contact">Contact Us</Link>
            </div>
          </div>
          <div className="why-choose-image">
            <img src={pianoWhyImage} alt="Piano students" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Piano;
