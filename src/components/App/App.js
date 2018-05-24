import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from "../Navigation/Navigation";
import Landing from "../Landing/Landing";
import Distance from "../Distance/Distance";
import SignUp from "../SignUp/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            exact path='/'
            component={Landing}
          />
          <Route
            exact path='/distance'
            component={Distance}
          />
          <Route
            exact path='/signup'
            component={SignUp}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
