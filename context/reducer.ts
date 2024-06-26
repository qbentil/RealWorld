"use client"

import { Action, State } from "@/interface";

// Adjust the path as necessary

const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",

};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null
      };
    default:
      throw new Error("Invalid action type in context.");
  }
};

export default reducer;
