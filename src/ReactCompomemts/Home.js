import './Home.css';
import DownloadPDFIcon from '../svgComponents/DownloadPDF';
import MapPin from '../svgComponents/MapPin';

function Home(){
	return <header className="App-header">
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
	</header>
}

export default Home