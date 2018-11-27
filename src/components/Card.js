import React from 'react';

// SCSS
import '../scss/Card.scss';

const Card = (props) => {
    return (
        <div className="card">
            
            <div className="container">
                <div className="front">
                    <div className="content">
                        <div className="character_image"
                            style={{
                                backgroundImage: "url('" + props.image + "')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </div>
                        <div className="character_name">
                            <h3>{props.name}</h3>
                        </div>
                        <div className="character_type">
                            <span className="species">{props.species}</span>
                            /
                            <span className="gender">{props.gender}</span>
                        </div>
                    </div>
                </div>
                
                <div className="back">
                    <div className="content">
                        <p><span>Name: </span>{props.name}</p>
                        <p><span>Species: </span>{props.species}</p>
                        <p><span>Gender: </span>{props.gender}</p>
                        <p><span>Current Status: </span>{props.status}</p>
                        <p><span>Last Location: </span>{props.location}</p>
                        <span className="id">id: {props.id}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;