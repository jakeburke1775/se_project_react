import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div
      className={`modal${activeModal === "preview" ? " modal__opened" : ""}`}
    >
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>
        {/* Use img instead of image for valid HTML */}
        <img
          className="modal__image"
          src={typeof card?.link === "string" ? card.link : ""}
          alt={card?.name || "Preview"}
        />
        <div className="modal__footer">
          <div className="modal__caption">{card.name}</div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
