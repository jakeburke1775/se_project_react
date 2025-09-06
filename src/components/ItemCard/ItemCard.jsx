import "./ItemCard.css";
function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item); // Call the callback with the item
  };
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick} // Use the handler to pass the item
        className="card__img"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
