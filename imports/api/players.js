
//Here I am importing mongo
import {Mongo} from 'meteor/mongo';

//I am creating a players collection using mongo, saving it
//to a variable Players and exporting it.
export const Players = new Mongo.Collection('players');

