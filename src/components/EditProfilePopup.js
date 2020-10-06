import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

export default function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const[name, setName] = React.useState();
    const[description, setDescription] = React.useState();

    React.useEffect(() => {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }, [currentUser]); 

    function handleNameChange(e) {
      setName(e.target.value);
    }

    function handleDescriptionChange(e) {
      setDescription(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
    
      props.onUpdateUser({
        name,
        about: description,
      });
    }

    return (
        <PopupWithForm 
        onSubmit={handleSubmit}
        name={'popup'}
        title={'Редактировать профиль'}
        btnText={'Сохранить'}
        clsBtn={'popup__close-button'}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >

      <input type="text" className="popup__name input" placeholder="ФИО" id='input-name'
          minLength="2" maxLength="40" pattern="^[a-zA-Z-А-Яа-яЁё\s]+$" value={name || ''} 
          required onChange={handleNameChange} />
        <span className='input-error' id="input-name-error"></span>

        <input type="text" className="popup__info input" placeholder="О себе" id ='input-job' minLength="2"
          maxLength="200" value={description || ''} required onChange={handleDescriptionChange} />
        <span className='input-error' id="input-job-error"></span>
        </PopupWithForm>
    )
}