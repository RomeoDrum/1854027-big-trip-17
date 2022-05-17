/* eslint-disable camelcase */
/* eslint-disable no-undef */
import {getRandomInteger} from '../util.js';

const generateTypePoint = () => {
  const typesPoint = [
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
  const destinationsPoint = [
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
  const descriptionsPoint = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'In rutrum ac purus sit amet tempus.'
  ];

  const randomIndex = getRandomInteger(0, descriptionsPoint.length - 1);

  return descriptionsPoint[randomIndex];
};

export const offersPoint = [
  {
    id: 1,
    title: 'Upgrade to a business class',
    price: 120
  },
  {
    id: 2,
    title: 'Switch to comfort',
    price: 100
  },
  {
    id: 3,
    title: 'Add luggage',
    price: 100
  },
  {
    id: 4,
    title: 'Odrer Uber',
    price: 20
  },
  {
    id: 5,
    title: 'Rent a Car',
    price: 200
  },
];

export const generatePointDestination = () => ({
  type: generateTypePoint(),
  destinations: generateDestination(),
  descriptions: generateDescription(),
  pictures: 'http://picsum.photos/248/152?r=5',
  is_favorite: false,
  offers: Object.keys(offersPoint),
});
