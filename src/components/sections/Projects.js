import "../../css/Projects.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/projects.json";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        rotateX: 45,
        transformPerspective: 1000,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const projectData = [
    {
      title: "Cryptocurrency Finance Price Tracker Web App",
      description:
        "Developed a dynamic cryptocurrency tracker in React.js with live price updates and search functionality, providing real-time market data on page load.",
      tech: ["React.js", "JavaScript", "ECMAScript 6", "CSS"],
      link: "https://crypto-react-js.vercel.app/",
    },
    {
      title: "E-Commerce Cart",
      description:
        "Developed an advanced e-commerce cart using React.js and Redux with seamless add/remove functionality and robust cart management for enhanced user experience.",
      tech: ["React.js", "Redux.js", "ECMAScript 6", "JavaScript", "CSS"],
      link: "https://ecomm-addtocart-react-redux.vercel.app/",
    },
    {
      title: "CRUD Operation Application",
      description:
        "Developed a full-stack CRUD application using React.js, Node.js, Express.js, and MongoDB, with RESTful APIs for seamless data management and dynamic user interaction.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "ECMAScript 6",
        "JavaScript",
      ],
      link: "https://github.com/ani1999deep/mern_stack_projects/tree/main/crud%20operation",
    },
    {
      title: "Pokemon Explorer Web App",
      description:
        "A responsive and visually appealing React.js web app for exploring Pokemons using the PokeAPI. It includes a homepage with search functionality and a detailed view for each Pokemon.",
      tech: ["React.js", "JavaScript", "ECMAScript 6", "CSS"],
      link: "https://pokemon-git-d42cb1-anideepbhowmick1999creatorgmailcoms-projects.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Lottie Background */}
      <div className="lottie-bg">
        <Lottie animationData={codingAnimation} loop={true} />
      </div>

      {/* Foreground content */}
      <div className="projects-container">
        <h2 className="projects-title">✨ Featured Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} key={index}>
              <div className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
