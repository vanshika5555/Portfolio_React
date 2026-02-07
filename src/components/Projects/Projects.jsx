import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Easy My Storage',
      description: 'Developed a full-stack web solution featuring an admin dashboard, user portal, and Razorpay integration — enhancing warehouse data access, customer experience, and secure payments.',
      image: '/assets/ems.png',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Razorpay', 'Bootstrap'],
      liveLink: 'https://www.easymystorage.com/',
      githubLink: null
    },
    {
      id: 2,
      title: 'AskManisha',
      description: 'Revamped the AskManisha website with a modern UI/UX and built a fully dynamic, admin-controlled platform. Developed a secure admin panel with role-based authentication and multiple content management modules. Integrated payment gateway, automated forms, email notifications, and advanced numerology/horoscope logic. Optimized the website for responsiveness, performance, and SEO.',
      image: '/assets/askmanisha.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Figma', 'Git', 'cPanel'],
      liveLink: 'https://www.askmanisha.com/',
      githubLink: 'https://github.com/vanshika5555/NewAM'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio website using React and CSS to showcase projects, skills, and experience. Created responsive layouts and reusable components with a clean, modern UI. Implemented smooth navigation and optimized performance for better user experience. Deployed the website using GitHub and followed version control best practices.',
      image: '/assets/portfolio.png',
      tech: ['React', 'CSS', 'JavaScript', 'Vite', 'Git', 'GitHub'],
      liveLink: null,
      githubLink: 'https://github.com/vanshika5555/Portfolio_React'
    },
    {
      id: 4,
      title: 'FarmJI',
      description: 'A website tailored for farmers, offering courses that introduce them to modern, profitable, and sustainable farming methods. Features expert-led tutorials on niche crops, organic farming, and techniques to increase efficiency.',
      image: '/assets/farmji.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Razorpay'],
      liveLink: 'http://farmpractice.free.nf',
      githubLink: 'https://github.com/vanshika5555/FarmJI'
    },
    {
      id: 5,
      title: 'Taskify',
      description: 'A web-based Company and Employee Database Management System providing a centralized platform for companies to efficiently manage their employees, assign tasks, and track progress across all departments.',
      image: '/assets/12.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveLink: 'http://taskify.free.nf',
      githubLink: 'https://github.com/vanshika5555/CEDMS'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div data-aos="fade-up">
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Some Things I Built</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Live"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects" data-aos="fade-up">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/vanshika5555" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;