import React from 'react';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" style={{paddingRight: "2.5re"}} href="/Portfolio"><em>Home</em></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/Portfolio/projects"><em>Projects</em></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Portfolio/research"><em>Research</em></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Portfolio/about"><em>About</em></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
