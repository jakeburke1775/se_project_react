import logo from "../../assets/react.svg"; // or the correct image file in assets
import avatar from "../../assets/avatar.png"; // if avatar.png exists

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-n-locate">DATE, LOCATION</p>
      <button className="header__add-clothes">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Name</p>
        <img src={avatar} className="header__user-avatar" />
      </div>
    </header>
  );
}

export default Header;
