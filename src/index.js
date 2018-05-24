import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


const application = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();
