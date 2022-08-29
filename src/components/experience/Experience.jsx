import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='Experience'>
       <h5>
        what skills i have
       </h5>
       <h2>
        my experience
       </h2>
       <div className="container experience__container">
          <div className="experience__frontend">
            <h3>
              front-end experience
            </h3>
            <div className="experience__content">
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  HTML
                </h4>
                
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  CSS
                </h4>
 
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  JAVASCRIPT
                </h4>
                
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  TAILWIND CSS
                </h4>
                
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  REACT.JS
                </h4>
                
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  AXIOS
                </h4> 
              </article>
            </div>
          </div>
          <div className="experience__backend">
          <h3>
              back-end experience
            </h3>            
            <div className="experience__content">
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  NODE.JS
                </h4>
                
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  REST_API
                </h4>
                
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  MONGO DB
                </h4>
                
              </article>
              <article className='experince__details'>
                <BsPatchCheckFill className='experince__details-icon'/>
                <h4>
                  EXPRESS
                </h4>
                
              </article>
    </div>
          </div>
       </div>
    </section>
  )
}

export default Experience