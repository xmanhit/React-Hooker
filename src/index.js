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
import NoMatch from './components/Errors'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />

      <Route exact  path="/review/:id" component={Review} />

      <Route>
        <NoMatch error={{ number: 404, text: "Page doesn't exist" }} />
      </Route>
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


serviceWorker.unregister();