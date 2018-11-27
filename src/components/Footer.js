import React from 'react';

// SCSS
import '../scss/Footer.scss';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="left">
                <div className="info">
                    <div className="names">
                        <span className="name">Characters</span>
                        <span className="name">Locations</span>
                        <span className="name">Episodes</span>
                    </div>
                    <div className="values">
                        <span className="value">{props.totalCharacters}</span>
                        <span className="value">{props.totalLocations}</span>
                        <span className="value">{props.totalEpisodes}</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="links">
                    <a href="/">Refresh Page</a>
                    <a href="https://rickandmortyapi.com/">Rick & Morty API</a>
                    <a href="https://rickandmortyapi.com/documentation">API Documentation</a>
                    <a href="https://github.com/JacobCode/rickandmorty">Source</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;