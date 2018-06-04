import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Navigation from "../Navigation/Navigation";
import Landing from "../../components/Landing/Landing";
import Distance from "../../components/Distance/Distance";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Tags from "../Tags/Tags";
import CreateActivity from "../CreateActivity/CreateActivity";

export class App extends Component {
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
            exact path='/tags'
            component={Tags}
          />
          <Route
            exact path='/signup'
            component={SignUp}
          />
          <Route
            exact path='/signin'
            component={SignIn}
          />
          <Route
            exact path='/create'
            component={CreateActivity}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
