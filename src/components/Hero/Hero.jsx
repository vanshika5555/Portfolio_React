import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleLetsTalk = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p className="hero-greeting">Hi there 👋, I'm</p>
            <h1 className="hero-name">
              Vanshika <span className="gradient-text">Malik</span>
            </h1>
            <h2 className="hero-title">Full Stack Developer</h2>
            <p className="hero-description">
              Turning caffeine ☕ and code 💻 into powerful digital platforms. 
              I'm a Full-Stack Dev in training and a tech creator by passion. 
              Currently pursuing BCA, already building websites that solve real problems.
            </p>

            <div className="hero-social">
              <a 
                href="https://github.com/vanshika5555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/vanshika-malik-3495432a2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://x.com/Vanshika7755" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>

            <div className="hero-buttons">
              <a 
                href="/assets/VANSHIKA_RESUME.pdf" 
                download 
                className="btn btn-primary"
              >
                <FaDownload /> Resume
              </a>
              <button 
                className="btn btn-outline"
                onClick={handleLetsTalk}
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;