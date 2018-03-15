import React from 'react';
import {Players} from "../api/players";
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    render() {
        return (
            <p key={this.props.player._id}>
                {this.props.player.name} has {this.props.player.score} points.
                <button onClick={() => {

                    Players.update(this.props.player._id, {$inc: {score: 1}});
                }}>+1</button>
                <button onClick={() => {
                    Players.update(this.props.player._id, {$inc: {score: -1}});
                }}>-1</button>
                <button onClick={() => {
                    Players.remove(this.props.player._id);
                }}>X</button>
            </p>
        );

    }
};

//setup prop types, player should be a required object
Player.propTyes = {
  player: PropTypes.object.isRequired
};

