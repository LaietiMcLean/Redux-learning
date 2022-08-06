//ACTIONS
//Action is a simple interface
export interface Action {
    type: string;
    payload?: any; //Parameters we can send to the action
}
