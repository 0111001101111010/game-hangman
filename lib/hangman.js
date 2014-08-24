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

/** Count words **/
exports.getWordList = function () {
  fs.readFile('./assets/words.txt', 'utf-8', function (err, data) {
    var list;
    if (err){
      throw err;
    }
    list = data.split("\n");
    console.log(list.length);
    return list;
  });
};
