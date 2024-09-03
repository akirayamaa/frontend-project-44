import { playGame } from '../index.js';

const getRandomNumber = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return { question, correctAnswer };
};

const playGcdGame = () => {
  playGame(rules, generateRound);
};

export default playGcdGame;
