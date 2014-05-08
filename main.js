/*
console.log("How are you doing today?");
var userAnswer = prompt("I'm good. How are you?");
	console.log("Yea man, I'm " + userAnswer + " as well."); 


var bananas = 5,
	oranges = 7,
	allFruit = bananas + oranges;
  
console.log("You have " + allFruit + " pieces of fruit.");
var people = prompt("Can you evenly share all the fruit? Enter # of friends you want to share with.");
	if (typeof people == "string") {
		return people;
	} else if (allFruit % people == 0) {
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

/*var cheesePlate = ["Brie", "Camembert", "Queso Fresco"];
cheesePlate.push('Cheddar');

function firstThree (cheesePlate) {
	return cheesePlate[cheesePlate.length - 1];
console.log(cheesePlate);
*/

/*
var breadSlices = {
	openFace: 1,
	club: 3,
	rueben: 2,
}
for (var key in breadSlices) {
	console.log("A " + key + " sandwich has " + breadSlices[key] + " slices of bread." );
}

/* ============================
Writing Objects & Arrays in different ways
===============================

========Object - 1========

var breadSlices = {}
	breadSlices.openFace = 1;
	breadSlices.club = 3;
	breadSlices.rueben = 2;

=======Object - 2 "Object Literal" ====

var mascots = {
	panthers: "Sir Purr",
	bobcats: "Rufus",
	hornets: "Hugo",
}

var socialMedia = {
	twitter: "twitter.com",
	facebook: "facebook.com"
} 

=======Object - 3 ============

var mascots = {};
	mascots['panthers'] = "Sir Purr";
	mascots['bobcats'] = "Rufus";
	mascots['hornets'] = "Hugo";

=======Array - 1==========

var pets = new Array ();
	pets[0] = 'Pepperjack';
	pets[1] = 'Muenster';

======Array - 2 ===========

var pets = ['Pepperjack', 'Muenster'];

=======Array - 3 ==========

var mascots = new Array();
	mascots.push("Sir Purr");
	mascots.push("Rufus");
	mascots.push("Hugo");
*/

/*
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
cupOfJoe.order(2, 500);
cupOfJoe.listBrews(); 
cupOfJoe.listBeans();

/*

var dog = {
		legs: 4,
		tail: 1,
		talk: function() {
		alert("woof");
		}
	};
dog.talk()
*/

var makeMeLaugh = {
	animals: ["wolf", "unicorn", "russian bear", "hedgehog"],
	shoes: ["flip-flops", "high-heels", "bananas"],
	transportation: ["unicycle", "motorcycle", "horse", "llama"],
	getChuckle: function(animalKey, shoeKey, transportKey) {
 		var animalKey = Math.floor(Math.random() * this.animals.length);
 		var shoeKey = Math.floor(Math.random() * this.shoes.length);
 		var transportKey = Math.floor(Math.random() * this.transportation.length);
		console.log('Holy shit! I just saw a ' + this.animals[animalKey] + ' wearing ' + this.shoes[shoeKey] + ' while riding a ' + this.transportation[transportKey]);
	}
};

makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();
makeMeLaugh.getChuckle();

