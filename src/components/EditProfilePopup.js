import PopupWithForm from "./PopupWithForm";
import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleEditProfileSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleEditProfileSubmit}
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
            onChange={handleNameChange}
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
            onChange={handleDescriptionChange}
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
  );
}

export default EditProfilePopup;
