import "./ClothesSection.css";

import { defaultClothingItems } from "../../utils/constants"; //for local debugging
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, handleAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p>Your Items</p>
        <button onClick={handleAddClick}>+ Add New</button>
      </div>

      <ul className="clothes-section__items">
        {/* Unordered list for clothing items */}
        {clothingItems.map((item) => (
          <ItemCard item={item} key={item._id} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
