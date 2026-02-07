import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, 
  FaGithub, FaFigma, FaDatabase, FaCode 
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiCanva
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#00ff88' },
    { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
    { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
    { name: 'DBMS', icon: <FaDatabase />, color: '#00ff88' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div data-aos="fade-up">
          <p className="section-subtitle">My Expertise</p>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="skills-intro">
            I've completed several online courses and internships, and I'm currently sharpening my 
            skills in <strong>DBMS & PHP</strong>. Here are some of the technologies I've been working with recently:
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;