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
                        <p className="name"><span>Name: </span>{props.name}</p>
                        <p className="status"><span>Status: </span>{props.status}</p>
                        <p className="location"><span>Last Location: </span>{props.location}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;