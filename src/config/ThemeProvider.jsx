import React, { useEffect, useState } from "react";

import GlobalContext from "@config/GlobalContext";

function ThemeProvider(props) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    useEffect(() => {
        (theme === 'light')
            ? document.querySelector('body').setAttribute('theme-mode', 'light')
            : document.querySelector('body').setAttribute('theme-mode', 'dark');
    }, [theme]);
    return (
        <GlobalContext.Provider
            value= {{
                theme,
                toggleTheme,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default ThemeProvider;