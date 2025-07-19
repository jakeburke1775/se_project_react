import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={logo} />
      <p className="header__date-n-locate">DATE, LOCATION</p>
      <button className="header__add-clothes">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Name</p>
        <img
          src={avatar}
          alt="Terrence Smith"
          className="header__user-avatar"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      </div>
    </header>
  );
}

export default Header;
