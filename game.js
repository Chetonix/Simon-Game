idList = ["green", "red", "yellow", "blue"];
randomID = idList[newSequence()];
gamePattern = [];
gamePattern.push(randomID);

$("#" + randomID)
  .fadeOut(100)
  .fadeIn(100);

var audio = new Audio("sounds/" + randomID + ".mp3");
audio.play();

$(document).on("keydown", function (event) {
  gameOver = false;
  while (!gameOver) {
    soundList = ["green.mp3", "red.mp3", "yellow.mp3", "blue.mp3", "wrong.mp3"];

    $("#" + idList[randNumber]).addClass("pressed");

    // $("#green").on("click", function (event) {
    //   console.log(event);
    // });

    // switch (randNumber) {
    //   case 1:

    //     break;
    //   case 1:
    //     break;
    //   case 1:
    //     break;
    //   case 1:
    //     break;
    //   default:
    //     break;
    // }

    gameOver = true;
  }
});

function newSequence() {
  var randNumber = Math.floor(Math.random() * 4);
  return randNumber;
}
