import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux'; 

import './index.css';
import App from './components/App';
import rootReducer from './reducers'



//function logger(odj , next , action) //here next is next middleware if there is more middlware else dispatch will be call
//logger(obj)(next)(action)
// const logger = function({dispatch , getState}){
//     return function(next){
//         return function(action){
//             console.log("Action Type " , action.type);
//             next(action);
//         }
//     }
// }
const logger = ({dispatch , getState})=> (next)=> (action)=>{
    console.log("Action Type " , action.type);
    next(action);
}

const store  = createStore(rootReducer , applyMiddleware(logger));
// console.log('Before State',store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies : [{name : 'Superman'}],
// });

// console.log('After State',store.getState());

ReactDOM.render(<React.StrictMode><App store = {store}/></React.StrictMode>,document.getElementById('root'));


