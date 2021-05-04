import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Review from './components/Review';
import Errors from './components/Errors'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/review/:id" component={Review} />

      <Route>
        <Errors error={{ number: 404, text: "NOT FOUND" }} />
      </Route>
    </Switch>
  </Router>
), document.getElementById('root'));

serviceWorker.unregister();