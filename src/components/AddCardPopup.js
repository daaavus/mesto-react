import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddCardPopup(props) {
    const[title, setTitle] = React.useState()
    const[link, setLink] = React.useState()

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleLinkChange(e) {
        setLink(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();

        props.onAddCard({
            title,
            link
          });
    }

    return(
        <PopupWithForm 
        name={'elements-popup'}
        title={'Новое место'}
        btnText={'Сохранить'}
        saveBtn={'popup__elements-save-button'}
        clsBtn={'popup__close-elements-button'}
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
      <input value={title} className="popup__mesto input" placeholder="Название"type="text" 
      minLength="1" maxLength="30" id='input-place' required onChange={handleTitleChange} />
      <span className='input-error' id="input-place-error"></span>

      <input value={link} className="popup__link input" placeholder="Ссылка на картинку"
        type='url' id='input-url' required onChange={handleLinkChange} />
      <span className='input-error' id="input-url-error"></span>
      </PopupWithForm>
    )
}