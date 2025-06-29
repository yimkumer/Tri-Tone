import React from 'react';
import { Link } from 'react-router-dom';
import vocalWhyImage from '../assets/vocal_why.jpg';
import vocalLessonImage from '../assets/vocal.png';

function Vocals() {
  return (
    <>
      <section className="instrument-hero">
        <div className="instrument-hero-content">
          <h1>Vocals</h1>
          <p>Discover your unique voice and develop proper vocal technique</p>
        </div>
      </section>

      <section className="section instrument-details">
        <div className="instrument-content">
          <div className="instrument-description">
            <h2>About Vocals</h2>
            <p>Often not considered as a musical instrument, vocals requires as much study, skill development and practice as any other musical instrument if not more. Consider a fresher studying piano would not have played a piano before, but a vocal student has been using their voice since birth, often developing bad habits that need to be corrected.</p>
            
            <p>Our vocal program focuses on proper breathing techniques, vocal health, pitch accuracy, and artistic expression. We work with students to develop their natural voice while expanding their range and improving their overall vocal technique. Whether you're interested in classical, contemporary, or popular music styles, our instructors will help you achieve your vocal goals.</p>

            <h3>What You'll Learn:</h3>
            <ul>
              <li>Proper breathing and posture techniques</li>
              <li>Vocal warm-ups and exercises</li>
              <li>Pitch accuracy and ear training</li>
              <li>Vocal range extension</li>
              <li>Various singing styles and genres</li>
              <li>Performance techniques and stage presence</li>
              <li>Song interpretation and expression</li>
            </ul>
          </div>
          
          <div className="instrument-image">
            <img src={vocalLessonImage} alt="Vocal lesson" />
          </div>
        </div>
      </section>

      <section className="section why-choose-us">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h3>Why Choose Us</h3>
            <h2>Connecting Souls With Music</h2>
            <p>Tri-Tone Music Academy was formed in 2010 with a vision to offer International standard education in Western Music. Our vocal instructors are trained professionals who understand the intricacies of voice training and vocal health.</p>
            
            <p>Each faculty member specializes specifically in vocal instruction, ensuring that students receive the highest quality education. We believe that every student has a different learning curve, goals, and aptitude, which is why more than 90% of our vocal students take one-to-one lessons that are tailored to suit their individual vocal development needs.</p>
            
            <div className="contact-button">
              <Link to="/contact" className="btn-contact">Contact Us</Link>
            </div>
          </div>
          <div className="why-choose-image">
            <img src={vocalWhyImage} alt="Vocal students" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Vocals;
