export const getWeather = ({ long, lat }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

// data object math
export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name; // Extract city name from the data
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round((data.main.temp - 32) * (5 / 9)),
  }; //{ F: data.main.temp };
  result.type = getWeatherType(result.temp.F); // Determine weather type based on temperature
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now() / 1000); // Determine if it's day or night based on sunrise and sunset times
  return result;
};

//sunrise and sunset math
const isDay = ({ sunrise, sunset }, now) => {
  return sunrise < now && now < sunset;
};

//weather type math
const getWeatherType = (temp) => {
  if (temp > 80) {
    return "hot";
  } else if (temp > 60) {
    return "warm";
  } else if (temp <= 60) {
    return "cold";
  }
};
