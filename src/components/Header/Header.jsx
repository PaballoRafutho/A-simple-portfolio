import React from 'react'
import './Header.css'
import CTA from './CTA/CTA'
import Me from '../../asserts/Me.jpg'
import Headersocials from './CTA/Headersocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Paballo Rafutho</h1>
            <h5 className='text-light'>University Graduate</h5>
            <CTA />
            <Headersocials />
            <div className='me'>
                <img src={Me} alt="me"/>
            </div>
            <a href="#contact"className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header