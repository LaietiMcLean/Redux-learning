import { createStore, Store } from "redux";
import { counterReducer } from './counter/counter.reducer';
import { incrementAction } from './counter/counter.actions';

//Herw we are going to simplify the store doc (app-3) by using the Redux library
const store: Store = createStore(counterReducer);

/*Instead of doing what we have in app-3, where we were watching step by step the changes of the state, 
we can subscribe to the changes and we always be notified when the state is changed.*/
store.subscribe(() => {
    console.log('Subs:', store.getState())
})

store.dispatch(incrementAction);