import cloudy from "../../assets/day/cloudy.png";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? 0 : 1];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTempUnit === "F" ? weatherData.temp.F : weatherData.temp.C}&deg;{" "}
        {currentTempUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`card showing ${weatherOption?.condition} ${
          weatherOption?.day ? "day" : "night"
        } weather`}
        className="weather-card__img"
      />
    </section>
  );
}

export default WeatherCard;
