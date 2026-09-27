import React from "react";

const GlobalContext = React.createContext({
    theme: 'dark',
    toggleTheme: () => {},
});

export default GlobalContext;
