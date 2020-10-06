import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddCardPopup from './AddCardPopup';

function App() {
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const[isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const[selecterCard, setSelectedCard] = React.useState(false);
  const[currentUser, setCurrentUser] = React.useState('');
  const[cards, setCards] = React.useState([]);

  const getUserLoadCards = async ()  => {
		try{
			const user = await api.getProfileInfo();
			const data = await api.getInitialCards();
			setCurrentUser(user);
			setCards(data);
		} catch(error) { 
			console.log(error);
		} 
  }
  
  React.useEffect(() => {
		getUserLoadCards();
	}, []);
  
  const handleCardClick = (card) => {
    setSelectedCard(card)
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function handleDeleteCard() {
    setIsDeletePopupOpen(true)
  }
  function closeAllPopups() {
    setIsDeletePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(false)
  }
  function handleUpdateUser(user) {
    api.updateProfileInfo(user)
      .then((res) => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
      })
  }
  function handleLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		
		api.editLikeActive(card._id, !isLiked)
		.then((newCard) => {
		  const newCards = cards.map((c) => c._id === card._id ? newCard : c);
		  setCards(newCards);
		})
		.catch(err=>console.log(err));
  }
  function deleteCard(card) {
    api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter(c => c._id !== card._id);
      setCards(newCards);
    })
    .catch(err=>console.log(err));
  }
  function handleUpdateAvatar(avatar) {
    api.putAvatarInfo(avatar)
		.then((res) =>{
			setCurrentUser(res);
			setIsEditAvatarPopupOpen(false)
		})
		  .catch(err=>console.log(err));
  }
  function handleAddPlaceSubmit(card) {
		api.addCard(card)
		.then((newCard) => {
			setCards([newCard, ...cards]); 
			setIsAddPlacePopupOpen(false);
		})
		  .catch(err=>console.log(err));
	}
  
  return (
    <> 
    <CurrentUserContext.Provider value={currentUser}>

      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteCard={handleDeleteCard}
        onDeleteCardAccept={deleteCard}
        onCardClick={handleCardClick}
        onCardLike={handleLike}
        cards={cards}
      />
      <Footer />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} 
      onUpdateUser={handleUpdateUser}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} 
      onUpdateAvatar={handleUpdateAvatar}/>
      <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit}/>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>

      <PopupWithForm 
        name={'delete-popup'}
        title={'Вы уверены?'}
        btnText={'Да'}
        saveBtn={'delete-popup__save-button'}
        clsBtn={'delete-popup__close-button'}
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithImage 
        card={selecterCard}
        onClose={closeAllPopups}
      />

    </CurrentUserContext.Provider>
    </>
  );
}

export default App;
