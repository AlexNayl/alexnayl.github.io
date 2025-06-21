import logo from './logo.svg';
import './App.css';
import DownloadPDFIcon from './svgComponents/DownloadPDF';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, I'm
        </p>
        <h1>
          Alexander (Alex) Naylor
        </h1>
        <p>
          I'm a career goal oriented Software Developer and IT Technician with an education focusing on Data Science. 
          <br/>
          I'm offering a well rounded skill set and the ability to adapt to new technology stacks quickly.
        </p>
        <div class="d-flex link-bar">
          <a href = 'https://github.com/AlexNayl' class="social">
            <img src = 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=black&color=white'/>
          </a>
          <a href = 'https://www.linkedin.com/in/alexnayl/' class="social">
            <img src = "https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"/>
          </a>
          <a href="../Alexander_Naylor_Resume.pdf" class="text-white social">
            <DownloadPDFIcon height="100%" fill='white'/>
            Download Resume
				  </a>
        </div>
        
      </header>
    </div>
  );
}

export default App;
