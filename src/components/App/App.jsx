import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react"; // Import useState from React
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  // Set initial weatherData for testing; change type to "hot", "warm", or "cold"
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [activeModal, setActiveModal] = useState(""); // State to manage modal visibility

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal(""); // Close the modal by resetting activeModal
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      >
        <label htmlFor="nane" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imgUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imgUrl"
            placeholder="Image URL"
          />
        </label>
        <feildset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label
            className="modal__label modal__label__type__radio"
            htmlFor="hot"
          >
            <input
              type="radio"
              name="weather"
              value="hot"
              className="modal__radio__input"
              id="hot"
            />
            Hot
          </label>
          <label
            className="modal__label modal__label__type__radio"
            htmlFor="warm"
          >
            <input
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio__input"
              id="warm"
            />
            Warm
          </label>
          <label
            className="modal__label modal__label__type__radio"
            htmlFor="cold"
          >
            <input
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio__input"
              id="cold"
            />
            Cold
          </label>
        </feildset>
      </ModalWithForm>
    </div>
  );
}

export default App;
