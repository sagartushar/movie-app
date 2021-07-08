// {
//     type : "ADD_MOVIES"
//     movies : [m1,m2,m3]
// }
//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
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

