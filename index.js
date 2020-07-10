var loopLength = document.querySelectorAll(".drum").length;

for (i = 0; i < loopLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML =this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){
   var pressedKey  = event.key;
   makeSound(pressedKey);
   makeAnimation(pressedKey);

   }
);

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();

    case "j":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("snare.mp3");
      snare.play();
    default: console.log(buttonInnerHTML);

  }
}

function makeAnimation(currentKey){
  var animation = document.querySelector("."+ currentKey);
  animation.classList.add("pressed");
  setTimeout(function(){animation.classList.remove("pressed")},100);
}

// var audio = new Audio("tom-1.mp3");
// audio.play();
