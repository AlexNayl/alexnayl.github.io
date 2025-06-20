import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as ReactDOMServer from "react-dom/server";

import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/background.svg'
import BackgroundComponent from './svgComponents/Background';

const svgString = encodeURIComponent(
  ReactDOMServer.renderToStaticMarkup(<BackgroundComponent />)
);

const bgStyle = {
  width: "100%",
	height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
	position: 'fixed',
	top: 0,
	backgroundImage: `url("data:image/svg+xml,${svgString}")`,
	backgroundColor: 'var(--colorbg1)',
	zIndex: -1,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={bgStyle}/>
    <App />
  </React.StrictMode>
);
