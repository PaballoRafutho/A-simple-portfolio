import React from 'react'
import {AiOutlineLinkedin} from  'react-icons/ai'
import {FiGithub} from "react-icons/fi"



const Headersocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer'><AiOutlineLinkedin/></a>
    <a href="https://www.github.com/" target="_blank" rel='noreferrer'><FiGithub/></a>
    </div>
  )
}
export default Headersocials