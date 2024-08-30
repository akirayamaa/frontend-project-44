#!/usr/bin/env node

import readlineSync from 'readline-sync';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const playEvenGame = (name) => {
  const numberOfQuestions = 3;
  let correctAnswers = 0;

  while (correctAnswers < numberOfQuestions) {
    const number = getRandomNumber();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const name = welcomeMessage();
playEvenGame(name);