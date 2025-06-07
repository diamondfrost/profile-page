import React from "react";

const GlobalContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export default GlobalContext;