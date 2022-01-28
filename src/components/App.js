import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import NavBar from "./Navbar";
import Menu from "./Menu";
import Landing from "./Landing";
import Arcanum from './Arcanum';
import Characters from "./Characters";
import Vaniercollege from "./Vaniercollege";
import Journey from "./Journey";
import Transition from "./Transition";

function App() {
  return (
    <Router hashType="hashbang">
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/transition" component={Transition} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/journey" component={Journey} />
          <Route exact path="/arcanum" component={Arcanum} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/vaniercollege" component={Vaniercollege} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
