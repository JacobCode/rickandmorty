import React from 'react';
import Card from './Card';

import '../scss/CardList.scss';

const CardList = ({ data }) => {
    const cardComponent = data.map((card, i) => {
        return <Card key={data[i].id} image={data[i].image} name={data[i].name} species={data[i].species} gender={data[i].gender} status={data[i].status} location={data[i].location.name} id={data[i].id}/>
    })
    return (
        <div className="card_list">
            {cardComponent}
            {/* COMPONENT INSERT HERE */}
        </div>
    );
}

export default CardList;