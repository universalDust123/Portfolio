import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HeroImg2 from './Components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly Front-End Developer."/>
      <Footer />
    </div>
  )
}

export default About