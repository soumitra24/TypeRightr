import React, { createContext, useContext, useState } from 'react';

// Create the context
const UnameContext = createContext();

// Create a provider component
export const UnameProvider = ({ children }) => {
    const [uname, setUname] = useState(null);
    
    return (
        <UnameContext.Provider value={{ uname, setUname }}>
            {children}
        </UnameContext.Provider>
    );
};

// Create a custom hook to use the UnameContext
export const useUname = () => {
    return useContext(UnameContext);
};
