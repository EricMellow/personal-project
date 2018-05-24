import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from "../Navigation/Navigation";
import Landing from "../Landing/Landing";
import Distance from "../Distance/Distance";

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
        </Switch>
      </div>
    );
  }
}

export default App;
