import React from 'react'
import './about.css'
import IMG from '../../assets/me-about.png'
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
                +5 years working
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
                +50 worldwide 
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
                +50 completed
              </small>
            </article>
          </div>
          <p>
            my name is amir sade and i have 30 yo , when i was younger i founded myself on coding at 23 and i start taught coding by making video games on unity 3d game maker platform but due to lack of coding knowledge i change my route to build web sites when i was in 24 
            so i went to mft institue to learn basics of web development , and after 2 years i turned into a juonior developer that know html css and javascript also because i belive that js is the nouron system of every website or web app.
            we know which internet is expanding in these days and new frame works and technologies are coming up such as react that is one of my favourite js frame works because it is really fluent and easy to work , in the gist it is moudular and you can update you app or your web site every time that you need .
            to sum up i am here to change the game of your bussiens .
            <br/>
            amir sade 
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