function Card(props) {
  return (
    <li className="element elements__item">
    <div className="element__card" style={{ backgroundImage: `url(${props.card.link})` }}/>
    <button className="element__trash" type="button" aria-label="Удалить."></button>
    <div className="element__caption">
      <h2 className="element__caption-text">{props.card.name}</h2>
      <div>
        <button className="element__caption-like" type="button" aria-label="Нравится."></button>
        <p className="element__caption-count">{props.card.likes.length}</p>
      </div>            
    </div>
  </li> 
  );
}

export default Card;