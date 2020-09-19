import React from 'react';
import pen from '../images/pen.svg';
import api from '../utils/Api';
import Card from './Card';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const[userName, setUserName] = React.useState('')
    const[userDescription, setUserDescription] = React.useState('')
    const[userAvatar, setUserAvatar] = React.useState('')
    const[cards, setCards] = React.useState([])

    React.useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getInitialCards()])
            .then(([profileInfo, initialCards]) => {
                setUserName(profileInfo.name)
                setUserDescription(profileInfo.about)
                setUserAvatar(profileInfo.avatar)
                setCards(initialCards)
            }
        )
    }, [])

 return (
    <main className="content">

        <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            <div className="profile__pen-container">
            <img className="profile__pen" alt='just a pen' src={pen} />
            </div>
        </div>
        <div className="profile__info">
            <div className="profile__container">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
            </div>
            <h5 className="profile__subtitle">{userDescription}</h5>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
        </section>

        <ul className="elements">{cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} />)}</ul>

    </main>
 )
}