import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard"; // Import the WeatherCard component
import ItemCard from "../ItemCard/ItemCard"; // Import the ItemCard component
// Import the default clothing items array
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
  // Main component receives weatherData and handleCardClick as props
  return (
    <main>
      <WeatherCard /> {/* Render the WeatherCard component */}
      <section className="cards">
        {/* Section for clothing cards */}
        <p className="cards__text">
          Today is 75 &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {/* Unordered list for clothing items */}
          {defaultClothingItems
            .map((item) => (
              <ItemCard
                item={item}
                key={item.id}
                onCardClick={handleCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main; // Export the Main component
