// Css
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <h1 className='name'>hi, my name is <span>dato</span></h1>
      <p className='description'>junior fullStack developer</p>
      <p className='about-p'>
        I'm a hardworking and ambitious fullStack (React - Node) 
        developer, who wants to learn as much as possible to enhance 
        his skills as an individual and also as a team worker.
      </p>
      <div className='about-div'>
        <div className='div-left'>
          <h4>working experience</h4>
          <ul>
            <li>
              magticom - network engineer
              <span>2017 - 2022</span>
            </li>
          </ul>
        </div>
        <div className='div-right'>
          <h4>skills</h4>
          <ul>
            <li>html / css</li>
            <li>
              sass / bootstrap / materialUI
              <span>- basics</span>
            </li>
            <li>javascript ES6</li>
            <li>ReactJS</li>
            <li>
              NodeJS / ExpressJS
              <span>- basics</span>
            </li>
            <li>
              postgreSQL / mongoDB
            </li>
            <li>git</li>
            <li>bash / shell</li>
            <li>
              python
              <span>- basics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;