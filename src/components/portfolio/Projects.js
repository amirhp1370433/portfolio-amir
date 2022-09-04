import React, { useState, useEffect } from 'react';

// import data
import { projectsData } from './data';
import { projectsNav } from './data';

// import components
import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <section id='portfolio'>
      <h5>
        my recent works
      </h5>
      <h2>
        portfolio
      </h2>
      {/* projects nav */}
      <ul className='nav-list'>

          {projectsNav.map((item, index) => {
            return (
              <li
              onClick={(e) => {
                handleClick(e, index);
                }}
                className={`${
                  active === index ? 'nav-item active' : 'nav-item'
                } `}
                key={index}
                >
                {item.name}
              </li>
            );
          })}
          </ul>
      <div className="container portfolio__container">
        {
          projects.map(( item , index)=>{
            return(
              <article key={index} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <Project item={item} key={item.id} />
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
    </div>
  );
};

export default Projects;
