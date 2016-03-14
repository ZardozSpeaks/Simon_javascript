(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var simon = require('./../js/simon.js');

// $(function(){
//   $('#start').click(function() {
//     var color = simon.simon();
//     color.forEach{
//       var colorBox = document.getElementById("color-box");
//       colorBox.style.backgroundColor = color[i];
//     }
//   });
// });

//Game is initiated
//Computer generates a color[0], pushed into computerSequence
//Player Guesses a color [0], pushed into userSequence
//guessCheck() is run.
//If gameOn = true; repeat

$(function(){
  $('#start').click(function() {

    var simonSays = new simon.Simon();

    simonSays.computerTurn();

    function changeColor() {
      var nIntervId = setInterval(flashColor, 5000);
    }

    function flashColor() {
      var colorBox = document.getElementById("color-box");
      for(i=0; i<simonSays.computerSequence.length; i++){
        colorBox.style.backgroundColor = simonSays.computerSequence[i];
      }
    }

    function stopChangeColor() {
      clearInterval(nIntervId);
    }


    changeColor();
  });
});

},{"./../js/simon.js":1}]},{},[2]);
