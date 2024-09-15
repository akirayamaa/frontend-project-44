import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const generateProgression = (start, step, length) => (
  Array.from({ length }, (_, i) => start + i * step)
);

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default () => playGame(description, generateRound);
