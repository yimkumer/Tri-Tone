import React from 'react';
import { Link } from 'react-router-dom';

function Programs() {
  return (
    <>
      <section className="section programs-section">
        <div className="section-title">
          <h2>Our Programs</h2>
        </div>
        
        <div className="programs-intro fade-in">
          <p>At Tri-Tone Music School, we offer a variety of programs designed to meet the needs and goals of each student. Whether you're just beginning your musical journey or looking to advance your skills, we have the perfect program for you.</p>
        </div>
        
        <div className="programs-grid mb-5">
          <div className="program-card fade-in" id="piano">
            <div className="program-icon">
              <i className="fas fa-piano" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Piano</h3>
            <p>Our piano program develops technique, music reading skills, and expression through classical and contemporary repertoire.</p>
            <ul className="program-features">
              <li>Private lessons (30, 45, or 60 minutes)</li>
              <li>Group classes available for beginners</li>
              <li>All ages and levels welcome</li>
              <li>Regular recital opportunities</li>
            </ul>
            <Link to="/contact" className="btn btn-sm">Inquire Now</Link>
          </div>
          
          <div className="program-card fade-in" id="guitar">
            <div className="program-icon">
              <i className="fas fa-guitar" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Guitar</h3>
            <p>Learn acoustic, electric, or bass guitar with instruction tailored to your musical interests and goals.</p>
            <ul className="program-features">
              <li>Private lessons (30, 45, or 60 minutes)</li>
              <li>Various styles: rock, jazz, classical, folk</li>
              <li>Beginning through advanced levels</li>
              <li>Performance opportunities</li>
            </ul>
            <Link to="/contact" className="btn btn-sm">Inquire Now</Link>
          </div>
          
          <div className="program-card fade-in" id="voice">
            <div className="program-icon">
              <i className="fas fa-microphone" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Voice</h3>
            <p>Develop your vocal technique, expand your range, and build your repertoire with personalized voice training.</p>
            <ul className="program-features">
              <li>Private lessons (30, 45, or 60 minutes)</li>
              <li>Various styles: pop, classical, musical theater</li>
              <li>Ages 10 and up</li>
              <li>Recitals and performance workshops</li>
            </ul>
            <Link to="/contact" className="btn btn-sm">Inquire Now</Link>
          </div>
        </div>
        
        <div className="section-title">
          <h2>Group Programs</h2>
        </div>
        
        <div className="programs-grid">
          <div className="program-card fade-in" id="early-childhood">
            <div className="program-icon">
              <i className="fas fa-child" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Early Childhood Music</h3>
            <p>Interactive, play-based music classes for our youngest musicians (ages 3-6).</p>
            <ul className="program-features">
              <li>Weekly 45-minute group classes</li>
              <li>Singing, movement, and basic instruments</li>
              <li>Parent participation for ages 3-4</li>
              <li>Foundation for future musical training</li>
            </ul>
            <Link to="/contact" className="btn btn-sm">Inquire Now</Link>
          </div>
          
          <div className="program-card fade-in" id="ensemble">
            <div className="program-icon">
              <i className="fas fa-users" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Ensemble Programs</h3>
            <p>Collaborative music-making opportunities for students who want to play with others.</p>
            <ul className="program-features">
              <li>Rock bands, jazz combos, chamber groups</li>
              <li>Weekly rehearsals with coach</li>
              <li>Performance opportunities</li>
              <li>Develop teamwork and listening skills</li>
            </ul>
            <Link to="/contact" className="btn btn-sm">Inquire Now</Link>
          </div>
          
          <div className="program-card fade-in" id="theory">
            <div className="program-icon">
              <i className="fas fa-book-open" style={{ fontSize: '2.5rem', color: 'var(--gold)' }}></i>
            </div>
            <h3>Music Theory & Composition</h3>
            <p>Deepen your understanding of music and learn to create your own compositions.</p>
            <ul className="program-features">
              <li>Group classes at various levels</li>
              <li>Preparation for theory examinations</li>
              <li>Composition workshops</li>
              <li>Technology integration</li>
            </ul>
            <Link to="/contact" className="btn btn-sm">Inquire Now</Link>
          </div>
        </div>
      </section>
      
      <section className="section tuition-section">
        <div className="section-title">
          <h2>Tuition & Policies</h2>
        </div>
        
        <div className="tuition-content fade-in">
          <p>Tri-Tone Music School offers flexible tuition options to accommodate various schedules and budgets. Our programs operate on a monthly tuition system, with payments due on the first of each month.</p>
          
          <div className="tuition-table-container">
            <table className="tuition-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Monthly Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Private Lessons</td>
                  <td>30 minutes</td>
                  <td>$120/month</td>
                </tr>
                <tr>
                  <td>Private Lessons</td>
                  <td>45 minutes</td>
                  <td>$160/month</td>
                </tr>
                <tr>
                  <td>Private Lessons</td>
                  <td>60 minutes</td>
                  <td>$200/month</td>
                </tr>
                <tr>
                  <td>Early Childhood Music</td>
                  <td>45 minutes</td>
                  <td>$85/month</td>
                </tr>
                <tr>
                  <td>Ensemble Programs</td>
                  <td>60 minutes</td>
                  <td>$100/month</td>
                </tr>
                <tr>
                  <td>Music Theory</td>
                  <td>60 minutes</td>
                  <td>$90/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>For detailed information about our policies regarding missed lessons, withdrawals, and performance opportunities, please contact our office.</p>
        </div>
      </section>
      
      <section className="section cta">
        <div className="cta-content fade-in">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to schedule a free consultation and learn more about our programs.</p>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

export default Programs;