import React  from 'react';
import {addMovieToList , handleMovieSearch} from '../actions';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearchResults : false,
            searchText : ''
        };
    }
    handleAddToMovies = (movie) => {
        
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults : false
        })
    }
    handleSearch = () =>{
        
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
        this.setState({
            showSearchResults:true
        })
    };
    handleChange=(e)=>{
        // console.log(e.target.value);
        this.setState({
            searchText : e.target.value
        })
    }
    render(){
        const {showSearchResults} = this.state;
        const { result } = this.props.search;
        
        return(
            <div className ="nav">
                <div className = "search-container">
                    <input onKeyUp = {this.handleChange}/>
                    <button id ="search-btn" onClick = {this.handleSearch} >Search</button>
                    {
                        (showSearchResults && result.Response === "True" )&&
                            <div className ="search-results">
                                <div className ="search-result">
                                    <img src = {result.Poster} alt = "search-pic"></img>

                                    <div className = "movie-info">
                                        <span>{result.Title}</span>
                                        <button onClick ={()=> this.handleAddToMovies(result)} >
                                        Add to Movies
                                        </button>
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        (showSearchResults && result.Response === "False" )&&
                            <div className ="search-results">
                                <div className ="search-result">
                                    <div className = "movie-info">
                                        <span>Nothing Found</span>
                                        
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}
export default Navbar;