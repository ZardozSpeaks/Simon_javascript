module.exports.Simon = Simon;

function Simon() {
  this.computerSequence = [];
  this.userSequence = [];
  this.turnCounter=0;
  this.gameOn=true;
}


Simon.prototype.computerTurn = function() {
  var color = Math.floor(Math.random() * 4);

  if(color === 0) {
    this.computerSequence.push("red");
  } else if (color === 1) {
    this.computerSequence.push("green");
  } else if (color === 2) {
    this.computerSequence.push("blue");
  } else {
    this.computerSequence.push("yellow");
  }
};

Simon.prototype.checkGuess = function() {
  this.turnCounter++;
  if (computerSequence[counter-1] != userSequence[counter-1]){
    this.gameOn=false;
  }
};
