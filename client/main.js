//we are importing React
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';


import {Players} from './../imports/api/players';


//e will let us access the player name and prevent the default refresh.




Meteor.startup(() => {
   //jsx lets us define our components markup in the same file
   //call tracker.autorun
   //   create variable called players -> set equal to fetch query
   Tracker.autorun(() => {
    //console.log('Players List' + Players.find().fetch());
    let players = Players.find().fetch();

    let title = 'Score Keep!';
    let subTitle = 'I did it!';
    let name = 'Casey'; 
    let jsx = (
    <div>
       <TitleBar title={title}/>


        <PlayerList players={players}/>
        <AddPlayer/>


    </div>
);

    ReactDOM.render(jsx, document.getElementById('app'));
});

    
});
