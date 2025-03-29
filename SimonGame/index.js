var gamePattern = [];
var userPattern = [];
var colorSet = ["green", "red", "blue", "yellow"];
let level = 0;
let started = false;

function makeSound(key) {
  var audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function buttonAnimation(currentkey) {
  var active = $("." + currentkey);
  active.addClass("pressed");
  setTimeout(function () {
    active.removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  userPattern = [];
  started = false;
}
function nextSequence() {
  level++;
  $("#level-title").text("level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColor = colorSet[randomNumber];
  gamePattern.push(buttonColor);
  $("#" + buttonColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  makeSound(buttonColor);
}

function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("Success");

    if (userPattern.length == gamePattern.length) {
      userPattern = [];
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    started = false;
    makeSound("wrong");
    $("#level-title").text("Game Over,Your Score: " + level);
    $(".st-btn").text("Restart");
    $("body").addClass("red");
    setTimeout(function () {
      $("body").removeClass("red");
    }, 400);
    startOver();
  }
}

$(".st-btn").click(function () {
  if (!started) {
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
  $(".st-btn").addClass("pressed");
  setTimeout(function () {
    $(".st-btn").removeClass("pressed");
  }, 100);
});

$(".btn").click(function () {
  userPattern.push(this.id);
  makeSound(this.id);
  buttonAnimation(this.id);
  console.log("game pattern: " + gamePattern);
  console.log("user pattern: " + userPattern);
  checkAnswer(userPattern.length - 1);
});
