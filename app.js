//var hangman = require('./lib/hangman');
var fs = require('fs');
var readline = require('readline');


(function playGame() {
  var words;
  words = fs.readFileSync('./assets/words.txt', 'utf-8');
  words = words.split('\n');

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

      rl.question("What Size of the Word? ", function(answer) {
      if (typeof parseInt(answer) === 'number'){
        console.log("Starting Game for Word Size:", answer);
        rl.close();
      }
      else {
        console.log("please try again");
        playGame();
      }
    });// jshint ignore:line
})();
