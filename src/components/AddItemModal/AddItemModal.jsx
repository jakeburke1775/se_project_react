function AddItemModal({ isOpen, onClose, onAddItem }) {
          return (
          <label htmlFor="name" className="modal__label_type_text">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="imgUrl" className="modal__label_type_text">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imgUrl"
              placeholder="Image URL"
              required
            />
          </label>
          {/* Radio buttons for selecting weather type */}
          <fieldset className="modal__radio-btns">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              className="modal__label modal__label_type_radio"
              htmlFor="hot"
            >
              <input
                type="radio"
                name="weather"
                value="hot"
                className="modal__radio__input"
                id="hot"
                required
              />
              Hot
            </label>
            <label
              className="modal__label modal__label_type_radio"
              htmlFor="warm"
            >
              <input
                type="radio"
                name="weather"
                value="warm"
                className="modal__radio__input"
                id="warm"
                required
              />
              Warm
            </label>
            <label
              className="modal__label modal__label_type_radio"
              htmlFor="cold"
            >
              <input
                type="radio"
                name="weather"
                value="cold"
                className="modal__radio__input"
                id="cold"
                required
              />
              Cold
            </label>
          </fieldset>
          )};

          export default AddItemModal;