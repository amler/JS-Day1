console.log("How are you doing today?");
var userAnswer = prompt("I'm good. How are you?");
	console.log("Yea man, I'm " + userAnswer + " as well.");

var bananas = 5,
	oranges = 7,
	allFruit = bananas + oranges;
	people = x,

console.log("You have " + allFruit + " pieces of fruit.");
var x = prompt("Can you evenly share all the fruit? Enter # of friends you want to share with.");
 if (allFruit % people != 0) {
 	console.log("You will make everybody happy!");
 } else {
 	console.log("You won't be abe to share equally.");
 }

 var cupOfJoe = {
 	waterTemp: 200, 
 	bean: ["Arabica", "Robusta", "Kopi Luwak"], 
 	brew: ["French press", "Filter brewing"]
 	cupSize: "extra large",
 	sugarCube: 1,
 	cream: "whole mess o' cream",
 };

cupOfJoe.grabACup = function(){
	return cupOfJoe.cupSize;
};
console.log("You're going to need an " + cupOfJoe.grabACup() + " cup today"); 

