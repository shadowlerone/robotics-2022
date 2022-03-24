import React, {useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import NavBar from "./Navbar";

import Home from "./Home";
import Transition1 from "./Transition1";
import Transition2 from "./Transition2";
import Transition3 from "./Transition3";
import Menu from "./Menu";
import Arcanum from './Arcanum';
import Characters from "./Characters";
import Vaniercollege from "./Vaniercollege";
import Journey from "./Journey";
import Robot from "./Robot";
import Jackpot from "./Jackpot"
import ErrorPage from "./ErrorPage"
import Gallery from "./Gallery"

function App() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Router hashType="hashbang">
            <div className="App">
                <NavBar sidebar={sidebar} showSidebar={showSidebar} />
                <Switch>
                    <Route exact path="/" component={() => <Home/>} />
                    <Route exact path="/transition1" component={() => <Transition1/>} />
                    <Route exact path="/transition2" component={() => <Transition2/>} />
                    <Route exact path="/transition3" component={() => <Transition3/>} />
                    <Route exact path="/menu" component={() => <Menu />} />
                    <Route exact path="/journey" component={() => <Journey sidebar={sidebar} showSidebar={showSidebar} />} />
                    <Route exact path="/arcanum" component={() => <Arcanum/>} />
                    <Route exact path="/robot" component={() => <Robot/>} />
                    <Route exact path="/jackpot" component={() => <Jackpot/>} />
                    <Route exact path="/characters" component={() => <Characters/>} />
                    <Route exact path="/vaniercollege" component={() => <Vaniercollege/>} />
                    <Route exact path="/gallery" component={() => <Gallery/>} />
                    <Route exact path="*" component={() => <ErrorPage/>} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;