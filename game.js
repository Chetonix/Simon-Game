var idList = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
started = false;

function newSequence() {
  
  userClickedPattern = [];

  
  var randNumber = Math.floor(Math.random() * 4);

  var randomID = idList[randNumber];

  gamePattern.push(randomID);

  $("#" + randomID)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomID);

  $(".btn").click(
    checkAnswer(userPattern.length-1);
  );
  // checkAnswer(level);
  // level++;
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    newSequence();
    started = true;
}
  
});

function checkAnswer(currentLevel) {
  if( userClickedPattern[currentLevel] === gamePattern[currentLevel] ){ 
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }}
  return true;
}
  else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $(body).addClass("game-over");
    setTimeout(() => {
      $(body).removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
  

    startOver();
  }
}
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}