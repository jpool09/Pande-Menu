import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";


import HomeView from './views/HomeView/HomeView';
import MundialView from './views/MundialView/MundialView';
import View404 from './views/View404/View404'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <HomeView/>
          </Route>
          <Route path="/mundial">
            <MundialView/>
          </Route>
          <Route path="*">
            <View404 />
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
