import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      
      <header className="header page__header">
        <img className="header__logo" src="<%=require('./images/header/header-logo.svg')%>" alt="Логотип Mesto, подпись Россия."/>
      </header>

      <main className="content">
        <section className="profile content__profile">
          <div className="profile__box">
            <div className="profile__avatar-box">
              <img className="profile__avatar" src=" " alt="Аватар, добавленный пользователем."/>
              <div className="profile__edit-avatar"></div>
            </div>
            <div className="profile__info">
              <div className="profile__box-name">
                <h1 className="profile__name"></h1>
                <button className="profile__edit-button" type="button" aria-label="Редактировать профиль."></button>
              </div>  
              <p className="profile__job"></p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить место."></button>
        </section>

        <section className="elements content__elements">
          <ul className="elements__list">
          </ul>
        </section>
      </main>

      <footer className="footer page__footer">
        <p className="footer__copyright">&copy; 2022 Николай Петровский</p>
      </footer>

      <section className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__button-close" type="button" aria-label="Закрыть окно."></button>
          <form className="popup__form" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input className="popup__input popup__input_field_name" id="name-input" type="text" name="name" value="" placeholder="Ваше имя" minlength="2" maxlength="40" required/>
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_field_job" id="job-input" type="text" name="about" value="" placeholder="О себе" minlength="2" maxlength="200" required/>
            <span className="popup__input-error job-input-error"></span>
            <button className="popup__button-save" type="submit" aria-label="Сохранить.">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_avatar">
        <div className="popup__container-avatar">
          <button className="popup__button-close" type="button" aria-label="Закрыть окно."></button>
          <form className="popup__form" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input className="popup__input popup__input_field_avatar" id="avatar-input" type="url" name="link" value="" placeholder="Ссылка на аватар" required/>
            <span className="popup__input-error avatar-input-error"></span>
            <button className="popup__button-save" type="submit" aria-label="Создать.">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_mesto">
        <div className="popup__container">
          <button className="popup__button-close" type="button" aria-label="Закрыть окно."></button>
          <form className="popup__form" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <input className="popup__input popup__input_field_mesto" id="mesto-input" type="text" name="mesto" minlength="2" maxlength="30" value="" placeholder="Название" required/>
            <span className="popup__input-error mesto-input-error"></span>
            <input className="popup__input popup__input_field_link" id="link-input" type="url" name="link" value="" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error link-input-error"></span>
            <button className="popup__button-save" type="submit" aria-label="Создать.">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_image">
        <div className="popup__preview">
          <button className="popup__button-close" type="button" aria-label="Закрыть окно."></button>
          <img className="popup__image" src=" " alt=""/>
          <h2 className="popup__caption">Архыз</h2>
        </div>
      </section>

      <section className="popup popup_type_confirm">
        <div className="popup__field">
          <button className="popup__button-close" type="button" aria-label="Закрыть окно."></button>
          <form className="popup__form" novalidate>
            <h2 className="popup__title">Вы уверены?</h2>          
            <button className="popup__button-save" type="submit" aria-label="Создать.">Да</button>
          </form>
        </div>
      </section>

      <template className="template">
          <li className="element elements__item">
            <img className="element__card" src=" " alt="Тут скоро будет картинка"/>
            <button className="element__trash" type="button" aria-label="Удалить."></button>
            <div className="element__caption">
              <h2 className="element__caption-text"></h2>
              <div>
                <button className="element__caption-like" type="button" aria-label="Нравится."></button>
                <p className="element__caption-count"></p>
              </div>            
            </div>
          </li>
      </template>
    </div>
  );
}

export default App;
