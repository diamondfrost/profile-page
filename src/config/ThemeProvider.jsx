import React, { useEffect, useState } from "react";

import GlobalContext from "@config/GlobalContext";

const STORAGE_KEY = 'theme-mode';

function getInitialTheme() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
    } catch {
        // storage unavailable; fall through to the OS preference
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function ThemeProvider(props) {
    const [theme, setTheme] = useState(getInitialTheme);
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    useEffect(() => {
        document.body.setAttribute('theme-mode', theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // ignore
        }
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
