import React from 'react'
import "./experience.css"
import {MdVerified} from 'react-icons/md'



const Experience = () => {
  return(
    <section id="Experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience_container">
        <div className='experience__Frontend'>
          <h3>Frontend Development</h3>
          <article className='experience_detail'>
            <MdVerified/>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_detail'>
            <MdVerified/>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_detail'>
            <MdVerified/>
            <h4>Html</h4>
            <small className='text-light'>Beginner</small>
          </article>
          </div>


          <div className='experience__Backend'>
          <h3>Backend Development</h3>
          <article className='experience_detail'>
            <MdVerified/>
            <h4>C++</h4>
            <small className='text-light'>Intermediant</small>
          </article>
          <article className='experience_detail'>
            <MdVerified/>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_detail'>
            <MdVerified/>
            <h4>Oracle SQL</h4>
            <small className='text-light'>Intermediant</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience