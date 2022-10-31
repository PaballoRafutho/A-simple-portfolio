import React from 'react'
import "./About.css"
import AboutImage from '../../asserts/AboutImage.jpeg'
import faAword from 'react-icons/fa'


const About = () => {
  return(
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src ={AboutImage} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <faAword className='about__icon'/>
              <h5>Graduation</h5>
              <small>2022</small> 
            </article>
          </div>
        
        <p>
        I have completed my final year in BSC COMP and looking to start my programming journey and projects. 
        I'm always willing to learn new skill related to the IT sector. 
        I'm open minded and willing to take suggestion from co-workers on projects.
        </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About