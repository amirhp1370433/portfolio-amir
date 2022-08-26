import React from 'react'
import './about.css'
import IMG from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>
        get to know
      </h5>
      <h2>
        about me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="icon__container">
                <FaAward className='about__icon'/>
              </div>
              <h5 >
                experience
              </h5>
              <small>
                +3 years working
              </small>
            </article>
            <article className="about__card">
              <div className="icon__container">
                <FiUsers className='about__icon'/>
              </div>
              <h5 >
                clients
              </h5>
              <small>
                +200 worldwide 
              </small>
            </article>
            <article className="about__card">
              <div className="icon__container">
                <VscFolderLibrary className='about__icon'/>
              </div>
              <h5 >
                projects
              </h5>
              <small>
                +80 completed
              </small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, ipsam sunt optio vero illum dolorem cumque assumenda voluptatibus vitae deleniti similique consequuntur in aliquam, placeat maiores, quae possimus perspiciatis eveniet!
          </p>
          <a className='btn btn-primary' href="#contact">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About