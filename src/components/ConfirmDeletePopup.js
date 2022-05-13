import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {
  function handleConfirmDeleteSubmit(e) {
    e.preventDefault();
    props.onDeleteCard();
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleConfirmDeleteSubmit}
      name={"confirm"}
      title={"Вы уверены?"}
      button={"Да"}
    />
  );
}

export default ConfirmDeletePopup;
