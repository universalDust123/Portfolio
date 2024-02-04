import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience-container'>
        <h1 className='experience-heading'>What Skills I have . .</h1>
        <div className='skills-container'>
            <div className='programing-languages'>
                <h3 className='skill-title'>Programming Languages</h3>
                <div className='skills-content'>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>C</h4>
                        <small className="light-text">Intermediate</small>
                        </div>
                    </article>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>C++</h4>
                        <small className="light-text">Intermediate</small>
                        </div>
                    </article>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>Java</h4>
                        <small className="light-text">Basic</small>
                        </div>
                    </article>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>Javascript</h4>
                        <small className="light-text">Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='frontend'>
                <h3 className='skill-title'>Framework & Libraries</h3>
                <div className='skills-content'>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>HTML</h4>
                        <small className="light-text">Basic</small>
                        </div>
                    </article>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>CSS</h4>
                        <small className="light-text">Basic</small>
                        </div>
                    </article>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>Javascript</h4>
                        <small className="light-text">Intermediate</small>
                        </div>
                    </article>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>ReactJs</h4>
                        <small className="light-text">Basic</small>
                        </div>
                    </article>
                    <article className='skills-details'>
                        <BsPatchCheckFill style={{color:"#fff"}}/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className="light-text">Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience