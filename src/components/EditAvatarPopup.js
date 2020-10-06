import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
    const textInput = React.useRef(null);

	function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: textInput.current.value
        });
      } 

    return (
        <PopupWithForm 
        name={'avatar-popup'}
        title={'Обновить аватар'}
        btnText={'Сохранить'}
        saveBtn={'avatar-popup__save-button'}
        clsBtn={'avatar-popup__close-button'}
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
      <input className="popup__avatar-link input" placeholder="Ссылка на картинку" type="url"
        id='input-name' required ref={textInput} />
      <span className='input-error' id="input-link-error"></span>
      </PopupWithForm>
    )
}