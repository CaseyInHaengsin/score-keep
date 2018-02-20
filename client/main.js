//we are importing React
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Casey',
    score: 99
}, {
    _id: '2',
    name: 'Brock',
    score: -2
}, {
    _id: '3',
    name: 'Sasha',
    score: -12
}];

const renderPlayers = (playersList) => {
    //let numbers = [{val: 1}, {val: 2}, {val: 3}];

    return playersList.map((player) => {
        return <p key={player._id}>{player.name} has {player.score} points</p>

    });
    //console.log(newNumbers);


};

Meteor.startup(() => {
   //jsx lets us define our components markup in the same file
    let name = 'Casey',
        title = 'Score Keep'
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