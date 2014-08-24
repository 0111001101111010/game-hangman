/*global describe, it */
var assert = require('chai').assert;
var hangman = require('../lib/hangman');

describe('Word Functionality', function(){

  describe('Before', function(){
        it('Awesome', function(){
          assert.equal(hangman.awesome(),"awesome",'Is Not Awesome');
        });
  });
});
