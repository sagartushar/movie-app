import { combineReducers } from 'redux';
import {ADD_MOVIES , ADD_FAVOURITES, DELETE_FAVOURITE,SET_SHOW_FAVOURITES , ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT} from '../actions';
const intialMoviesState = {
    list : [],
    favourites: [],
    showFavourites : false
}
export  function movies(state = intialMoviesState,action){
   
    switch(action.type){
        case ADD_MOVIES :
            return {
                ...state,
                list : action.movies
            }
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites :[action.movie , ...state.favourites]
            }
        case DELETE_FAVOURITE :
            const Array = state.favourites;
            Array.splice( Array.indexOf(action.movie), 1);
            return{
                ...state,
                favourites : Array
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites : action.val
            }
        case ADD_MOVIE_TO_LIST:
            console.log("hey bro",state);
            return {
                ...state,
                list :  [action.movie, ...state.list]

            }; 
        default:
            return state;
    }
    
}
// const intialSearchState = {
//     result : {}
// }
export function search(state = {result :{}} , action){
    switch(action.type){
        case ADD_SEARCH_RESULT: 
            return{
                ...state,
                result:action.movie
            }
        default:
            return state;
    }
  
}

// const intialRootState = {
//     movies : intialMoviesState,
//     search : intialSearchState
// }
// export function rootReducer(state = intialRootState , action){   //instead of this we can use reduc cominereducers method
//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search , action),
//     }
// }
export default combineReducers({
    movies,
    search
})