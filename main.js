console.log("How are you doing today?");
var userAnswer = prompt("I'm good. How are you?");
	console.log("Yea man, I'm " + userAnswer + " as well."); 

var bananas = 5,
	oranges = 7,
	allFruit = bananas + oranges;
  
console.log("You have " + allFruit + " pieces of fruit.");
var people = prompt("Can you evenly share all the fruit? Enter # of friends you want to share with.");
 if (allFruit % people === 0) {
 	console.log("You will make everybody happy!");
 } else {
 	console.log("You won't be abe to share equally.");
 };

var myStringObject = new String('Heather')
console.log(myStringObject);

var Person = function(ageKey, livingKey, genderKey) {
	this.age = ageKey;
	this.living = livingKey;
	this.gender = genderKey;
	return this;
};

var Tim = new Person(0, 1, 4);
console.log(Tim);

var cheeses = ["Brie", "Camembert", "Queso Fresco"]

var breadSlices = {
	openFace: 1,
	club: 3,
	rueben: 2,
}
for (var key in breadSlices) {
	console.log("A " + key + " sandwich has " + breadSlices[key] + " slices of bread." );
}

/*
var breadSlices = {}
	breadSlices.openFace = 1;
	breadSlices.club = 3;
	breadSlices.rueben = 2;

var pets = new Array ();
	pets[0] = 'Pepperjack';
	pets[1] = 'Muenster';

var pets = ['Pepperjack', 'Muenster']; */
/*
var mascots = {
	panthers: "Sir Purr",
	bobcats: "Rufus",
	hornets: "Hugo",
}

var mascots = new Array();
	mascots.push("Sir Purr");
	mascots.push("Rufus");
	mascots.push("Hugo");


var mascots = {};
	mascots['panthers'] = "Sir Purr";
	mascots['bobcats'] = "Rufus";
	mascots['hornets'] = "Hugo";

var socialMedia = {
	twitter: "twitter.com",
	facebook: "facebook.com"
} 
*/

var cupOfJoe = {
	bean: ["Arabica", "Robusta", "Kopi Luwak"], 
	brew: ["French press", "Filter brewing"],
	cupSize: "extra large",
	sugarCube: [1, 2, 3],
	cream: "whole mess o' cream",
	order: function(beanKey, brewKey) {
		if (beanKey >= this.bean.length) {
			console.log("We don't have that bean.");
			return;			
		} else if (brewKey >= this.brew.length) {
			console.log("We don't have that brew.");
			return;			
		}
		console.log('Gimme a ' + this.bean[beanKey] + ' ' + this.brew[brewKey] + ', dumb dumb!');
 	},
 	listBrews: function() {
 		var message = "We have the following brew types: ";
 		for (var i = 0; i < this.brew.length; i++) {
 			message += this.brew[i] + ", ";
		}
		message = message.slice(0, -2);
		console.log(message);
 	},
 	listBeans: function() {
 		var message = "We have the following bean types: ";
 		for (var i = 0; i < this.bean.length; i++) {
 			message += this.bean[i] + ", ";
 		}
 		message = message.slice(0, -2);
 		console.log(message);
  	}
};

cupOfJoe.order(0, 1);
cupOfJoe.order(1000, 1);
cupOfJoe.listBrews(); 
cupOfJoe.listBeans();