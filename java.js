var button = document.getElementById("half-button")
var halfNumber = function(){
  var number = document.getElementById("half-input").value;
  var greeting = number / 2;
alert(greeting);
console.log(greeting + " is half of " + number)
}
  button.addEventListener("click", halfNumber);

  var otherButton = document.getElementById("fortune-button")
  var fortune = function(){
    var name = document.getElementById("fortune-input").value;
    var Array = [" smells like doody.", " does not wipe.", " is a meany.", " talks to imaginary beings.", " sells meth.", " eats poo.", " farts too much."]
    var randum = Math.floor( Math.random() * Array.length);
    var greeting = name + Array[randum];

  alert(greeting);
  }
    otherButton.addEventListener("click", fortune);
var restyle = function(){
  var uhray = ["yellow", "green", "orange", "red"]
  var random = Math.floor( Math.random() * uhray.length);
  var serif = ["serif", "sans-serif"]
  var non = Math.floor( Math.random() * serif.length);
  var sizes = ["xxxxx-large", "xxxx-large", "xxx-large"]
  var size = Math.floor( Math.random() * sizes.length);
    var patty = Math.floor( Math.random() * 400);
document.body.style.backgroundColor = uhray[random];
document.body.style.fontFamily = serif[non];
document.body.style.fontSize = sizes[size];
document.body.style.padding = patty + "px";
document.body.style.textAlign = "center"
}
  otherButton.addEventListener("click", restyle);
