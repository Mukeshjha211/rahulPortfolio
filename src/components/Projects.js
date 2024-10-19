import React from 'react';
import './Projects.css'; // Import the CSS

const projectsData = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio to showcase my skills and projects. Built with React.js.",
        imageUrl: "https://via.placeholder.com/300", // Placeholder image, replace with actual project image
        liveLink: "https://your-portfolio.com",
        codeLink: "https://github.com/your-github/portfolio"
    },
    {
        title: "E-commerce Store",
        description: "An e-commerce platform with payment integration. Built with React and Node.js.",
        imageUrl: "https://via.placeholder.com/300",
        liveLink: "https://your-ecommerce.com",
        codeLink: "https://github.com/your-github/ecommerce"
    },
    {
        title: "EmailAudit",
        description: "A full-stack email auditing tool designed to enhance domain reputation and deliverability. Built with Node.js and React.",
        imageUrl: "https://via.placeholder.com/300", // Placeholder image
        liveLink: "https://app.xemailaudit.com",
        codeLink: "https://github.com/your-github/xemailaudit"
    },
    {
        title: "EmailWarmup",
        description: "A full-stack solution for warming up email domains to improve deliverability rates. Developed with React and Express.",
        imageUrl: "https://via.placeholder.com/300", // Placeholder image
        liveLink: "https://b2c.xemailwarmup.com",
        codeLink: "https://github.com/your-github/xemailwarmup"
    },
];

const Projects = () => {
    return (
        <div className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
