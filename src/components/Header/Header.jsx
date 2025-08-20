import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
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
      <img className="header__logo" alt="logo" src={logo} />
      <p className="header__date-n-locate">
        {currentDate}, {weatherData.city}
      </p>
      <button
        type="button"
        className="header__add-clothes"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
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
