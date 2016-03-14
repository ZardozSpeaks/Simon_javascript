var simon = require('./../js/simon.js');

$(function(){
  $('#start').click(function() {
    var color = simon.simon();
    color.forEach{
      var colorBox = document.getElementById("color-box");
      colorBox.style.backgroundColor = color[i];
    }
  });
});

//Game is initiated
//Computer sequence at [0] is added
//Player Guesses a color
//guessCheck() is run.
//If gameOn = true; repeat
