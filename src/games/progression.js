import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const generateProgression = (length, start, step) =>
  Array.from({ length }, (_, i) => start + i * step);

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(length, start, step);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { 
    question: progression.join(' '),
    correctAnswer: String(hiddenValue)
  };
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! What number is missing in the progression?`);

  for (let round = 0; round < 3; round++) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playProgressionGame;
