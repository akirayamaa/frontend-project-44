#!/usr/bin/env node

import { playGame } from '../src/index.js';
import generateRound from '../src/games/progression.js';

const rules = 'What number is missing in the progression?';

const playProgressionGame = () => {
  playGame(rules, generateRound);
};

playProgressionGame();
