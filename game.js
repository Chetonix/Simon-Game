var idList = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
started = false;

function newSequence() {
  userClickedPattern = [];
  
  $("#level-title").text("Level " + level);
  var randNumber = Math.floor(Math.random() * 4);

  var randomID = idList[randNumber];

  gamePattern.push(randomID);

  $("#" + randomID)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomID);

  $(".btn").click(
    checkAnswer(currentLevel);
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
    started = true;
    newSequence();
}
  setTimeout(newSequence(), 100);
});

function checkAnswer(currentLevel) {

}
