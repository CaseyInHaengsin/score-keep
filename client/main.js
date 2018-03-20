//we are importing React
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';






//e will let us access the player name and prevent the default refresh.




Meteor.startup(() => {
   //jsx lets us define our components markup in the same file
   //call tracker.autorun
   //   create variable called players -> set equal to fetch query
   Tracker.autorun(() => {
    //console.log('Players List' + Players.find().fetch());
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let title = 'Score Keep';

    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
});

    
});
