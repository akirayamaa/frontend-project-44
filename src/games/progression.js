import { getRandomNumber } from '../index.js';

const getProgression = (length, start = 1, step = 2) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const generateRound = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(length, start, step);
  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const correctAnswer = String(hiddenValue);
  
  return { question, correctAnswer };
};

export default generateRound;
