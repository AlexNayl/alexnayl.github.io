import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router';
import Home from './ReactCompomemts/Home';
import Projects from './ReactCompomemts/Projects';
import Experience from './ReactCompomemts/Experience';
import Passions from './ReactCompomemts/Passions';
import NavBar from './ReactCompomemts/NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path='experience' element={<Experience/>} />
          <Route path='passions' element={<Passions/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
