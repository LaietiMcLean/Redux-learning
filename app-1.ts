//ACTIONS
interface Action {
    type: string;
    payload?: any; //Parameters we can send to the action
}

//HOW TO IMPLEMENT AN ACTION
const incrementAction: Action = {
    type: 'Increment'
};

//Second action
const decrementAction: Action = {
    type: 'Decrement'
}

//Third action
const multiplyAction: Action = {
    type: 'Multiply'
}

//HOW TO USE AN ACTION
//REDUCER: is a simple function which recives two arguments: the current state and the action I want to implement. 
//The objective of the reducer is to return a new state.
//If we want to include other condition in the reduce we do not use 'if... else'. In this case, we use 'switch'.
function reducer(state: 10, action: Action) {
    switch(action.type) {
        case 'Increment': 
            return state += 1;

        //If we want to include a second action:
        case 'Decrement':
            return state-= 1;
        
        //Third action:
        case 'Multiply':
            return state *=2;

        default:
            return state;
    }
}

//HOW TO USE A REDUCER
reducer(10, incrementAction);
reducer(10, decrementAction);
reducer(10, multiplyAction);

console.log(reducer(10, incrementAction)); // return: 11
console.log(reducer(10, decrementAction)); // return: 9
console.log(reducer(10, multiplyAction)); // return: 20