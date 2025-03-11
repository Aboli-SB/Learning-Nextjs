"use client";
import React, { createContext, useContext, useState } from "react";

// Create the context
const CountContext = createContext();

// Custom hook to use the context
export const useCount = () => useContext(CountContext);

// Context provider component
export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
