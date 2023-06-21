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
  gamePattern.push(colors[next]);

  $("." + colors[next]).animate({
    opacity: 0.2,
  });
  $("." + colors[next]).animate({
    opacity: 1,
  });

  var sound = new Audio("/sounds/" + colors[next] + ".mp3");
  sound.play();

  $("h1").text("Level " + gamePattern.length);
}

$(".btn").on('click',function () {
        var colorClicked = (this.getAttribute('class').slice(4,100));
        
        if(colorClicked == gamePattern[gamePattern.length-1]){
                addNextSequence();
                $("h1").text("Level " + gamePattern.length);
        }
        else{
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
