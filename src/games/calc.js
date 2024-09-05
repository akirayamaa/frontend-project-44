import { playGame, getRandomNumber } from '../index.js';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  let question;
  let correctAnswer;

  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error('Unknown operator');
  }

  return { question, correctAnswer: correctAnswer.toString() };
};

const description = 'What is the result of the expression?';

const playCalcGame = () => {
  playGame(description, generateRound);
};

export default playCalcGame;
