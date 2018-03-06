
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

    //we are making a sub-class. We will extend person
    class Employee extends Person {
        constructor(name, age, title){
            //super is a function that will use the constructor for the parent class
            super(name, age); 
            this.title = title;
        }
        getGreeting(){
            if(this.title){
                return `Hi, I am ${this.name}. I work as a ${this.title}. `
            }
            else{
                //this let's us refer to the 
                return super.getGreeting();
            }
        }
        hasJob(){
            return !!this.title;
        }

    }

  //programmer class
  //name, age, preferred language with default assembly
  //override getGreeting for Programmer- should print I am a assembly developer

  class Programmer extends Person{
      constructor(name, age, preferredLanguage = 'Assembly'){
          super(name, age);
          this.preferredLanguage = preferredLanguage; 
      }
      getGreeting(){
          if(this.preferredLanguage){
              return `My name is ${this.name}. My preferred language is ${this.preferredLanguage}`; 
          }
          else{
              return super.getGreeting();
          }
      }

  }
    
let userOne = new Programmer();
console.log(userOne.getGreeting());

});

