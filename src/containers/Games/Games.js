import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./Games.css";
import Game from "../Game/Game"

class Games extends Component {
  state = {
    games: [
      { id: 1, title: "Crash Bandicot ", image: "https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png"},
      { id: 2, title: "Crock 2", image: "https://upload.wikimedia.org/wikipedia/en/6/65/Croc_2.jpg"},
      { id: 3, title: "Tekken", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Tekken_1_game_cover.jpg/220px-Tekken_1_game_cover.jpg" },
    ],
  };
  

  render() {
    return (
      <div className="gameBox">
        <h1>Playstation Games</h1>
        <section className="Games">
          {this.state.games.map((game) => {
            return (
              <NavLink 
              className="GameLink"
              key={game.id} 
              to={{
                   pathname: this.props.match.url + '/' + game.id,
                   search: "?gameTitle=" + game.title
                }}>
                <article className="Game" >
                 <h1 className="gameH1">{game.title}</h1> 
                 <img className="gameImg" src={game.image} alt="games"></img>
                </article>
              </NavLink>
            );
            
          })}
        </section>
        <Route path={this.props.match.url + '/:gameId'} component={Game} /> 
      </div>
    );
  }
}

export default Games;
