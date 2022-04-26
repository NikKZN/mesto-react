function ImagePopup() {
  return (
    <section className="popup popup_type_image">
      <div className="popup__preview">
        <button className="popup__button-close" type="button" aria-label="Закрыть окно."></button>
        <img className="popup__image" src=" " alt=""/>
        <h2 className="popup__caption"></h2>
      </div>
    </section>
  )
}

export default ImagePopup;