import React from 'react'
import profileImage from '../assets/images/profile.jpg';


import { skills } from '../constants'
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow-sm'>Aivar 👋</span>

      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>I am currently pursuing a <b>Bachelor's of Science in Computer Science</b> at
    <strong><a href="https://www.na.edu/"> North American University</a></strong>, graduating in May 2024.
  I am a persistent and dedicated individual. I am passionate about learning new things.</p>

  <p>Beyond college, my life is a dynamic blend of <b>soccer</b>, <b>travel</b>, and <b>tennis</b>. <b>Soccer</b> brings teamwork and skill, creating camaraderie on the field.
  <b>Traveling</b> allows me to explore new cultures, broaden horizons, and create lasting memories.</p>

  <p>On the <b>tennis</b> court, I find both a mental and physical challenge, complementing the fast-paced nature of <b>soccer</b>. Together, these activities form a vibrant tapestry, offering a well-rounded and fulfilling lifestyle.</p>
  <div className="about-image">
<img src={profileImage} alt="Profile" />

</div>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                src={skill.imageUrl} 
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
                
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default About

