import React from 'react'
import './testimonials.css'
import avtr from './test'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>
        review from clients
      </h5>
      <h2>
        Testimonials
      </h2>
      <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials__container">
        {avtr.map((i , index)=>{
          return(
            <SwiperSlide key={index} className='testimonials'>
              <div className="client__avatar">
                <img src={i.image} alt={i.titel} className='client__image'/>
              </div>
                <h5 className='client__name'>
                  {i.name}
                </h5>
                <small className='client__review'>
                  {i.desc}
                </small>
            </SwiperSlide>
            )
          })}
      </Swiper>
    </section>
  )
}

export default Testimonials