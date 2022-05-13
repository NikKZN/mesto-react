import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleEditAvatarSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleEditAvatarSubmit}
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
            ref={avatarRef}
            defaultValue=""
            placeholder="Ссылка на аватар"
            required
          />
          <span className="popup__input-error avatar-input-error"></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
