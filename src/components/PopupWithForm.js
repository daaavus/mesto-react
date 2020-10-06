import React from 'react';

export default function PopupWithForm(props) {
    return(
        <div className={`${props.name} ${props.isOpen && 'popup_opened'}`}>
            <form onSubmit={props.onSubmit} className={`popup__container ${props.name}__container`} id="popupContainer" noValidate>
                <button className={props.clsBtn} onClick={props.onClose} type="button" id="popup_close"></button>
                <fieldset className="popup__content">
                    <p className="popup__title">{props.title}</p>
                    {props.children}
                </fieldset>
                <button className={`${props.saveBtn} popup__save-button`} type="submit">{props.btnText}</button>
            </form>
        </div>
    )
}