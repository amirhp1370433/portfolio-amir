import React from 'react'
import './portfolio.css'
import data from './portfolioData'
import images from './images'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

 const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        my recent works
      </h5>
      <h2>
        portfolio
      </h2>
      <div className="container portfolio__container">
        {
          data.map(( i , index)=>{
            return(
              <article key={index} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={i.image} alt="" className='portfolio-image' />
                  <p>Lorem, ipsum dolor.</p>
                </div>
                  <h3>
                    {i.titel}
                  </h3>
                  <div className="portfolio__item-cta">
                    <a href={i.github} className='btn' target="_blank">github</a>
                    <a href={i.website} className='btn btn-primary' target='_blank'>live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio