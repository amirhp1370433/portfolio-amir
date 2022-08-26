import React from 'react'
import {BsLinkedin , BsWhatsapp} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/amir-sade-9a9134245/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/amirhp1370433?tab=repositories" target='_blank'><FiGithub/></a>
        <a href="https://wa.me/989198247460?text=hi%20i`m%20intrested%20to%20work%20with%20you." target='_blank'><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials