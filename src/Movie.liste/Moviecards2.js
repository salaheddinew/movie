import MovieCards2 from "./MovieCards";
import React, { Component } from "react";
import Movies from "../Movies.json";
import Barre from "./Barre";
export default class Moviecards2 extends Component {
  state = {
    movies: Movies,
  };
  render() {
    return (
      <div className="tout">
        <div>
          <Barre />
        </div>
        <div className="card1">
          {this.state.movies.map((movie) => {
            return (
              <MovieCards2
                imgsrc={movie.imgsrc}
                titre={movie.titre}
                anné={movie.anné}
                cathegorie={movie.cathegorie}
                limite={movie.limite}
                pays={movie.pays}
                watch={movie.watch}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
