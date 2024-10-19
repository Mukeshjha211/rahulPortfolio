import React from 'react';
import './Footer.css'; // Import the CSS

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="social-links">
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
