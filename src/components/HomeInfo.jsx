import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center px-10 mx-8'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8  text-white mx-5'>
      "Hi there! I'm <span className='font-semibold'>Aivar</span>👋 <br/>A software engineer enthusiastic about creating innovative solutions
    </h1>
  ),
  2: (
    <InfoBox 
    text="Learn more about me"
    link="/about"
    btnText="Learn more"
    />
  ),
  3: (
    <InfoBox 
    text="Worked on various software projects"
    link="/projects"
    btnText="Visit my projects"
    />
  ),
  4: (
    <InfoBox 
    text="Experienced in various technologies"
    link="/experience"
    btnText="See my experience"
    />
  ),
}

  
const HomeInfo = ({currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo