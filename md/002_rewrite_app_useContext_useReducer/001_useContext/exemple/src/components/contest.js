//context.js
import React, { createContext } from 'react';

export const ShopContext = createContext();

const value = {
  example: 'hello from context',
};

export const ContextProvider = ({ children }) => {
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
