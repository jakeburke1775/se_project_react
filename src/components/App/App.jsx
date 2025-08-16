// Import styles and components
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react"; // React hook for state management
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal"; // Import ItemModal component

// --- App Component ---
function App() {
  // --- State Section ---
  // State for weather data (used by Main)
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  // State for which modal is open ("add-garment", "preview", or "")
  const [activeModal, setActiveModal] = useState("");
  // State for which card is selected for preview
  const [selectedCard, setSelectedCard] = useState("");

  // --- Event Handlers Section ---
  // Opens the preview modal and sets the selected card
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // Opens the add garment modal
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  // Closes any open modal
  const closeActiveModal = () => {
    setActiveModal("");
  };

  // --- Render Section ---
  return (
    <div className="page">
      <div className="page__content">
        {/* Header receives a callback to open the add garment modal */}
        <Header handleAddClick={handleAddClick} />
        {/* Main receives weatherData for filtering clothing items */}
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>
      {/* Modal for adding a new garment. Only visible if activeModal === "add-garment" */}
      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        {/* Form fields for garment name and image */}
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
        {/* Radio buttons for selecting weather type */}
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
      {/* Modal for previewing a selected card. Only visible if activeModal === "preview" */}
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App; // Export the App component
