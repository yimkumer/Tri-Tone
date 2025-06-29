import React from 'react';
// Import available assets
import collage1 from '../assets/collage/1.webp';
import collage2 from '../assets/collage/2.webp';
import collage3 from '../assets/collage/3.webp';
import guitarImage from '../assets/guitar.webp';
import pianoImage from '../assets/piano.webp';
import vocalImage from '../assets/vocal.webp';
import welcomeImage from '../assets/welcome.jpg';
import guitarWhyImage from '../assets/guitar_why.jpg';
import pianoWhyImage from '../assets/piano_why.jpg';
import vocalWhyImage from '../assets/vocal_why.jpg';
import homepageWhyImage from '../assets/homepage_why.jpg';

function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Gallery</h1>
          <p>Explore moments from our music academy - performances, lessons, and student achievements</p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="gallery-container">
          <div className="gallery-category">
            <h2>Student Performances</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={collage1} alt="Student piano recital" />
                <div className="gallery-overlay">
                  <h3>Piano Recital 2024</h3>
                  <p>Annual student showcase</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src={collage2} alt="Guitar ensemble" />
                <div className="gallery-overlay">
                  <h3>Guitar Ensemble</h3>
                  <p>Group performance event</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src={collage3} alt="Vocal performance" />
                <div className="gallery-overlay">
                  <h3>Vocal Competition</h3>
                  <p>Inter-school competition</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop&auto=format" alt="Mixed ensemble" />
                <div className="gallery-overlay">
                  <h3>Mixed Ensemble</h3>
                  <p>Multi-instrument collaboration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-category">
            <h2>Learning Environment</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={pianoImage} alt="Piano studio" />
                <div className="gallery-overlay">
                  <h3>Piano Studio</h3>
                  <p>Individual lesson space</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src={guitarImage} alt="Guitar classroom" />
                <div className="gallery-overlay">
                  <h3>Guitar Classroom</h3>
                  <p>Group learning environment</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src={vocalImage} alt="Vocal booth" />
                <div className="gallery-overlay">
                  <h3>Vocal Studio</h3>
                  <p>Professional recording setup</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=200&fit=crop&auto=format" alt="Practice rooms" />
                <div className="gallery-overlay">
                  <h3>Practice Rooms</h3>
                  <p>Individual practice spaces</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-category">
            <h2>Events & Workshops</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={homepageWhyImage} alt="Music workshop" />
                <div className="gallery-overlay">
                  <h3>Music Theory Workshop</h3>
                  <p>Advanced theory session</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&auto=format" alt="Masterclass" />
                <div className="gallery-overlay">
                  <h3>Guest Artist Masterclass</h3>
                  <p>Professional development</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop&auto=format" alt="Student concert" />
                <div className="gallery-overlay">
                  <h3>Annual Concert</h3>
                  <p>Year-end celebration</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src={welcomeImage} alt="Community event" />
                <div className="gallery-overlay">
                  <h3>Community Outreach</h3>
                  <p>Local performance event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-content">
          <h2>Join Our Musical Community</h2>
          <p>Be part of our vibrant music academy and create your own memorable moments.</p>
          <a href="/contact" className="btn">Get Started Today</a>
        </div>
      </section>
    </>
  );
}

export default Gallery;
