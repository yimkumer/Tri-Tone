import React from 'react';
import { Link } from 'react-router-dom';
import guitarWhyImage from '../assets/guitar_why.jpg';
import guitarLessonImage from '../assets/guitar.png';

function Guitar() {
  return (
    <>
      <section className="instrument-hero">
        <div className="instrument-hero-content">
          <h1>Guitar</h1>
          <p>Master the art of guitar playing with our comprehensive guitar program</p>
        </div>
      </section>

      <section className="section instrument-details">
        <div className="instrument-content">
          <div className="instrument-description">
            <h2>About Guitar</h2>
            <p>Guitar is the core of a rhythm section in a band. This is purely a rhythm instrument and is not really capable of playing the melody or harmony. Often referred to as the timekeepers of the band, guitarists play a very crucial role in keeping the band together and providing the rhythmic foundation for all other instruments.</p>
            
            <p>Our guitar program covers acoustic, electric, and bass guitar instruction. Students learn various techniques including strumming patterns, fingerpicking, chord progressions, and lead guitar techniques. We offer both individual and group lessons tailored to each student's skill level and musical interests.</p>

            <h3>What You'll Learn:</h3>
            <ul>
              <li>Basic chord progressions and strumming patterns</li>
              <li>Fingerpicking techniques</li>
              <li>Music theory fundamentals</li>
              <li>Various musical styles (rock, blues, folk, classical)</li>
              <li>Lead guitar techniques and solos</li>
              <li>Song interpretation and performance skills</li>
            </ul>
          </div>
          
          <div className="instrument-image">
            <img src={guitarLessonImage} alt="Guitar lesson" />
          </div>
        </div>
      </section>

      <section className="section why-choose-us">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h3>Why Choose Us</h3>
            <h2>Connecting Souls With Music</h2>
            <p>Tri-Tone Music Academy was formed in 2010 with a vision to offer International standard education in Western Music. Our guitar instructors are accomplished musicians with years of experience in both teaching and performance.</p>
            
            <p>Each faculty member specializes specifically in guitar instruction, ensuring that students receive the highest quality education. We believe that every student has a different learning curve, goals, and aptitude, which is why more than 90% of our guitar students take one-to-one lessons that are tailored to suit their individual learning needs.</p>
            
            <div className="contact-button">
              <Link to="/contact" className="btn-contact">Contact Us</Link>
            </div>
          </div>
          <div className="why-choose-image">
            <img src={guitarWhyImage} alt="Guitar students" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Guitar;
