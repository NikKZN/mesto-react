function Main(props) {
 
  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__box">
          <div className="profile__avatar-box">
            <img className="profile__avatar" src=" " alt="Аватар, добавленный пользователем." />
            <div className="profile__edit-avatar" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__box-name">
              <h1 className="profile__name"></h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать профиль." onClick={props.onEditProfile}></button>
            </div>  
            <p className="profile__job"></p>
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