import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.owner._id === currentUser._id;

    const cardDeleteClassName = (
        `${isOwn ? 'element__trash' : 'hidden'}`
    )

    const isLiked = props.likes.some(i => i._id === currentUser._id);
    const cardLikeActiveClassName = (
        `element__heart ${isLiked ? 'element__heart_active' : ''}`
    )

    function handleClick() {
        props.onCardClick({name: props.name, link: props.link});
    }
    function handleLikeClick() {
        props.onCardLike(props)
    }
    function handleDeleteClick() {
        props.onDeleteCardAccept(props)
    }

    return(
        <>
        
            <li className="element">
            <img className="element__pic" onClick={handleClick} alt="картинка" src={props.link} />
            <h4 className="element__title">{props.name}</h4>
            <div className="element__like-container">
                <button className={cardLikeActiveClassName} onClick={handleLikeClick} type="button"></button>
                <p className="element__like-count">{props.likes.lenght}</p>
            </div>
            <button className={cardDeleteClassName} onClick={handleDeleteClick} type="button"></button>
            </li>

        </>
    )
}