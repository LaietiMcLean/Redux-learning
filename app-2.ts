import { Action } from './ngrx/ngrx';
import { incrementAction, decrementAction, multiplyAction, multiplyArgumentAction, divideArgumentAction, resetAction } from './counter/counter.actions';
//HOW TO USE AN ACTION
//REDUCER: is a simple function which recives two arguments: the current state and the action I want to implement. 
//The objective of the reducer is to return a new state.
//If we want to include other condition in the reduce we do not use 'if... else'. In this case, we use 'switch'.
//A reducer is a simple function that has a switch with every action the reducer can operate.
/*Reducer must be a pure function; nothing has to interfere with it. 
Everything the Reducer needs to resolve it will be done here, and never with outside actions (for example, there won't be HTTP requests)*/
function reducer(state = 10, action: Action) {
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

//HOW TO USE A REDUCER
reducer(10, incrementAction);
reducer(10, decrementAction);
reducer(10, multiplyAction);
reducer(10, multiplyArgumentAction);
reducer(10, divideArgumentAction);
reducer(10, resetAction);

console.log(reducer(10, incrementAction)); // return: 11
console.log(reducer(10, decrementAction)); // return: 9
console.log(reducer(10, multiplyAction)); // return: 20
console.log(reducer(10, multiplyArgumentAction)); // return: 30
console.log(reducer(10, divideArgumentAction)); // return: 5
console.log(reducer(10, resetAction)); // return: 0