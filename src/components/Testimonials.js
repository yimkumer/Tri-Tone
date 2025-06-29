import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    program: "Piano Student",
    text: "Tri-Tone has transformed my musical journey completely. The one-on-one piano lessons are perfectly tailored to my learning pace, and my instructor's expertise is exceptional. I've grown more confident in my playing in just 6 months!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 2,
    name: "Rahul Krishnan",
    program: "Guitar Student",
    text: "The guitar program at Tri-Tone is outstanding. My instructor focuses on both technique and creativity, helping me develop my own style while mastering the fundamentals. The academy's approach to music education is truly world-class.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Aisha Reddy",
    program: "Vocals Student",
    text: "Learning vocals at Tri-Tone has been an incredible experience. The personalized attention and professional guidance have helped me discover my voice and build confidence in performing. The academy's supportive environment is perfect for growth.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Arjun Menon",
    program: "Guitar Student", 
    text: "The quality of instruction at Tri-Tone is unmatched. My guitar instructor's depth of knowledge and teaching methodology has accelerated my learning significantly. I highly recommend this academy to anyone serious about music.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Sneha Iyer",
    program: "Piano Student",
    text: "Tri-Tone's piano program has exceeded my expectations. The structured curriculum combined with flexible scheduling makes it perfect for working professionals like me. I've achieved more progress here than I thought possible.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  }
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const intervalRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h3>What Our Students Say</h3>
          <p>Hear from our students about their musical journey at Tri-Tone</p>
        </div>
        
        <div className="testimonials-carousel">
          <button className="testimonial-nav-btn prev" onClick={prevTestimonial}>
            <span>&lt;</span>
          </button>
          
          <div className="testimonial-content">
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                />
              </div>
              <div className="testimonial-text">
                <p>"{testimonials[currentTestimonial].text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <span>{testimonials[currentTestimonial].program}</span>
                </div>
              </div>
            </div>
          </div>
          
          <button className="testimonial-nav-btn next" onClick={nextTestimonial}>
            <span>&gt;</span>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
