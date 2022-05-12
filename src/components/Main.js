import React, { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(console.log);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    });    
  }

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__box">
          <div className="profile__avatar-box">
            <div
              className="profile__avatar"
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
            ></div>
            <div
              className="profile__edit-avatar"
              onClick={props.onEditAvatar}
            ></div>
          </div>
          <div className="profile__info">
            <div className="profile__box-name">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать профиль."
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить место."
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements content__elements">
        <ul className="elements__list">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
