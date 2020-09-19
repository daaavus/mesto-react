import React from 'react';

export default function PopupWithForm({name, title, btnText, saveBtn, clsBtn, isOpen, onClose, children}) {
    return(
        <div className={`${name} ${isOpen && 'popup_opened'}`}>
            <form className={`popup__container ${name}__container`} id="popupContainer" noValidate>
                <button className={clsBtn} onClick={onClose} type="button" id="popup_close"></button>
                <fieldset className="popup__content">
                    <p className="popup__title">{title}</p>
                    {children}
                </fieldset>
                <button className={`${saveBtn} popup__save-button`} type="submit">{btnText}</button>
            </form>
        </div>
    )
}