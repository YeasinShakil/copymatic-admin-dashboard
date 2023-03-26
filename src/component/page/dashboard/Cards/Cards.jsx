import React from 'react';
import { cardsData } from '../../../../Data/Data';
import Card from './Card';

const Cards = () => {
    return (
        <div className=' flex gap-4'>
           {cardsData.map((card, id)=> {
            return(
                <div className=' w-[100%]' key={id}>
                    <Card 
                    title={card.title}
                    color={card.color}
                    value={card.value}
                    barValue={card.barValue}
                    png={card.png}
                    series= {card.series}
                    />
                </div>
            )
           })}
        </div>
    );
};

export default Cards;