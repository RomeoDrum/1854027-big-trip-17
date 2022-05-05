import TripInfoView from './view/trip-info-view';
import TripFiltersView from './view/trip-filters-view';
import TripSortView from './view/trip-sort-view';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.page-main');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripSortElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter();
const tripMainElement = document.querySelector('.trip-main');

render (new TripFiltersView(), tripFiltersElement);
render (new TripSortView, tripSortElement);
render (new TripInfoView, tripMainElement);

boardPresenter.init(siteMainElement);
