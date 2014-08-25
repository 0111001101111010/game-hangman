/*
 * game-hangman
 * https://github.com/stanzheng/game-hangman
 *
 * Copyright (c) 2014 Stanley Zheng
 * Licensed under the MIT license.
 */

'use strict';

var fs = require("fs");
var _ = require("lodash");

exports.awesome = function() {
  return 'awesome';
};

/** Picks Random **/
exports.pickRandom = function () {
  console.log(exports.getWordList());
};
