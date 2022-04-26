import React from "react";
import api from "../utils/Api";
function Main(props) {

  let [userName, setUserName] = React.useState('');
  let [userDescription, setuserDescription] = React.useState('');
  let [userAvatar, setuserAvatar] = React.useState('');

  React.useEffect(() => {
      api
      .getUserInfo()
      .then(res => {
        console.log(res)
        setUserName(res.name)
        setuserDescription(res.about)
        setuserAvatar(res.avatar)
        // userInfo.setUserInfo(res.name, res.about)
        // userInfo.setUserAvatar(res.avatar)        
      })
      .catch(console.log)
    }, []);


  //   Promise.all([api.getUserInfo(), api.getInitialCards()])
  // .then(res => {
  //   userInfo.setUserInfo(res[0].name, res[0].about)
  //   userInfo.setUserAvatar(res[0].avatar)
  //   userId = res[0]._id;
  //   section.renderItems(res[1]);
  // })
  // .catch(console.log)
 
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
        </ul>
      </section>
    </main>
  );
}

export default Main; 