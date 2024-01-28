import React from 'react'
import { NavLink } from 'react-router-dom'
// import pro1 from '../assets/Project1.png'
import './WorkingCardsStyle.css'

const WorkingCards = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imagesrc} alt="im" />
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
                <NavLink to={props.veiw} className='btn'>Veiw</NavLink>
                <NavLink to={props.source} className='btn'>Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkingCards