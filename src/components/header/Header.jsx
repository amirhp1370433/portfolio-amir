import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          hello im 
        </h5>
        <h1>
          amir sade
        </h1>
        <h5 className="text-light">
          full stack developer
        </h5>
        <CTA/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header