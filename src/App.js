import { Routes, Route } from 'react-router-dom';
// Css
import './App.css';
// Components
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Projects />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;