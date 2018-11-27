import React from 'react';

// SCSS
import '../scss/Episodes.scss'

// Components
import Row from './Row';

const Episodes = ({ episodeData, episodeData2 }) => {
    const episodeComponentOne = episodeData.map((ep, i) => {
        return <Row key={ep.id} title={ep.name} episode_val={ep.episode} air_date={ep.air_date} id={ep.id}/>
    });
    const episodeComponentTwo = episodeData2.map((ep2, i) => {
        return <Row key={ep2.id} title={ep2.name} episode_val={ep2.episode} air_date={ep2.air_date} id={ep2.id}/>
    })
    return (
        <div className="episodes_container">
            <div className="episode">
                <h1>Seasons 1-3</h1>
                <div className="rows">
                    <div className="page page1">
                        {/* TITLES */}
                        <div className="titles">
                            <h4 className="col-lg title">Title</h4>
                            <h4 className="col-sm air_date">Air Date</h4>
                            <h4 className="col-sm episode_val">Episode</h4>
                            <h4 className="col-sm id">ID</h4>
                        </div>
                        {/* Page 1 episodes */}
                        {episodeComponentOne}
                    </div>
                    <div className="page page2">
                        {/* TITLES */}
                        <div className="titles">
                            <h4 className="col-lg title">Title</h4>
                            <h4 className="col-sm air_date">Air Date</h4>
                            <h4 className="col-sm episode_val">Episode</h4>
                            <h4 className="col-sm id">ID</h4>
                        </div>
                        {/* Page 2 episodes */}
                        {episodeComponentTwo}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Episodes;