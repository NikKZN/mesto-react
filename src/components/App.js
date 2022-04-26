import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {

  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  } 
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={
        handleEditProfileClick
      } onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name={'profile'} title={'Редактировать профиль'} button={'Сохранить'} children={
        <>
          <input className="popup__input popup__input_field_name" id="name-input" type="text" name="name" value="" placeholder="Ваше имя" minlength="2" maxlength="40" required/>
          <span className="popup__input-error name-input-error"></span>
          <input className="popup__input popup__input_field_job" id="job-input" type="text" name="about" value="" placeholder="О себе" minlength="2" maxlength="200" required/>
          <span className="popup__input-error job-input-error"></span>
        </>
      }/>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name={'mesto'} title={'Новое место'} button={'Создать'} children={
        <>
          <input className="popup__input popup__input_field_mesto" id="mesto-input" type="text" name="mesto" minlength="2" maxlength="30" value="" placeholder="Название" required/>
          <span className="popup__input-error mesto-input-error"></span>
          <input className="popup__input popup__input_field_link" id="link-input" type="url" name="link" value="" placeholder="Ссылка на картинку" required/>
          <span className="popup__input-error link-input-error"></span>
        </>
      }/>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name={'avatar'} title={'Обновить аватар'} button={'Сохранить'} children={
        <>
          <input className="popup__input popup__input_field_avatar" id="avatar-input" type="url" name="link" value="" placeholder="Ссылка на аватар" required/>
          <span className="popup__input-error avatar-input-error"></span>
        </>
      }/>
      
      <PopupWithForm name={'confirm'} title={'Вы уверены?'} button={'Да'} />
      
      <template className="template">
          <li className="element elements__item">
            <img className="element__card" src=" " alt="Тут скоро будет картинка"/>
            <button className="element__trash" type="button" aria-label="Удалить."></button>
            <div className="element__caption">
              <h2 className="element__caption-text"></h2>
              <div>
                <button className="element__caption-like" type="button" aria-label="Нравится."></button>
                <p className="element__caption-count"></p>
              </div>            
            </div>
          </li>
      </template>
    </div>
  );
}

export default App;
