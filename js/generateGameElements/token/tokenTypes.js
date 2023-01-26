import { generateRandomNumber } from '../../helpers/generateRandomNumber.js';

export const tokenTypes = [
  {
    key: 0,
    img: './img/almond_white.png',
    text: 'CURSED ALMOND WATER',
    points: 200,
  },
];

const tokenTypesArrayLength = tokenTypes.length - 1;
export const getRandomToken = () => {
  const randomTokenNumber = generateRandomNumber(0, tokenTypesArrayLength);
  return tokenTypes[randomTokenNumber];
};
