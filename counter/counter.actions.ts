import { Action } from "./../ngrx/ngrx";

//HOW TO IMPLEMENT AN ACTION
export const incrementAction: Action = {
  type: "Increment",
};

//Second action
export const decrementAction: Action = {
  type: "Decrement",
};

//Third action
export const multiplyAction: Action = {
  type: "Multiply",
};

//Fourth action
export const multiplyArgumentAction: Action = {
  type: "MultiplyArgument",
  payload: 3,
};

//Fifth action
export const divideArgumentAction: Action = {
  type: "DivideArgument",
  payload: 2,
};

//Sixth action
export const resetAction: Action = {
  type: "Reset",
};
