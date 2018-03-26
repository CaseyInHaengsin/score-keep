
//Here I am importing mongo
import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

//I am creating a players collection using mongo, saving it
//to a variable Players and exporting it.
export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
    let rank = 1;
    return players.map((player, index) => {
            if(index !== 0 && players[index -1].score > player.score) {
                rank++;
            }

            return {
                ...player,
                rank,
                position: numeral(rank).format('0o')

            }
    });
};
