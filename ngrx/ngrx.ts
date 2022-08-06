//ACTIONS
//Action is a simple interface
export interface Action {
    type: string;
    payload?: any; //Parameters we can send to the action
}

export interface Reducer<T> {
    //As we can see, the Reducer interface will be always a function (because reducer is a function)
    (state: T, action: Action): T
}