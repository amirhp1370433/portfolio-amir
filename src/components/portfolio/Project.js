import React from 'react';
import'./portfolio.css'
import { projectsData } from './data';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
        <img className='portfolio__item-image' src={item.image} alt='' />
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.explain}
      </p>
    </div>
  );
};

export default Project;
