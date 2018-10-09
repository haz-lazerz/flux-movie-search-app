import Actions from "./actions";
import $ from "jquery";

class API {
  searchMovies(movie) {
    $.ajax({
      url: "http://www.omdbapi.com/?apikey=c2112bc0&s=" + movie.title,
      dataType: "json",
      cache: false,
      success(data) {
        let movies = data.Search ? data.Search : [];
        Actions.showMovieResults(movies);
        //console.log(data.Search, "data");
      },
      error(xhr, status, err) {
        alert(err);
      }
    });
  }
}

export default new API();
