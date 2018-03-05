
//I am importing meteor. It is important to do this before importing the Players (below)
import {Meteor} from 'meteor/meteor';

//Here I am importing the players variable from the imports/api/players.js file.
import {Players} from './../imports/api/players';

Meteor.startup(() => {
    //this is how to define a class. 
    class Person {
        constructor(name = 'John', age = 0) {
            this.name = name; 
            this.age = age;
        }
        getGreeting() {
            return `Hi! I am ${this.name}`;
        }
        getAge() {
            return `${this.name} is ${this.age}`;
        }

    };
    //creating an instance of a class
    let me = new Person();
    console.log(me.getGreeting());

    let person2 = new Person('Sasha', 30);

    console.log(person2.getAge());
    

});