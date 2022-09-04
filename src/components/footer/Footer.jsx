import React from 'react'
import './footer.css'
import {BsLinkedin , BsWhatsapp} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
  const Footer = () => {
  return (
  <footer>
       <a href="#" className='footer__logo'> amir sade.co</a>
     <ul className="permalinks">
      <li>
        <a href="#" className='link'>home</a>
      </li>
      <li>
        <a href="#about" className='link'>about</a>
      </li>
      <li>
        <a href="#Experience" className='link'>Experience</a>
      </li>
      <li>
        <a href="#Services" className='link'>Services</a>
      </li>
      <li>
        <a href="#portfolio" className='link'>portfolio</a>
      </li>
      <li>
        <a href="#Testimonials" className='link'>Testimonials</a>
      </li>
      <li>
        <a href="#contact" className='link'>contact</a>
      </li>
    </ul>
    <div className="footer__socials">
      <div className="place">
        <a href="https://www.linkedin.com/in/amir-sade-9a9134245/" target='_blank' className='links'><BsLinkedin className='iconss'/></a>
        <a href="https://github.com/amirhp1370433?tab=repositories" target='_blank'  className='links'><FiGithub className='iconss'/></a>
        <a href="https://wa.me/989198247460?text=hi%20i`m%20intrested%20to%20work%20with%20you." target='_blank'  className='links'><BsWhatsapp/></a>
      </div>
    </div>
    <div className="footer__copyright">
      <small> 
        &copy; amirsade dev. all rights reserved .
      </small>
    </div>
  </footer>
  )
}

export default Footer