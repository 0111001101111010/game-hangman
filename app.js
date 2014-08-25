var hangman = require('./lib/hangman');
var fs = require('fs');
var readline = require('readline');
var _ = require('lodash');

var render = function (chosenWord,letters) {
  var new_letter;
  var obj = hangman.generateCLI(chosenWord, letters);
  console.log(obj.view);
  console.log(obj);
  new_letter = hangman.getLetter();
  //check if letter is usable, then restart
  setTimeout(function playround(){
    if (!_.contains(letters,new_letter)){
      console.log("Thanks! this letter was added: " + new_letter);
      letters.push(new_letter);
      render (chosenWord, letters);
    }
    else{
      console.log("Sorry, this letter exists and was not added " + new_letter);
      render (chosenWord, letters);
    }
  }, 5000);
};

(function playGame() {
  var words, size, picked;
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
          picked = hangman.pickWord(words,size);
          render(picked, []);
          rl.close();
        }
        else {
          console.log("please try again");
          playGame();
        }
    });
})();
