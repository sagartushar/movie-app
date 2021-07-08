import React from 'react';
import { data } from '../data';
import {addMovies,setShowFavourites} from '../actions';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
class App extends React.Component{
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    console.log('STATE',this.props.store.getState().movies);
  }
  isMovieFavourite = (movie) => {
    const {favourites} = this.props.store.getState().movies;
    const index  = favourites.indexOf(movie);
    if(index!==-1){
      return true;
    }else{
      return false;
    }
  }
  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourites(val));
  }
  render(){
    const {movies,search} = this.props.store.getState();
    const {list,favourites,showFavourites} = movies;
    
    const displayMovies = showFavourites?favourites:list;
    console.log('here',this.props.store.getState().movies);
   
    
    return (
      <div className="App">
          <Navbar dispatch = {this.props.store.dispatch} search ={search}/>
          <div className="main">
              <div className="tabs">
                <div className={`tab ${showFavourites ? '' :'active-tabs'}`} onClick = {()=>this.onChangeTab(false)}>Movies</div>
                <div className={`tab ${showFavourites ?'active-tabs' : ''}`}onClick = {()=>this.onChangeTab(true)}>Favourites</div>
              </div>

              <div className="list">
                  {displayMovies.map((movie,index)=>(
                      <MovieCard 
                        movie={movie} 
                        key = {`movies-${index}`} 
                        dispatch = {this.props.store.dispatch}
                        isFavourite = {this.isMovieFavourite(movie)}
                        />
                  ))}
              </div>

              {displayMovies.length === 0?<h1>No Movies to display</h1> : ''}
          </div>
      </div>
    );
  }
}
export default App;
