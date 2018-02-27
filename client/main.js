//we are importing React
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {
    //let numbers = [{val: 1}, {val: 2}, {val: 3}];

    return playersList.map((player) => {
        return (
        <p key={player._id}>
        {player.name} has {player.score} points.
        <button onClick={() => Players.remove({_id: player._id})}>X</button>
        </p>
        
    );
        

    

    });

};
//e will let us access the player name and prevent the default refresh.
const handleSubmit = (e) => {
    let playerName = e.target.playerName.value; 
    console.log(playerName);
    //preventing the default behavior (refress)
    e.preventDefault(); 
    if (playerName){
        e.target.playerName.value = ''; 
        Players.insert({
            name: playerName,
            score: 0
        })
        
    }


};

Meteor.startup(() => {
   //jsx lets us define our components markup in the same file
   //call tracker.autorun
   //   create variable called players -> set equal to fetch query
   Tracker.autorun(() => {
    //console.log('Players List' + Players.find().fetch());
    let players = Players.find().fetch();

    let title = 'Score Keep';  
    let name = 'Casey'; 
    let jsx = (
    <div>
        <h1 id='test'>{title}</h1>
        <p id='intro'>Hello {name}</p>
        <p>Hello again! Second Paragraph</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
            <input type='text' name='playerName' placeholder='Player Name'/>
            <button>Add Player</button>
        </form>
    </div>
);

    ReactDOM.render(jsx, document.getElementById('app'));
});

    
});
