/* eslint-disable camelcase */
/* eslint-disable no-undef */
import {getRandomInteger} from '../util.js';

const generateTypePoint = () => {
  typesPoint = [
    'taxi',
    'bus',
    'train',
    'ship',
    'drive',
    'flight',
    'check-in',
    'sightseeing',
    'restaurant',
  ];

  const randomIndex = getRandomInteger(0, typesPoint.length - 1);

  return typesPoint[randomIndex];
};

const generateDestination = () => {
  destinationsPoint = [
    'Amsterdam',
    'Geneva',
    'Rome',
    'London',
    'Tokyo',
    'Madrid',
    'Budapest'
  ];

  const randomIndex = getRandomInteger(0, destinationsPoint.length - 1);

  return destinationsPoint[randomIndex];
};

const  generateDescription = () => {
  descriptionsPoint = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'In rutrum ac purus sit amet tempus.'
  ];

  const randomIndex = getRandomInteger(0, descriptionsPoint.length - 1);

  return descriptionsPoint[randomIndex];
};

export const generatePointDestination = () => ({
  type: generateTypePoint(),
  destinations: generateDestination(),
  descriptions: generateDescription(),
  pictures: 'http://picsum.photos/248/152?r=5',
  is_favorite: false
});
