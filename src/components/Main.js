import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

  let [userName, setUserName] = React.useState('');
  let [userDescription, setuserDescription] = React.useState('');
  let [userAvatar, setuserAvatar] = React.useState('');
  let [cards, setCards] = React.useState([]);

  
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(res => {
        setUserName(res[0].name)
        setuserDescription(res[0].about)
        setuserAvatar(res[0].avatar)
        setCards(res[1])
      })
      .catch(console.log)
    }, []);

 
  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__box">
          <div className="profile__avatar-box">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
            <div className="profile__edit-avatar"  onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__box-name">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать профиль." onClick={props.onEditProfile}></button>
            </div>  
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить место." onClick={props.onAddPlace}></button>
      </section>
      <section className="elements content__elements">
        <ul className="elements__list">
          {
            cards.map(item =>
              <Card card={item} />
          )
          }
        </ul>
      </section>
    </main>
  );
}

export default Main; 