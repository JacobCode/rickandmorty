import React from 'react';

// SCSS
import '../scss/PageController.scss';

const PageController = (props) => {
    let links = [];
    for (var i = 0; i < props.info.pages; i++) {
        links.push(props.info.pages);
    }
    let linkValues = Object.keys(links).map(function(key) {
        return <a href={`https://rickandmortyapi.com/api/character/?page=${key}`} key={key}>{Number(key) + 1}</a>;
    })
    
    return (
        <div className="page_controller">
            <div className="page_numbers">
                {linkValues}
            </div>
        </div>
    );
}

export default PageController;