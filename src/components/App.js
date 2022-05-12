import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    link: "",
    name: "",
  });
  const [currentUser, setCurrentUser] = useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch(console.log);
  }, []);

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      name: card.name,
    });
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data.name, data.about)
      .then(newData => {
        setCurrentUser(newData);
        closeAllPopups();
      })
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
