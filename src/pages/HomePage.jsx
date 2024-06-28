import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home-page'>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to <span className="highlight">PC Mart</span> Computer Repair Service</h1>
          <p> <b>Your one-stop destination for all your computer repair needs.</b></p>
          <img src='\src\image\nikolai-chernichenko-4DLzZXyC8_k-unsplash.jpg' alt="Computer Repair" className='home-bg'/>
          

          {/* <button className="btn btn-primary">Get Started</button> */}
          <br/>
          <br/>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2><b>Our Services</b></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <h3>Hardware Repair</h3>
                <p>We provide expert hardware repair services for all types of computer systems.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <h3>Software Troubleshooting</h3>
                <p>Our team of technicians can diagnose and fix software-related issues efficiently.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <h3>Networking Solutions</h3>
                <p>Need help setting up your home or office network? We've got you covered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <br/>
      <section className="why-choose-us-section">
        <div className="container">
          <h2><b>Why Choose Us?</b></h2><br/>
          <div className="row">
            <div className="col-md-6">
              <h3>Experienced Technicians</h3>
              <p>Our team consists of highly skilled and experienced technicians who can handle any computer repair job.</p>
            </div>
            <br/>
            <br/>
            <div className="col-md-6">
              <h3>Fast Turnaround Time</h3>
              <p>We understand the importance of getting your computer back up and running quickly. That's why we strive to provide fast turnaround times for all repairs.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6"><br/>
              <h3>Affordable Prices</h3>
              <p>We offer competitive pricing for all our services, ensuring that you get high-quality repairs at affordable rates.</p>
            </div>
            <div className="col-md-6"><br/>
              <h3>Customer Satisfaction</h3>
              <p>Your satisfaction is our top priority. We go above and beyond to ensure that you are happy with our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2><b>Contact Us</b></h2><br/>
          <p>Have a question or need assistance? Contact us today!</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage