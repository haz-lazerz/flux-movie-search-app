import React, { Component } from "react";
import Actions from "../js/actions";

class SearchForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }

  onSubmit = e => {
    e.preventDefault();
    let movie = {
      title: this.refs.title.value
    };
    Actions.searchMovies(movie);
  };

  render() {
    return (
      <div className="search-form">
        <h2 className="text-center">Search for movie</h2>
        <form onSubmit={this.onSubmit} className="text-center">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref="title"
              placeholder="search..."
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
