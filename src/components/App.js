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
import Robot from "./Robot";
import Jackpot from "./Jackpot"
import ErrorPage from "./ErrorPage"
import Gallery from "./Gallery"

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
          <Route exact path="/robot" component={Robot} />
          <Route exact path="/jackpot" component={Jackpot} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/vaniercollege" component={Vaniercollege} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
