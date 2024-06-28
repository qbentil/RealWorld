"use client"

import { Action, State } from "@/interface";

// Adjust the path as necessary

const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  LOGOUT: "LOGOUT",
  SET_ARTICLES: "SET_ARTICLES"

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
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      };
    case actionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    default:
      throw new Error("Invalid action type in context.");
  }
};

export default reducer;
