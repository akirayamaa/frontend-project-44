import { playGame, getRandomNumber } from '../index.js';

const generateRound = () => {
  const num = getRandomNumber(1, 100);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const question = num.toString();

  return { question, correctAnswer };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  playGame(description, generateRound);
};

export default playEvenGame;
