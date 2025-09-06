import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./DeleteModal.css";

function DeleteModal({ activeModal, onClose, onConfirm }) {
  const handleConfirm = (evt) => {
    evt.preventDefault();
    if (onConfirm) onConfirm();
  };

  const handleCancel = (evt) => {
    evt.preventDefault();
    if (onClose) onClose();
  };

  return (
    <ModalWithForm
      title=""
      isOpen={activeModal === "delete"}
      onClose={onClose}
      onSubmit={onConfirm}
      name="delete"
      buttonText=""
    >
      <p>
        Are you sure you want to delete this item? This action is irreversible.
      </p>
      <button className="delete-modal_confirm" onClick={handleConfirm}>
        Yes, delete item.
      </button>
      <button className="delete-modal_cancel" onClick={handleCancel}>
        Cancel
      </button>
    </ModalWithForm>
  );
}

export default DeleteModal;
