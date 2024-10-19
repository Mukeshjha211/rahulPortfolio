import React from 'react';
import './Resume.css'; 
// import resumePdf from '../assets/your-resume.pdf'; // Uncomment this and place your resume in an 'assets' folder

const Resume = () => {
    return (
        <div className="resume-section">
            <h2>My Resume</h2>
            <p>If you'd like to know more about my experience and qualifications, feel free to check out my resume.</p>
            <div className="resume-buttons">
                <a href={""} className="resume-button" download>
                    Download Resume
                </a>
                <a href={""} className="resume-button" target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
