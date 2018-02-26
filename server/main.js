
//I am importing meteor. It is important to do this before importing the Players (below)
import {Meteor} from 'meteor/meteor';

//Here I am importing the players variable from the imports/api/players.js file.
import {Players} from './../imports/api/players';

Meteor.startup(() => {
    //we are taking
    // Players.insert({
    //    name: 'Brock',
    //    score: 50

    // });
    // console.log(Players.find().fetch());

});