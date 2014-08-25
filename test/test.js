/*global describe, it, done */
var assert = require('chai').assert;
var hangman = require('../lib/hangman');

describe('Word Functionality', function(){

  describe('PickWord', function(done){
        it('Count Words', function(){
          assert.notEqual(hangman.getWordList(), null,'Is Not Null');
          done();
        });
  });
});
