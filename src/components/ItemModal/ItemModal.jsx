import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, handleDeletePrompt }) {
  return (
    <div
      className={`modal${activeModal === "preview" ? " modal__opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close-button-white"
          onClick={onClose}
        ></button>
        {/* Use img instead of image for valid HTML */}
        <img
          className="modal__image"
          src={typeof card?.imageUrl === "string" ? card.imageUrl : ""}
          alt={card?.name || "Preview"}
        />
        <div className="modal__footer">
          <div className="modal__info">
            <div className="modal__caption">{card.name}</div>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button className="modal__delete-item" onClick={handleDeletePrompt}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
