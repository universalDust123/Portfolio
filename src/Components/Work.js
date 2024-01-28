import React from 'react'
// import { NavLink } from 'react-router-dom'
// import pro1 from '../assets/Project1.png'
import './WorkingCardsStyle.css'
import WorkingCardData from './WorkCardData'
import WorkingCards from './WorkingCards'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {WorkingCardData.map((val,ind)=>{
                return(
                    <WorkingCards 
                        key={ind}
                        imagesrc={val.imagesrc}
                        title={val.title}
                        text={val.text}
                        veiw={val.veiw}
                        source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work