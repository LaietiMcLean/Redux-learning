import { Action } from '../ngrx/ngrx';
//HOW TO USE AN ACTION
//REDUCER: is a simple function which recives two arguments: the current state and the action I want to implement. 
//The objective of the reducer is to return a new state.
//If we want to include other condition in the reduce we do not use 'if... else'. In this case, we use 'switch'.
//A reducer is a simple function that has a switch with every action the reducer can operate.
/*Reducer must be a pure function; nothing has to interfere with it. 
Everything the Reducer needs to resolve it will be done here, and never with outside actions (for example, there won't be HTTP requests)*/
export function counterReducer(state = 10, action: Action) {
    switch(action.type) {
        case 'Increment': 
            return state += 1;

        //If we want to include a second action:
        case 'Decrement':
            return state-= 1;
        
        //Third action:
        case 'Multiply':
            return state *=2;

        //Fourth action
        case 'MultiplyArgument':
            return state * action.payload;
        
        //Fifth action
        case 'DivideArgument':
            return state / action.payload;
        
        case 'Reset':
            return state = 0;

        default:
            return state;
    }
}