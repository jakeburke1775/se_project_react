import cloudy from "../../assets/cloudy.png";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp"> 75 &deg; F</p>
      <img src={cloudy} alt="Cloudy" className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
