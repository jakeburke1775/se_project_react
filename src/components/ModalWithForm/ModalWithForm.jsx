import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <form className="modal__form">
          <h2 className="modal__title">New Garment</h2>
          <button type="button" className="modal__close-button">
            Close
          </button>
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
            <label className="modal__label modal__label__type__radio" htmlFor="hot">
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
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
