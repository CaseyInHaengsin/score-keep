
//I am importing meteor. It is important to do this before importing the Players (below)
import {Meteor} from 'meteor/meteor';

//Here I am importing the players variable from the imports/api/players.js file.
import {Players} from './../imports/api/players';

Meteor.startup(() => {
    //this is how to define a class.


});

//Object Spread Operator

let user = {
    name: 'Andrew',
    location: 'Provo',
    age: 0
};



//console.log(person);

//Object Property shorthand
/*let bike = "scott";
let stuff = {
    bike,
    laptop: 'Mac'
};*/
//console.log(stuff);

/*let house = {
    bedrooms: 2,
    bathrooms: 1.5
};

let yearBuilt = 2002;*/
/*

let challenge = {
    ...house,
    bedrooms: 3,
    yearBuilt,
    flooring: 'Carpet'
};
console.log(challenge);*/
