import { Routes, Route } from 'react-router-dom';
// Css
import './App.css';
// Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// Projects
import { projectsArray } from './data';

const App = () => {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Projects projects={projectsArray} />} />
        <Route path='/' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;