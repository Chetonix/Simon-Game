var idList = ["green", "red", "yellow", "blue"];
var gamePattern = [];

function newSequence() {
  var randNumber = Math.floor(Math.random() * 4);

  var randomID = idList[randNumber];

  gamePattern.push(randomID);

  $("#" + randomID)
    .fadeOut(100)
    .fadeIn(100);

  let audio = new Audio("sounds/green.mp3");
  audio.play();
}
$(window).load(function () {
  newSequence();
});
