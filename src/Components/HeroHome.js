import "../Components/HeroHomeStyle.css";
import React from 'react'
import IntroBg from "../assets/intro-bg1.jpg"
import { Link } from "react-router-dom";
import CV from "../assets/Satyam.pdf"

const HeroHome = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" alt="intro" src={IntroBg} />
        </div>
        <div className="content">
            <p>HI, I'M SATYAM KUMAR</p>
            <h1>Frontend Developer.</h1>
            <div className="home-btns">
              {/* <Link to="/projects" className="btn">Download CV</Link> */}
              <Link to={CV} download="Satyam_CV" target="_blank" rel="noreferrer" className="btn">Download CV</Link>
              {/* <a href={CV} download className="btn">Download CV</a> */}
              <Link to="/contact" className="btn btn-light">Let's Talk</Link>
            </div>
        </div>
        
    </div>
  )
}

export default HeroHome