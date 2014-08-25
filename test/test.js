/*global describe, it, done */
var assert = require('chai').assert;
var hangman = require('../lib/hangman');

describe('Word Functionality', function(done){
  var list = ["fo", "bar", "batz"];
  describe('PickWord', function(){
        it('Picks Words', function(){
          assert.equal(hangman.pickWord(list,3), "bar",'Picks Bar');
          done();
        });
  });

  describe('PickWord', function(){
        it('Picks Words', function(){
          var list = ["Foo", "Bar", "Batz"];
          assert.equal(hangman.listToLower(list,3), ["fo", "bar", "batz"],'Picks Bar');
        });
  });
  describe('Generate Word', function(){
        it('Given Word', function(){
          assert.equal(hangman.generateCLI("chicken",["b","c"]), " c _ _ c _ _ _",'Only show c');
        });
  });
});
