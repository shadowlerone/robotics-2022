import React from "react";
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="Menu">
            <h1>Menu</h1>
            <div className="navbar">
                <div className="buttons-container">
                    <Link to="/">
                        <button>Landing</button>
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
        </div>
    );
}
