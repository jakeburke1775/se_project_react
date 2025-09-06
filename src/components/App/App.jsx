// Import styles and components
import "./App.css";

import { useEffect, useState } from "react"; // React hook for state management
import { getWeather, filterWeatherData } from "../../utils/weatherApi"; // Import weather API utility
import { Routes, Route } from "react-router-dom";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants"; // Import coordinates, API key, and clothing items
import { getItems } from "../../utils/api"; // Import getItems function from api.js

//import components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal"; // Import ItemModal component

//import contexts
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

// --- App Component ---
function App() {
  // --- State Section ---
  // State for weather data (used by Main)
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });
  // State for clothing items
  const currentYear = new Date().getFullYear(); // Get the current year for the footer
  // State for which modal is open ("add-garment", "preview", or "")
  const [activeModal, setActiveModal] = useState("");
  // State for which card is selected for preview
  const [selectedCard, setSelectedCard] = useState("");
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const onAddItem = (data) => {
    // Map imgUrl to link for consistency with defaultClothingItems
    const newItem = {
      ...data,
      link: data.link,
      id: clothingItems.length, // Optionally assign a new id
    };
    setClothingItems([...clothingItems, newItem]);
    closeActiveModal();
  };

  const handleTempUnitChange = () => {
    setCurrentTempUnit(currentTempUnit === "F" ? "C" : "F");
  };

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

  useEffect(() => {
    // Fetch weather data from the API
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data); // clothing items to be set here from db.json
      })
      .catch(console.error);
  }, []);

  // --- Render Section ---
  return (
    <CurrentTempUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
      <div className="page">
        <div className="page__content">
          {/* Header receives a callback to open the add garment modal */}
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          {/* Main receives weatherData for filtering clothing items */}
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="*"
              element={
                <main>
                  <h2>404 - Page Not Found</h2>
                </main>
              }
            />
          </Routes>
        </div>
        <AddItemModal
          //add garment modal
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
          onClose={closeActiveModal}
        />
        {/* </ModalWithForm>  */}

        <ItemModal
          // preview modal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
        <Footer name="Jake Burke" year={currentYear} />
      </div>
    </CurrentTempUnitContext.Provider>
  );
}

export default App; // Export the App component
