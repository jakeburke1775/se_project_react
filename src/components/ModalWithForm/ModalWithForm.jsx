import "./ModalWithForm.css";
import closeIcon from "../../assets/close.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  name,
  onSubmit,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal__opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          {buttonText ? (
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
