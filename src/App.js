import React from 'react';

import HomeContainer from './containers/HomeContainer'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


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
              <HomeContainer />
            </Route>
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
