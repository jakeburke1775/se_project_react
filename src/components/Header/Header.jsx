import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData = {} }) {
  // Get the current date as a readable string for display in the header
  // This uses JavaScript's Date object and toLocaleString to format the date as "Month Day, Year" (e.g., "August 16, 2025")
  const currentDate = new Date().toLocaleString("default", {
    month: "long", // Full month name (e.g., "August")
    day: "numeric", // Day of the month (e.g., "16")
    year: "numeric", // Full year (e.g., "2025")
  });
  // Use currentDate to show today's date in the header

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="App Logo" src={logo} />
      </Link>
      <p className="header__date-n-locate">
        {currentDate}, {weatherData.city || ""}
      </p>
      <div className="header__right-container">
        <ToggleSwitch />
        <button
          type="button"
          className="header__add-clothes"
          onClick={handleAddClick}
        >
          + Add clothes
        </button>
        <Link className="header__profile-link" to="/profile">
          <div className="header__user-container">
            <p className="header__username">Name</p>
            <img
              src={avatar}
              alt="Terrence Smith"
              className="header__user-avatar"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
