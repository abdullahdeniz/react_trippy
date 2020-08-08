import React from 'react';



import Home from './components/core/Home'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



import Config from './Config';
import Global from './Global';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/">
              <Global />
            </Route>
            <Route path="/">
              <Config />
            </Route>
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
