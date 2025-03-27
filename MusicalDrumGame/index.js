function makeSound(key) {
  switch (key) {
    case "w":
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(key);
  }
}

//Detecting the button press

var numButton = document.querySelectorAll(".drum");
for (var i = 0; i < numButton.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
    /*Alternate for switch case if else if ladder
    if (this.innerHTML === "w") {
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
    } else if (this.innerHTML == "a") {
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
    } else if (this.innerHTML == "s") {
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
    } else if (this.innerHTML == "d") {
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
    } else if (this.innerHTML == "j") {
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
    } else if (this.innerHTML == "k") {
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
    } else if (this.innerHTML == "l") {
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
    }*/
  }
}

//detecting the key pressed

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentkey) {
  var active = document.querySelector("." + currentkey);
  active.classList.add("pressed");
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
