import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return { question, correctAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => {
  playGame(description, generateRound);
};

export default playGcdGame;
