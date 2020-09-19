import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const[isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false)
  const[selecterCard, setSelectedCard] = React.useState(false)
  
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
  
  return (
    <> 

    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onDeleteCard={handleDeleteCard}
      onCardClick={handleCardClick}
    />
    <Footer />

    <PopupWithForm 
      name={'popup'}
      title={'Редактировать профиль'}
      btnText={'Сохранить'}
      clsBtn={'popup__close-button'}
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >

    <input className="popup__name input" placeholder="ФИО" type="text" id='input-name'
        minLength="2" maxLength="40" pattern="^[a-zA-Z-А-Яа-яЁё\s]+$" required />
      <span className='input-error' id="input-name-error"></span>

      <input className="popup__info input" placeholder="О себе" type="text" id ='input-job' minLength="2"
        maxLength="200" required />
      <span className='input-error' id="input-job-error"></span>
      </PopupWithForm>

    <PopupWithForm 
      name={'elements-popup'}
      title={'Новое место'}
      btnText={'Сохранить'}
      saveBtn={'popup__elements-save-button'}
      clsBtn={'popup__close-elements-button'}
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
    <input className="popup__mesto input" placeholder="Название"
      type="text" minLength="1" maxLength="30" id='input-place' required />
    <span className='input-error' id="input-place-error"></span>

    <input className="popup__link input" placeholder="Ссылка на картинку"
      type='url' id='input-url' required />
    <span className='input-error' id="input-url-error"></span>
    </PopupWithForm>

    <PopupWithForm 
      name={'avatar-popup'}
      title={'Обновить аватар'}
      btnText={'Сохранить'}
      saveBtn={'avatar-popup__save-button'}
      clsBtn={'avatar-popup__close-button'}
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
    <input className="popup__avatar-link input" placeholder="Ссылка на картинку" type="url"
      id='input-name' required />
    <span className='input-error' id="input-link-error"></span>
    </PopupWithForm>

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
    </>
  );
}

export default App;
