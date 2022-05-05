import TripEventEditView from '../view/trip-event-edit-view.js';
import TripEventListView  from '../view/trip-event-list-view';
import TripEventItemView from '../view/trip-event-item.js';
import {render} from '../render.js';

export default class BoardPresenter {
  editFormComponent = new TripEventEditView();
  tripEventListComponent = new TripEventListView();

  init = (container) => {
    this.container = container;

    render(this.tripEventListComponent, this.container);
    render(this.editFormComponent, this.tripEventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripEventItemView (), this.tripEventListComponent.getElement());
    }

  };
}
