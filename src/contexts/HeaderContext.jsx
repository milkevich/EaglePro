import React, { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  return (
    <HeaderContext.Provider value={{ position, setPosition }}>
      {children}
    </HeaderContext.Provider>
  );
};
