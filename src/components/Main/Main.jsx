import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard"; // Import the WeatherCard component
import ItemCard from "../ItemCard/ItemCard"; // Import the ItemCard component
import { defaultClothingItems } from "../../utils/constants"; // Import the default clothing items array

function Main({ weatherData }) {
  // Main component receives weatherData as a prop
  return (
    <main>
      <WeatherCard /> {/* Render the WeatherCard component */}
      <section className="cards">
        {" "}
        {/* Section for clothing cards */}
        <p className="cards__text">
          Today is 75 &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {" "}
          {/* Unordered list for clothing items */}
          {defaultClothingItems
            // Filter clothing items to match the current weather type
            // .filter((item) => item.weather === weatherData.type)
            // Map over the filtered items and render an ItemCard for each
            .map((item) => (
              <ItemCard item={item} key={item.id} /> // Pass item as prop and use id as key
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main; // Export the Main component
