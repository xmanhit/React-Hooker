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
import NoMatch from './components/Error404'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
  <Router basename="/React-Hooker">
    <Switch>
      <Route exact path="/">
        <App />
      </Route>

      <Route path="/review/:id" component={Review} />

      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


serviceWorker.unregister();