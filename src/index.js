import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers'

import {Provider} from 'react-redux';



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
    if(typeof  action !== 'function')
    console.log("Action Type " , action.type);
    next(action);
}
// const thunk = ({dispatch , getState})=> (next)=> (action)=>{  //npm i redux-thunk
//     if(typeof action === 'function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }

const store  = createStore(rootReducer , applyMiddleware(logger,thunk));
// export const StoreContext = createContext();
// class Provider extends React.Component{
//     render(){
//         const {store} = this.props;
//         return <StoreContext.Provider value ={store}>
//             {this.props.children}
//         </StoreContext.Provider>;
//     }
// }
// console.log('Before State',store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies : [{name : 'Superman'}],
// });

// console.log('After State',store.getState());

// {/* {//store will be available to app and all its descendants} */}

// export function connect(callback){
//     return function(Component){
//         class ConnectedComponent extends React.Component{
//             constructor(props){
//                 super(props);
//                 this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate());
//             }
//             componentWillUnmount(){
//                 this.unsubscribe();
//             }
//             render(){
//                 const {store} = this.props;
//                 const state = store.getState();
//                 const dataToBePassedAsProps = callback(state);
//                 return (
//                     <Component {...dataToBePassedAsProps} dispatch = {store.dispatch} />

//                 );
//             }
//         }
//         class connectedComponentWrapper extends React.Component{
//             render(){
//                 return(
//                     <StoreContext.Consumer>
//                         {(store)=><ConnectedComponent store={store} />}
//                     </StoreContext.Consumer>
//                 )
//             }
//         }
//         return connectedComponentWrapper;
//     }
// }

ReactDOM.render(
    <Provider store = {store}>
        <App/>  
    </Provider>,
    document.getElementById('root'));


