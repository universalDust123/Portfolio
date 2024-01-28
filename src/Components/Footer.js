import './FooterStyle.css';
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div className='address'>
                        <p>Friends Club Nabapalli Dhalua, 700152, Kolkata.</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        +91 9128112126
                    </h4>
                    
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        satyam73233@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Contacts</h4>
                <p>This is me Satyam Kumar. I am a tech Enthiastic person. This Website Developed by me since 2024. I am happy to see that You reached my portfolio. Thank You.</p>
                <div className='social'>
                    <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem", cursor:"pointer"}}/>
                    <FaInstagram href='#' size={20} style={{color:"#fff", marginRight:"2rem", cursor:"pointer"}}/>
                    <FaLinkedin href='#' size={20} style={{color:"#fff", marginRight:"2rem", cursor:"pointer"}}/>
                    <FaGithub href='#' size={20} style={{color:"#fff", marginRight:"2rem", cursor:"pointer"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer