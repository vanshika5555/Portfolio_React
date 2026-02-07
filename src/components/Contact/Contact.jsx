import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:vanshikamalik507@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div data-aos="fade-up">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-intro">
            Feel free to reach out if you're looking to hire, just want to connect, 
            or see if we can build something amazing together.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:vanshikamalik507@gmail.com">
                  vanshikamalik507@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect With Me</h3>
              <div className="social-icons-grid">
                <a 
                  href="https://github.com/vanshika5555" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vanshika-malik-3495432a2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://x.com/Vanshika7755" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  title="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;