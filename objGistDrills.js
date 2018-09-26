// Object drills
// 1. Object initializers and methods
// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

/*
let loaf = {
	flour: 300,
	water: 210,
	hydration: function(){
		return (this.water/this.flour) * 100;
	}
}

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

/////////////////////////////////////

// 2. Iterating over an object's properties
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.


let testObject = {
	foo: 23,
	bar: 38,
	fum: 78,
	quux: 54,
	spam: 212
}

for(let element in testObject){
	console.log(`${element} : ${testObject[element]}`);
}

// console.log(element ' : ' testObject[element]);


let hobbitMeals = {
	meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(hobbitMeals.meals[3]);


let objArray= [
	{
	name: 'Jack',
	jobTitle:'Lumberjack'
	},
	{
	name: 'Jill',
	jobTitle:'Warlord'
	},
	{
	name: 'Banner',
	jobTitle: 'Good boy'
	},
	{name: 'Bananacat',
	jobTitle:'The best'
}
];
//array = [1,2,3]
//let item = array[0]
objArray.forEach(item=>console.log(item.name, item.jobTitle));
objArray.forEach(function(item)());
*/

///////////////////////////////////////////
/*
let objArray= [
	{
	name: 'Jack',
	jobTitle:'Lumberjack',
	boss: 'Jill'
	},
	{
	name: 'Jill',
	jobTitle: 'Warlord',
	boss: 'Banner'
	},
	{
	name: 'Banner',
	jobTitle: 'Good boy',
	boss: 'Bananacat'
	},
	{name: 'Bananacat',
	jobTitle:'The best',
	boss: 'Richard GreenHill'
	},
	{
	name: 'Richard GreenHill',
	jobTitle: 'Instructor',
	}
];

let bossStatement = objArray.forEach(function(item){
	if(item.boss) {
		return console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}`);
	}
	else {
	
		return console.log(`${item.jobTitle} ${item.name} doesn't report to anybody.`);
	}
}
);

console.log(bossStatement);
// "${title} ${name} reports to ${boss}."
*/
