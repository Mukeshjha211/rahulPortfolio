import React from 'react';
import './Home.css';
// import profilePhoto from '../assets/your-profile-photo.jpg'; // Make sure to replace this with your actual image path

const Home = () => {
    return (
        <div className="home-section">
            <div className="intro-container">
                {/* in below we have to add the "profilePhoto" text */}
                <img src={""} alt="Rahul Kumar" className="profile-photo" /> 
                <div className="text-container">
                    <h1 className="slide-in">Hi, I'm Rahul Kumar</h1>
                    <p className="fade-in">
                        A passionate freelance web developer and the founder of <strong>Webim</strong>, 
                        where we’ve successfully delivered 20+ client projects, helping businesses 
                        thrive through tailored digital solutions.
                    </p>
                    <a href="#projects" className="cta-button">Explore My Projects</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
