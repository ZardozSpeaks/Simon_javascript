module.exports.simon = simon;

function Simon() {
  this.computerSequence = [];
  this.userSequence = [];
  this.counter=0;
  this.gameOn=true;
};


Simon.prototype.computerTurn = function() {
  var color = Math.floor(Math.random() * 4);

  if(color === 0) {
    computerSequence.push("red");
  } else if (color === 1) {
    computerSequence.push("green");
  } else if (color === 2) {
    computerSequence.push("blue");
  } else {
    computerSequence.push("yellow");
  }
}

Simon.prototype.checkGuess = function() {
    this.counter++;
    if (computerSequence[counter-1] != computerSequence[counter-1]){
      this.gameOn=false;
    }
  }
}
