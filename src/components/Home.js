import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
// Import instrument images
import vocalsImage from '../assets/vocal.webp';
import pianoImage from '../assets/piano.webp';
import guitarImage from '../assets/guitar.webp';
import welcomeImage from '../assets/welcome.jpg';
import homepageWhyImage from '../assets/homepage_why.jpg';

const collageImages = [
  require('../assets/collage/1.webp'),
  require('../assets/collage/2.webp'),
  require('../assets/collage/3.webp'),
];

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentElement = counterRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// Scroll Animation Hook
function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
}

function Home() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  
  // Scroll animations
  const [instrumentsRef, instrumentsVisible] = useScrollAnimation(0.2);
  const [welcomeRef, welcomeVisible] = useScrollAnimation(0.2);

  useEffect(() => {
    setFade(true);
    const fadeTimeout = setTimeout(() => setFade(false), 600);
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % collageImages.length);
      setFade(true);
    }, 4200);
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimeout);
    };
  }, [current]);

  return (
    <>
      <section className="hero collage-hero">
        <div className="collage-bg">
          <img
            src={collageImages[current]}
            alt="Music collage"
            className={`collage-img${fade ? ' fade-in' : ' zoom-out'}`}
          />
          <div className="collage-overlay" />
        </div>
        <div className="hero-content collage-content">
          <h1 className="motto">
            <span className="highlight">Every passion is a start of something Beautiful</span>
            <span className="accent-bar"></span>
            Nurture your passion well and you will see the Beauty
          </h1>
          <div className="hero-buttons">
            <Link to="/contact" className="btn">Read More</Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter end={12000} suffix="+" />
            </div>
            <div className="stat-label">Average Teaching Experience (Hours)</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter end={51} />
            </div>
            <div className="stat-label">Auditorium Concerts</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter end={8000} suffix="+" />
            </div>
            <div className="stat-label">Happy Students</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedCounter end={95} suffix="%" />
            </div>
            <div className="stat-label">Average Distinctions & Merits In Music Exams</div>
          </div>
        </div>
      </section>

      <section className={`section instruments instruments-section ${instrumentsVisible ? 'visible' : ''}`} ref={instrumentsRef}>
        <div className="section-title">
          <h2>Instruments</h2>
        </div>
        <div className="instruments-grid">
          <div className={`instrument-card ${instrumentsVisible ? 'visible' : ''}`} style={{ transitionDelay: instrumentsVisible ? '0.2s' : '0s' }}>
            <div className="instrument-image">
              <img src={vocalsImage} alt="Vocals" />
            </div>
            <h3>Vocals</h3>
            <p>Often not considered as a musical instrument, vocals requires as much study, skill development and practice as any other musical instrument if not more. Consider a fresher studying piano would not have played a piano...</p>
            <Link to="/vocals" className="btn-dark">More Info</Link>
          </div>
          
          <div className={`instrument-card ${instrumentsVisible ? 'visible' : ''}`} style={{ transitionDelay: instrumentsVisible ? '0.4s' : '0s' }}>
            <div className="instrument-image">
              <img src={pianoImage} alt="Piano" />
            </div>
            <h3>Piano</h3>
            <p>Students pursue structured progressive system to gain understanding and technical facility to play the Piano. The course carefully covers all aspects of playing the piano including Scales & Arpeggios, Sight Reading, Ear Training...</p>
            <Link to="/piano" className="btn-dark">More Info</Link>
          </div>
          
          <div className={`instrument-card ${instrumentsVisible ? 'visible' : ''}`} style={{ transitionDelay: instrumentsVisible ? '0.6s' : '0s' }}>
            <div className="instrument-image">
              <img src={guitarImage} alt="Guitar" />
            </div>
            <h3>Guitar</h3>
            <p>Guitar is the core of a rhythm section in a band. This is purely a rhythm instrument and is not really capable of playing the melody or harmony. Often referred to as the timekeepers of the band, guitarists play a very crucial role in keeping...</p>
            <Link to="/guitar" className="btn-dark">More Info</Link>
          </div>
        </div>
      </section>

      <section className={`section welcome-section ${welcomeVisible ? 'visible' : ''}`} ref={welcomeRef}>
        <div className="welcome-content">
          <div className="welcome-text">
            <h2>Welcome to <span className="highlight">TRI-TONE</span></h2>
            <p className="welcome-subtitle">Your Gateway to World-Class Music Education</p>
            <p>TRI-TONE is an online and offline music education center. A center for learning world class music from the comfort of your home or walk in for physical class. Be a beginner, an intermediate, or an advance, we are here to make you professional musician.</p>
            
            <div className="welcome-features">
              <div className="feature-item">
                <div className="feature-icon">🎵</div>
                <div className="feature-text">
                  <h4>Online & Offline Classes</h4>
                  <p>Learn from home or visit our physical centers</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-text">
                  <h4>All Skill Levels</h4>
                  <p>From beginner to advanced, we guide your journey</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <div className="feature-text">
                  <h4>Professional Training</h4>
                  <p>Transform your passion into professional expertise</p>
                </div>
              </div>
            </div>
            
            <div className="welcome-button">
              <Link to="/about" className="btn">Know More</Link>
            </div>
          </div>
          
          <div className="welcome-image">
            <div className="image-placeholder">
              <img src={welcomeImage} alt="Music education at TRI-TONE" />
            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose-us">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h3>Why Choose Us</h3>
            <h2>Connecting Souls With Music</h2>
            <p>Tri-Tone Music Academy was formed in 2010 with a vision to offer International standard education in Western Music in India. Currently over 600 students learn at 5 branches of the Academy. Tri-Tone Music Academy also manages and runs western music programs at high profile institutions across Bangalore and other cities, establishing itself as a premier music education center in South India.</p>
            
            <p>The first branch of the Academy was setup in Bangalore and soon expanded to serve multiple locations across the city. Each faculty member are specialists at their particular subject and not a single faculty teaches more than one discipline which they specialize in. Every student has a different learning curve, goals and aptitude, especially with an art form like music. Hence, more than 90% of the students take one-to-one lessons that are tailored to suit their learning needs.</p>
            
            <div className="contact-button">
              <Link to="/contact" className="btn-contact">Contact Us</Link>
            </div>
          </div>
          <div className="why-choose-image">
            <img src={homepageWhyImage} alt="Students learning music" />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section gallery-preview">
        <div className="gallery-preview-container">
          <div className="gallery-preview-header">
            <h3>Gallery</h3>
            <h2>Moments That Matter</h2>
            <p>Explore snapshots from our vibrant music community - performances, lessons, and achievements</p>
          </div>
          
          <div className="gallery-preview-grid">
            <div className="gallery-preview-item large">
              <img src={collageImages[0]} alt="Student performance" />
              <div className="gallery-preview-overlay">
                <span>Student Performances</span>
              </div>
            </div>
            
            <div className="gallery-preview-item">
              <img src={vocalsImage} alt="Vocal training" />
              <div className="gallery-preview-overlay">
                <span>Vocal Studio</span>
              </div>
            </div>
            
            <div className="gallery-preview-item">
              <img src={pianoImage} alt="Piano lessons" />
              <div className="gallery-preview-overlay">
                <span>Piano Classes</span>
              </div>
            </div>
            
            <div className="gallery-preview-item">
              <img src={guitarImage} alt="Guitar sessions" />
              <div className="gallery-preview-overlay">
                <span>Guitar Sessions</span>
              </div>
            </div>
            
            <div className="gallery-preview-item">
              <img src={collageImages[1]} alt="Music events" />
              <div className="gallery-preview-overlay">
                <span>Events & Workshops</span>
              </div>
            </div>
            
            <div className="gallery-preview-item">
              <img src={homepageWhyImage} alt="Learning environment" />
              <div className="gallery-preview-overlay">
                <span>Learning Environment</span>
              </div>
            </div>
          </div>
          
          <div className="gallery-preview-button">
            <Link to="/gallery" className="btn">View All</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;