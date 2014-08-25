var hangman = require('./lib/hangman');
var fs = require('fs');
var readline = require('readline');
//var _ = require('lodash');


(function playGame() {
  var words, size;
  words = fs.readFileSync('./assets/words.txt', 'utf-8');
  words = words.split('\n');

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

      rl.question("What Size of the Word? ", function(answer) {
        size = parseInt(answer);
        if ((typeof size === 'number') && (!isNaN(size))){
          console.log("Starting Game for Word Size:", answer);
          hangman.pickWord(words,size);
          rl.close();
        }
        else {
          console.log("please try again");
          playGame();
        }
    });
})();
