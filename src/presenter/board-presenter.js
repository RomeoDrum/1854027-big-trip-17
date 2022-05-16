import TripEventEditView from '../view/trip-event-edit-view.js';
import TripEventListView  from '../view/trip-event-list-view';
import TripEventItemView from '../view/trip-event-item.js';
import {render} from '../render.js';

export default class BoardPresenter {
  editFormComponent = new TripEventEditView();
  tripEventListComponent = new TripEventListView();

  init = (container, pointsModel) => {
    this.container = container;
    this.pointsModel = pointsModel;
    this.destinationPoints = [this.pointsModel.getPoints()];

    render(this.tripEventListComponent, this.container);
    render(this.editFormComponent, this.tripEventListComponent.getElement());

    for (let i = 0; i < this.destinationPoints.length; i++) {
      render(new TripEventItemView (this.destinationPoints[i]), this.tripEventListComponent.getElement());
    }

  };
}
