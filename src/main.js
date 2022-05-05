import TripFiltersView from './view/trip-filters-view';
import TripSortView from './view/trip-sort-view';
import TripPointsView from './view/point-view';
import EditFormView from './view/edit-form-view';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.page-main');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripSortElement = document.querySelector('.trip-events');
const tripPointsElement = document.querySelector('.trip-events__list');
const editFormtElement = document.querySelector('.trip-events__item');
const boardPresenter = new BoardPresenter();

render (new TripFiltersView(), tripFiltersElement);
render (new TripSortView, tripSortElement);
render (new TripPointsView, tripPointsElement);
render (new EditFormView, editFormtElement);

boardPresenter.init(siteMainElement);
