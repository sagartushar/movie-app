import React from "react";
import { data } from "../data";
import { addMovies, setShowFavourites } from "../actions";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { StoreContext } from "../index";
import {connect} from 'react-redux'
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // store.subscribe(() => {
    //   console.log("UPDATED");
    //   this.forceUpdate();
    // });
    this.props.dispatch(addMovies(data));
  }
  isMovieFavourite = (movie) => {
    const { favourites } = this.props.movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies, search } = this.props;
    const { list, favourites, showFavourites } = movies;

    const displayMovies = showFavourites ? favourites : list;
    // console.log("here", movies);

    return (
      <div className="App">
        <Navbar dispatch={this.props.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>

          {displayMovies.length === 0 ? <h1>No Movies to display</h1> : ""}
        </div>
      </div>
    );
  }
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
function mapStateToProps(state){
  return{
    movies: state.movies,
    search: state.movies,
  };
}
const ConnectedAppComponent  = connect(mapStateToProps)(App);
export default ConnectedAppComponent;
