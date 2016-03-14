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
