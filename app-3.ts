import { Reducer, Action } from './ngrx/ngrx';
import { counterReducer } from './counter/counter.reducer';
import { incrementAction, multiplyAction } from './counter/counter.actions';
//Store
//The aim of the Store is to dispatch or execute the actions.
//<T> will be the type of Store, which it means a 'generic type'; it would be an object type, number type, string type...
class Store<T> {

    //The state will always have the same type as the Store.
    /*To put a reducer type, we create a Reducer interface in the ngrx library...
    And we need to put the type of information the Reducer is going to manage, 
    which it will be the generic type <T>, the same we put in the Reducer interface*/
    constructor(private reducer: Reducer<T>, private state: T) {}

    /*Since the state is a private function, we need a function
    so we can access it.*/

    getState() {
        return this.state;
    }

    //Dispatch the actions (the dispatch don't return anything, only executes the action)
    dispatch(action: Action) {
        //How to dispatch the function
        this.state = this.reducer(this.state, action);
    }
}

//Create an instante of the store
const store = new Store(counterReducer, 10);

//Watch the changes step by step (this will be simplify in the app-4 file)
console.log(store.getState()); // return: 10

//If we want to dispatch the action that increments the state in 1:
store.dispatch(incrementAction);

//But if I want to see the new state, I need to call again the getState after to call the action.
console.log(store.getState()); // return: 10 & 11 (new state)

//If I call again the action...
store.dispatch(incrementAction);
console.log(store.getState());  // return: 10 & 11 & 12 (new state)

//And again...
store.dispatch(multiplyAction)
console.log(store.getState()); // return: 10 & 11 & 12 & 24 (new state)