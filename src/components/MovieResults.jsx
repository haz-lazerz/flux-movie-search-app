import React, { Component } from "react";
import Movie from "../components/Movie";

class MovieResults extends Component {
  render() {
    // if (this.props.movies === null) {
    //   return null;
    // }
    //console.log(this.props.movies, "lll");
    return (
      <div className="text-center">
        <h4>Results:</h4>
        <ul className="list-group">
          {this.props.movies.map((movie, i) => {
            return <Movie movie={movie} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default MovieResults;
