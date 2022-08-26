import { useState, useEffect } from 'react';
// Css
import './projects.css';
// Card
import Card from './Card/Card';

const Projects = ({ projects }) => {
  const [projectsArr, setProjectsArr] = useState([]);
  
  useEffect(() => {
    if(projects){
      setProjectsArr(projects);
    }
  }, [projects])

  return (
    <div className='projects'>
      <h2>projects</h2>
      <hr />
      <div className='projects-div'>
        {
          projectsArr?.length > 0 && 
          projectsArr.map(i => <Card key={i.name} project={i} />)
        }
      </div>
    </div>
  );
}

export default Projects;