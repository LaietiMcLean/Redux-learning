//ACTIONS
interface Action {
    type: string;
    payload?: any; //Parameters we can send to the action
}

//HOW TO IMPLEMENT AN ACTION
const incrementAction: Action = {
    type: 'Increment'
};

//HOW TO USE AN ACTION
//REDUCER: is a simple function which recives two arguments: the current state and the action I want to implement. 
//The objective of the reducer is to return a new state.
function reducer(state: 10, action: Action) {
    if(action.type === 'Increment') {
        return state += 1;
    }
    return state;
}

//HOW TO USE A REDUCER
reducer(10, incrementAction);

console.log(reducer(10, incrementAction)); // return: 11