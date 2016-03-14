var simon = require('./../js/simon.js');

$(function(){
  $('#start').click(function() {
    var color = simon.simon();
    var colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = color;
  });
});
