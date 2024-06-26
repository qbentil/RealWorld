"use client"; // This is a client component 👈🏽

import React, { createContext, useContext, useReducer, useMemo } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const memoizedContext = useMemo(() => [state, dispatch], [state, dispatch]);

    return (
        <StateContext.Provider value={memoizedContext}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);
