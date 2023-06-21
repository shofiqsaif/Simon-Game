var gamePattern = [];
var isRunning = false;
var colors = ["green", "red", "yellow", "blue"];

function nextSequence() {
  // Return a number between 0-3
  var rand = Math.floor(Math.random() * 4);
  return rand;
}

function resetGame() {
  var newSequence = nextSequence();
}

function addNextSequence() {
  var next = nextSequence();
  gamePattern.push(next);

  $("." + colors[next]).animate({
    opacity: 0.2,
  });
  $("." + colors[next]).animate({
    opacity: 1,
  });


}
$(document).keypress(function () {
  if (!isRunning) {
    isRunning = true;
    resetGame();
    addNextSequence();

  }
});
