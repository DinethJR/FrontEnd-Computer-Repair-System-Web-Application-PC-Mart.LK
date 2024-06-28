import React from 'react';
import FooterComponent from '../components/FooterComponent';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <section className="company-section">
          <h2>Our Company</h2>
          <p>Welcome to Computer Repair System - your trusted partner for all your computer repair needs.</p>
          <p>At Computer Repair System, we are committed to providing high-quality repair services, fast turnaround times, and exceptional customer satisfaction.</p>
        </section>
        <br/>
        <section className="team-section">
          <h2>Our Team</h2>
          <p>Our team consists of skilled and experienced technicians who are dedicated to delivering top-notch repair solutions for our customers.</p>
          <p>We believe in continuous learning and staying updated with the latest technologies to provide the best possible service to our clients.</p>
        </section>
        <br/>
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>Our mission is to provide reliable and efficient computer repair services to individuals and businesses, ensuring that their devices are back up and running smoothly.</p>
          <p>We strive to build long-term relationships with our customers based on trust, integrity, and superior service quality.</p>
        </section>
        <br/>
        <section className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer Satisfaction:</strong> We prioritize customer satisfaction above all else.</li>
            <li><strong>Quality:</strong> We maintain high standards of quality in our workmanship and service delivery.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and ethical practices.</li>
            <li><strong>Innovation:</strong> We embrace innovation and continually seek ways to improve and evolve our services.</li>
            <li><strong>Community:</strong> We are committed to giving back to the community and supporting local initiatives.</li>
          </ul>
          <img src='\src\image\thisisengineering-jk-vpJaxUxw-unsplash.jpg' alt="Computer Repair" className='home-bg'/>
        </section>
      </div>
      <div>
        
    </div>
    </div>
  );
};

export default AboutPage;
