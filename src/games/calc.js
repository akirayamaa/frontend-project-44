import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

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
      throw new Error(`Unknown operator: ${operator}`);
  }

  return { question, correctAnswer: String(correctAnswer) };
};

const description = 'What is the result of the expression?';

const playCalcGame = () => {
  playGame(description, generateRound);
};

export default playCalcGame;
