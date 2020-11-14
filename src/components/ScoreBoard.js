/* =================================
  This is the Footer component
==================================== */

import React,{Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import Example from '../img/example.png';

import '../css/ScoreBoard.css';

  class ScoreBoard extends Component {
    state = {
        players: [
          {
            name: "Jose Lopez",
            score: 0,
            id: 1
          },
          {
            name: "Daniel Gil",
            score: 0,
            id: 2
          },
          {
            name: "Mark Daza",
            score: 0,
            id: 3
          },
          {
            name: "James bond",
            score: 0,
            id: 4
          }
        ]
      };
    // player id counter
    prevPlayerId = 4;

    hangleScoreChange = (index, delta) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
        }));
        console.log('index: ' + index, 'delta: ' + delta)
    }

    handleAddPlayer = (name) => {
    this.setState( prevState => {
        return {
        players: [
            ...prevState.players,
            {
            name,
            score: 0,
            id: this.prevPlayerId += 1
            }
        ]
        }
    });
    }

    handleRemovePlayer = (id) => {
    this.setState( prevState => {
        return {
        players: prevState.players.filter(p => p.id !== id)
        };
    });
    }

    handleRemovePlayer = (id) => {
    this.setState( prevState => {
        return {
        players: prevState.players.filter(p => p.id !== id)
        };
    });
    }
    
    render(){
      return (
        <div className="scoreboard">
        <Header
        title="Scoreboard"
        players={this.state.players}/>

        {this.state.players.map( (players, index) =>
          <Player
          name={players.name}
          score={players.score}
          id={players.id}
          key={players.id.toString()}
          index={index}
          changeScore={this.hangleScoreChange}
          removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        <di className="aboutScoreboard">
            <p>
            In React, data naturally flows down the component tree from the app's top-level 
            component down to the child components via props. For example, in the scoreboard project, 
            the scoreboard component tells the player component all about the players by passing a set 
            of props. It also instructs the header component about the total number of players and points. 
            If our data comes from one place, React will flow any data changes at the top-down through the 
            component tree, updating each component. This is called unidirectional data flow.
            </p>
            <img src={Example} alt="resoult." />
          </di>
    </div>
      );
    }
}

export default ScoreBoard;