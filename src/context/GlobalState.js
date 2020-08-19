import React, { createContext, useReducer } from "react";
import AppReducer, { ACTIONS } from "./AppReducer.js";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch: dispatch,
        ACTIONS: ACTIONS,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
