import {createElement} from '../render.js';

const createTripControlsTemplate = () => (
  '<div class="trip-controls__filters"></div>'
);

export default class TripControlsView {
  getTemplate() {
    return createTripControlsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
