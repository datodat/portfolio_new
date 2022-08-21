import { useState } from 'react';
// Css
import './projects.css';
// Card
import Card from './Card/Card';
// Projects
import { projectsArray } from '../../data';

const Projects = () => {
  const [projectsData] = useState(projectsArray);

  return (
    <div className='projects'>
      <h2>projects</h2>
      <hr />
      <div className='projects-div'>
        {
          projectsData.length > 0 && projectsData.map(i => <Card key={i.name} project={i} />)
        }
      </div>
    </div>
  );
}

export default Projects;