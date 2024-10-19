import React from 'react';
import './Skills.css'; 

const skillsData = [
    { skill: "HTML", icon: "🌐" },
    { skill: "CSS", icon: "🎨" },
    { skill: "JavaScript", icon: "⚡" },
    { skill: "React", icon: "⚛️" },
    { skill: "Node.js", icon: "🌳" },
    { skill: "Express", icon: "🚀" },
    { skill: "MongoDB", icon: "📦" },
    { skill: "SQL", icon: "📊" },
    { skill: "Sequelize", icon: "🔗" },
    { skill: "TypeScript", icon: "📜" },
    { skill: "Git", icon: "🔧" },
    { skill: "AWS", icon: "☁️" },
    { skill: "Linux", icon: "🐧" },
];

const Skills = () => {
    return (
        <div className="skills-section" id="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                {skillsData.map((item, index) => (
                    <div key={index} className="skill-card">
                        <span className="skill-icon">{item.icon}</span>
                        <h3>{item.skill}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
