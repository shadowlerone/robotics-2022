import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function NavBar() {
    return (
        <div className="navbar">
            <h3>Connectory</h3>
            <div className="buttons-container">
                <Link to="/">
                    <button>Landing</button>
                </Link>
                <Link to="/menu">
                    <button>Menu</button>
                </Link>
                <Link to="/transition">
                    <button>Transition</button>
                </Link>
                <Link to="/journey">
                    <button>Journey</button>
                </Link>
                <Link to="/arcanum">
                    <button>Arcanum 2022</button>
                </Link>
                <Link to="/characters">
                    <button>Characters</button>
                </Link>
                <Link to="/vaniercollege">
                    <button>Vanier College</button>
                </Link>
            </div>
        </div>
    );
}

export default withRouter(NavBar);
