import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    link: "",
    name: "",
  });

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      name: card.name,
    });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: "",
      name: "",
    });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={"profile"}
        title={"Редактировать профиль"}
        button={"Сохранить"}
        children={
          <>
            <input
              className="popup__input popup__input_field_name"
              id="name-input"
              type="text"
              name="name"
              defaultValue=""
              placeholder="Ваше имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-input-error"></span>
            <input
              className="popup__input popup__input_field_job"
              id="job-input"
              type="text"
              name="about"
              defaultValue=""
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error job-input-error"></span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={"mesto"}
        title={"Новое место"}
        button={"Создать"}
        children={
          <>
            <input
              className="popup__input popup__input_field_mesto"
              id="mesto-input"
              type="text"
              name="mesto"
              minLength="2"
              maxLength="30"
              defaultValue=""
              placeholder="Название"
              required
            />
            <span className="popup__input-error mesto-input-error"></span>
            <input
              className="popup__input popup__input_field_link"
              id="link-input"
              type="url"
              name="link"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error link-input-error"></span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={"avatar"}
        title={"Обновить аватар"}
        button={"Сохранить"}
        children={
          <>
            <input
              className="popup__input popup__input_field_avatar"
              id="avatar-input"
              type="url"
              name="link"
              defaultValue=""
              placeholder="Ссылка на аватар"
              required
            />
            <span className="popup__input-error avatar-input-error"></span>
          </>
        }
      />

      <PopupWithForm name={"confirm"} title={"Вы уверены?"} button={"Да"} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
