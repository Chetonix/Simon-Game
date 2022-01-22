$(document).on("keydown", function (event) {
  gameOver = false;
  while (!gameOver) {
    var randNumber = Math.floor(Math.random() * 4) + 1;
    idList = ["green", "red", "yellow", "blue"];
    soundList = ["green.mp3", "red.mp3", "yellow.mp3", "blue.mp3", "wrong.mp3"];

    $("#" + idList[randNumber]).addClass("pressed");
    var audio = new Audio("sounds/" + soundList[randNumber]);
    audio.play();

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
