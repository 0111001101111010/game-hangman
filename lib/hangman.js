/*
 * game-hangman
 * https://github.com/stanzheng/game-hangman
 *
 * Copyright (c) 2014 Stanley Zheng
 * Licensed under the MIT license.
 */

'use strict';

var _ = require("lodash");

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
