import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Login from './components/Login'

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={Login} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
