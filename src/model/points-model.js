/* eslint-disable no-unused-vars */
import { generatePointDestination } from '../fish/point.js';

export class PointsModel {
  points = Array.from({length: 30}, generatePointDestination);

  getPoints = () => this.points;
}
