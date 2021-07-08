// {
//     type : "ADD_MOVIES"
//     movies : [m1,m2,m3]
// }
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT  = 'ADD_SEARCH_RESULT';
//action creators
export function addMovies(data){
    return {
        type : ADD_MOVIES,
        movies : data
    }
};
export function addFavourite(movie){
    return {
        type : ADD_FAVOURITES,
        movie
    }
};
export function delteFromFavourite(movie){
    return {
        type : DELETE_FAVOURITE,
        movie
    }
};
export function setShowFavourites(val){
    return {
        type : SET_SHOW_FAVOURITES,
        val
    }
};
export function addMovieToList(movie){
    return {
        type : ADD_MOVIE_TO_LIST ,
        movie
    }
};
export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=effd7d7b&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            console.log('movie',movie);

            //dispatch an action 
            dispatch(addMovieSearchResult(movie));
        })

    }
};
export function addMovieSearchResult(movie){
    return {
        type : ADD_SEARCH_RESULT ,
        movie
    }
};
