import React, { useState } from 'react';
import'./portfolio.css'
import { projectsData } from './data';
const Project = ({ item }) => {
  const [itemIsShown , setItemIsShown] = useState(false)
  const toggleBtn = () => {setItemIsShown( prevState => !prevState)}
  return (
    <article key={item.id} className='portfolio__item'>
    <div className="portfolio__item-image">
      <img src={item.image} alt="" className='portfolio-image' />
     </div>
     <div className='explain__container'>

      <h3 className='explain'>
        {itemIsShown ? item.explain : item.explain.substr(0 , 100)}
         <button onClick={toggleBtn} className='btn-read'>
          read more
        </button>
      </h3>
     </div>
      <div className="portfolio__item-cta">
        <a href={item.category} className='btn' target="_blank">github</a>
        <a href={item.link} className='btn btn-primary' target='_blank'>live Demo</a>
      </div>
  </article>
  );
};

export default Project;
