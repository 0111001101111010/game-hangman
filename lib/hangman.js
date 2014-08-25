/*
 * game-hangman
 * https://github.com/stanzheng/game-hangman
 *
 * Copyright (c) 2014 Stanley Zheng
 * Licensed under the MIT license.
 */

'use strict';

var _ = require("lodash");
var readline = require('readline');

exports.awesome = function() {
  return 'awesome';
};

/** Picks Random **/
exports.pickWord = function (list, size) {
  var temp = [];
  var index;
  _.each(list, function (data) {
    if(data.length===size){
      temp.push(data);
    }
  });
  index = _.random(0,temp.length);
  console.log(temp[index]);
  return temp[index];
};

exports.listToLower = function (list) {
  _.each(list, function (data) {
     data.toLowerCase();
  });
  console.log(list);
};

exports.getLetter = function () {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Guess a letter", function(answer) {
    rl.close();
    return answer;
  });
};

exports.generateCLI = function (word, guessed){
  var view = "", status = false;
  _.each(word, function (data) {
    if(_.contains(guessed, data)){
      view = view + " " + data + " ";
    }
    else {
      view = view + " _ ";
    }
    if(word.length === guessed.size){
      status = true;
    }
    else{
      status = false;
    }
  });
  return {  view:view,
            word:word,
            guessed:guessed,
            complete:status
        };
};
