import logo from './logo.svg';
import './App.css';
import DownloadPDFIcon from './svgComponents/DownloadPDF';
import Projects from './Projects';
import DownArrow from './svgComponents/DownArrow';
import MapPin from './svgComponents/MapPin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-Main">
          <img className="profile-pic" src="/profile.jpg" height="300rem"/>
          <div className="header-Middle">
            <p>
              Hi, I'm
            </p>
            <h1>
              Alexander (Alex) Naylor
            </h1>
            <p><MapPin height="1rem" fill="white"/> Southern Ontario Canada</p>
            <p>
              I'm a career goal oriented Software Developer and IT Technician with an education focusing on Data Science.
              I'm offering a well rounded skill set and the ability to adapt to new technology stacks quickly.
            </p>
            <div className="d-flex link-bar">
              <a href = 'https://github.com/AlexNayl' className="social">
                <img src = 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=black&color=white'/>
              </a>
              <a href = 'https://www.linkedin.com/in/alexnayl/' className="social">
                <img src = "https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"/>
              </a>
              <a href="../Alexander_Naylor_Resume.pdf" className="text-white social">
                <DownloadPDFIcon height="100%" fill='white'/>
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <footer>
          <DownArrow height="100%"/>
          <h1>Projects</h1>
          <DownArrow height="100%"/>
        </footer>
      </header>
      <Projects/>
      <footer>
        <h2>Don't see what your looking for?</h2>
        <p>If a specific technology your looking for isn't here, that doesn't mean I cant do it! Some of my capabilities aren't yet demonstrated through my projects, and any skills I lack I'm eager to learn!
          <br/><br/>
          Take a look at my Resume, and send me an email if you have any specific requirement questions.
        </p>
      </footer>
    </div>
  );
}

export default App;
