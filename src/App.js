import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import MovieResults from "./components/MovieResults";
import Store from "./js/store";
import Spinner from "./components/Spinner";
//import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getAppState = this.getAppState.bind(this);
    this.state = this.getAppState();
  }

  getAppState() {
    //console.log(Store.getMovieResults(), "!");
    return {
      movies: Store.getMovieResults()
    };
  }

  componentDidMount() {
    Store.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    Store.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getAppState());
  }

  render() {
    let movieList = null;
    if (Store.getMovieResults().length === 0) {
      movieList = (
        <div className="text-center">
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            Enter movie name..
          </div>
          <div>
            <Spinner />;
          </div>
        </div>
      );
    } else {
      movieList = <MovieResults movies={this.state.movies} />;
    }
    //console.log(this.state, "state");
    return (
      <div className="album py-5 bg-light">
        <h1 className="text-center">Movies</h1>
        <div className="container">
          <SearchForm />
        </div>
        <div className="container pull-down">
          {movieList}
          {/* <MovieResults movies={this.state.movies} /> */}
        </div>
      </div>
    );
  }
}

export default App;
