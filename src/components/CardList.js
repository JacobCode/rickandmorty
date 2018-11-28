import React from 'react';
import Card from './Card';

import '../scss/CardList.scss';

const CardList = ({ data, data2 }) => {
    // Cards from first url
    const cardPage = data.map((card, i) => {
        return <Card key={card.id} image={card.image} name={card.name} species={card.species} gender={card.gender} status={card.status} location={card.location.name} id={card.id}/>
    })
    // Cards from second url
    const cardPage2 = data2.map((card2, i) => {
        return <Card key={card2.id} image={card2.image} name={card2.name} species={card2.species} gender={card2.gender} status={card2.status} location={card2.location.name} id={card2.id}/>
    })
    return (
        <div className="card_list">
            {cardPage}
            {cardPage2}
        </div>
    );
}

export default CardList;