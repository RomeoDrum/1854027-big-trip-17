import TripEventEditView from '../view/trip-event-edit-view.js';
import TripEventListView  from '../view/trip-event-item.js';
import TripFiltersView from '../view/trip-filters-view.js';
import TripSortView from '../view/trip-sort-view.js';

import {render} from '../render.js';

export default class BoardPresenter {
  editFormComponent = new TripEventEditView();
  tripFiltersComponent = new TripFiltersView();
  tripSortComponent = new TripSortView();

  init = (container) => {
    this.container = container;

    render(this.editFormComponent, this.container);

    for (let i = 0; i < 3; i++) {
      render(new TripEventListView (), this.container);
    }

  };
}
