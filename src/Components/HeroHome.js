import "../Components/HeroHomeStyle.css";
import React from 'react'
import IntroBg from "../assets/intro-bg1.jpg"
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" alt="intro" src={IntroBg} />
        </div>
        <div className="content">
            <p>HI, I'M FINAL YEAR STUDENT</p>
            <h1>Frontend Developer.</h1>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        
    </div>
  )
}

export default HeroHome