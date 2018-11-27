import React from 'react';

// SCSS
import '../scss/Row.scss'

const Row = (props) => {
    return (
        <div className="row">
            {/* Episode title */}
            <span className="title col-lg"><h5>{props.title}</h5></span>
            {/* Episode air date (year) */}
            <span className="air_date col-sm"><h5>{props.air_date.substr(0, 3).toUpperCase()} {props.air_date.substr(-4)}</h5></span>
            {/* Episode value */}
            <span className="episode_val col-sm"><h5>{props.episode_val}</h5></span>
            {/* Episode id */}
            <span className="id col-sm"><h5>{props.id}</h5></span>
        </div>
    )
}

export default Row;