import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from "../Navigation/Navigation";
import Landing from "../Landing/Landing";

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
        </Switch>
      </div>
    );
  }
}

export default App;
