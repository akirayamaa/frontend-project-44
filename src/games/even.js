import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomNumber(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = num.toString();

  return { question, correctAnswer };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  playGame(description, generateRound);
};

export default playEvenGame;
