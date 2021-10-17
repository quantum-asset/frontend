import React, { createContext, useContext, useReducer } from "react";

export const IsOnlineContext = createContext();

export const IsOnlineProvider = ({ initialState, children }) => (
  <IsOnlineContext.Provider value={initialState}>
    {children}
  </IsOnlineContext.Provider>
);
export const useIsOnlineValue = () => useContext(IsOnlineContext);
