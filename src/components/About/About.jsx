import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div data-aos="fade-up">
          <p className="section-subtitle">Who is Vanshika?</p>
          <h2 className="section-title">A Bit About Me</h2>
        </div>
<div className="about-content" data-aos="fade-up" data-aos-delay="200">
  <div className="about-text">
    
    <p className="about-paragraph">
      🚀 I'm Vanshika Malik, a BCA student and aspiring Full Stack Developer with hands-on experience in building dynamic and scalable web applications using HTML, CSS, React, JavaScript, PHP, and MySQL.
    </p>

    <p className="about-paragraph">
      💼 Currently working as a Full Stack Development Intern at Easy My Storage, where I design and develop secure admin dashboards and customer portals to manage warehouse operations, bookings, inventory, and payments.
    </p>

    <p className="about-paragraph">
      🔐 I have implemented features such as email OTP authentication, Razorpay payment integration, booking management, complaint and feedback modules, and structured MySQL database architecture.
    </p>

    <p className="about-paragraph">
      🧩 Alongside my internship, I have built real-world projects including a Smart Farming Web Platform, Taskify Employee Management System, and the AskManisha freelance website with dynamic admin control and content management.
    </p>

    <p className="about-paragraph">
      🌟 With participation in 5+ hackathons and strong interest in UI/UX, database design, and performance optimization, I enjoy creating clean, responsive, and user-focused web solutions.
    </p>

  </div>
</div>
          <div className="about-stats">
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="stat-number">5+</div>
              <div className="stat-label">Hackathons</div>
            </div>
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="500">
              <div className="stat-number">1+</div>
              <div className="stat-label">Year Experience</div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default About;