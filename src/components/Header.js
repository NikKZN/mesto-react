import logo from '../images/header/header-logo.svg';

function Header() {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип Mesto, подпись Россия."/>
    </header>
  );
}

export default Header;
