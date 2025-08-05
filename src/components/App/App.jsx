import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react"; // Import useState from React
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  // Set initial weatherData for testing; change type to "hot", "warm", or "cold"
  const [weatherData, setWeather] = useState({ type: "hot" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
