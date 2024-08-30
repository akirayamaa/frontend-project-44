#!/usr/bin/env node

import { playGame } from '../src/index.js';
import getRandomExpression from '../src/games/calc.js';

const description = 'What is the result of the expression?';

const playCalcGame = () => playGame(description, getRandomExpression);

playCalcGame();