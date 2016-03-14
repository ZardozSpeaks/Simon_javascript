module.exports.simon = simon;

function simon() {
  var color = Math.floor(Math.random() * 4);
  if(color === 0) {
    return "red";
  } else if (color === 1) {
    return "green";
  } else if (color === 2) {
    return "blue";
  } else {
    return "yellow";
  }
};
