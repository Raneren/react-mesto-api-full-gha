import logo from "../images/logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import menu from "../images/button-menu.svg";
import close from "../images/button-close.svg";

function Header(props) {
  return (
    <header className="header">
      {props.loggedIn ? (
        <>
          <div className="header__container">
            <img className="header__logo" src={logo} alt="Логотип 'Место'" />
            <button
              type="button"
              className="button button_type_menu"
              onClick={props.onMenuClick}
              style={
                props.isOpen
                  ? { backgroundImage: `url(${close})` }
                  : { backgroundImage: `url(${menu})` }
              }
            ></button>
          </div>
          <div
            className={`header__menu  ${props.isOpen && "header__menu_active"}`}
          >
            <p className="header__user-email">{props.userEmail}</p>
            <Link
              to="/sign-in"
              className="header__link header__link_sign-out"
              onClick={props.onSignOut}
            >
              Выйти
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="header__container">
            <img className="header__logo" src={logo} alt="Логотип 'Место'" />
            {
              <Routes>
                <Route
                  path="/sign-up"
                  element={
                    <Link to="/sign-in" className="header__link">
                      Войти
                    </Link>
                  }
                />
                <Route
                  path="/sign-in"
                  element={
                    <Link to="/sign-up" className="header__link">
                      Регистрация
                    </Link>
                  }
                />
              </Routes>
            }
          </div>
        </>
      )}
    </header>
  );
}
export default Header;
