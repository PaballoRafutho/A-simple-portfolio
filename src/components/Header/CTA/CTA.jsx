import React from 'react'
import CV from '../../../asserts/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download> Download CV</a>      
    </div>
  )
}
export default CTA