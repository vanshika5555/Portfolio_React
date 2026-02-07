import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-text">Vanshika</span>
              {/* <span className="logo-dot">.</span> */}
            </div>
            <p>Building digital experiences that matter.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigate</h4>
              <ul>
                <li onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}>
                  Home
                </li>
                <li onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                  About
                </li>
                <li onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
                  Skills
                </li>
                <li onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  Projects
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <div className="footer-social">
                <a href="https://github.com/vanshika5555" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vanshika-malik-3495432a2/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/Vanshika7755" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vanshika  All rights reserved.</p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;