var gamePattern = [];
var isRunning = false;
var colors = ["green", "red", "yellow", "blue"];
var i = 0;

function nextSequence() {
  // Return a number between 0-3
  var rand = Math.floor(Math.random() * 4);
  return rand;
}

function resetGame() {
  var newSequence = nextSequence();
}

function animateAndSound(color) {
  $("." + color).animate({
    opacity: 0.2,
  });
  $("." + color).animate({
    opacity: 1,
  });

  var sound = new Audio("/sounds/" + color + ".mp3");
  sound.play();
}

function addNextSequence() {
  var next = nextSequence();
  gamePattern.push(colors[next]);
  animateAndSound(colors[next]);
  $("h1").text("Level " + gamePattern.length);
}

$(".btn").on("click", function () {
  var colorClicked = this.getAttribute("class").slice(4, 100);

  if (colorClicked == gamePattern[i]) {
    animateAndSound(colorClicked);
    i++;

    if (i == gamePattern.length) {
      $("h1").text("Level " + gamePattern.length);
      i = 0;
      setTimeout(function (){
        addNextSequence();
      },500);
      
    }
  } else {
    $("h1").text("Game Over, Press Any Key to Restart");
    isRunning = false;
    var audio = new Audio("/sounds/wrong.mp3");
    audio.play();
  }
});

$(document).keypress(function () {
  if (!isRunning) {
    isRunning = true;
    resetGame();
    addNextSequence();
  }
});
