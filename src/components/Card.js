import React from 'react';

export default function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }
    console.log(card)

    return(
        <>
            <li className="element">
            <img className="element__pic" onClick={handleClick} alt="картинка" src={card.link} />
            <h4 className="element__title">{card.name}</h4>
            <div className="element__like-container">
                <button className="element__heart" type="button"></button>
                <p className="element__like-count">{card.likes.lenght}</p>
            </div>
            <button className="element__trash hidden" type="button"></button>
            </li>
        </>
    )
}