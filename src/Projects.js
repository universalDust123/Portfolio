import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HeroImg2 from './Components/HeroImg2';
// import WorkingCards from './Components/WorkingCards';
import Work from './Components/Work';

const projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recents works"/>
      <Work />
      <Footer />
    </div>
  )
}

export default projects