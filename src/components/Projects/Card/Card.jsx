import './card.css';

const Card = ({ project }) => {
  return (
    <div className='card'>
      <h5>{project.name}</h5>
      <img src={project.img} alt='project img' />
      <p>{project.tools}</p>
      <div className='card-links'>
          <a 
            href={project.github} 
            target='_blank' 
            rel='noopener noreferrer'
          >
            github
          </a>
          <a 
            href={project.live} 
            target='_blank' 
            rel='noopener noreferrer'
          >
            live
          </a>
      </div>
    </div>
  );
}

export default Card;