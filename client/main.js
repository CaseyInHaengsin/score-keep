//we are importing React
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {
    //let numbers = [{val: 1}, {val: 2}, {val: 3}];

    return playersList.map((player) => {
        return <p key={player._id}>{player.name} has {player.score} points</p>

    });

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
        <p>Hello {name}</p>
        <p>Hello again! Second Paragraph</p>
        {renderPlayers(players)}
    </div>
);

    ReactDOM.render(jsx, document.getElementById('app'));
});

    
});
