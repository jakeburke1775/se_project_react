import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

export default function AddItemModal({ isOpen, onAddItem, onClose }) {
  const defaultValues = {
    name: "",
    link: "",
    weather: "",
  };
  const { values, handleChange, resetForm } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <ModalWithForm
      title="New Garment"
      name="new-card"
      buttonText="Add garment"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor="name" className="modal__label_type_text">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="link" className="modal__label_type_text">
        Image
        <input
          type="url"
          className="modal__input"
          id="link"
          name="link"
          placeholder="Image URL"
          required
          value={values.link}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio" htmlFor="hot">
          <input
            type="radio"
            name="weather"
            value="hot"
            className="modal__radio__input"
            id="hot"
            required
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          Hot
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="warm">
          <input
            type="radio"
            name="weather"
            value="warm"
            className="modal__radio__input"
            id="warm"
            required
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>
        <label className="modal__label modal__label_type_radio" htmlFor="cold">
          <input
            type="radio"
            name="weather"
            value="cold"
            className="modal__radio__input"
            id="cold"
            required
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
