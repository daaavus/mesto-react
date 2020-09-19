import React from 'react';

export default function PopupWithImage({card, onClose}) {
    const link = card ? card.link : '#'; 
    console.log(link)
    console.log(card)
    return(
        <div className={`image-popup ${card && 'popup_opened'}`}>
            <form className="image-popup__container">
            <button type="button" onClick={onClose} className="image-popup__close-button" id="popup_close"></button>
            <figure className="image-popup__figure">
                <img className="image-popup__image" src={link} alt="картинка" />
                <figcaption className="image-popup__caption">{card ? card.name : '#'}</figcaption>
            </figure>
            </form>
        </div>
    )
}