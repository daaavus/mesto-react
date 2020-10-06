import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import pen from '../images/pen.svg';
import Card from './Card';

export default function Main(props) {
    const userContext = React.useContext(CurrentUserContext)

 return (
    <main className="content">

        <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userContext.avatar} alt="Аватар" />
            <div className="profile__pen-container">
            <img className="profile__pen" alt='just a pen' src={pen} />
            </div>
        </div>
        <div className="profile__info">
            <div className="profile__container">
            <h1 className="profile__title">{userContext.name}</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
            </div>
            <h5 className="profile__subtitle">{userContext.about}</h5>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
        </section>

        <ul className="elements">{props.cards.map(card => <Card key={card._id} {...card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />)}</ul>

    </main>
 )
}