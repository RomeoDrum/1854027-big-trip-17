import EditFormView from '../view/edit-form-view.js';
import TripPointsView from '../view/point-view.js';
import TripFiltersView from '../view/trip-filters-view.js';
import TripSortView from '../view/trip-sort-view.js';
import TripControlsView from '../view/trip-controls-filters.js';

import {render} from '../render.js';

export default class BoardPresenter {
  editFormComponent = new EditFormView();
  TripFiltersComponent = new TripFiltersView();
  TripSortComponent = new TripSortView();
  TripControlsComponent = new TripControlsView();

  init = (container) => {
    this.container = container;

    render(this.editFormComponent, this.Container);
    render(this.TripFiltersComponent, this.Container);
    render(this.TripSortComponent, this.Container);
    render(this.TripControlsComponent, this.Container);

    for (let i = 0; i < 3; i++) {
      render(new TripPointsView(), this.Container);
    }

  };
}
