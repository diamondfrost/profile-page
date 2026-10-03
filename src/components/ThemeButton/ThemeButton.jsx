import React, { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import GlobalContext from "@config/GlobalContext";
import '@components/ThemeButton/ThemeButton.css';

function ThemeButton () {
    const { theme, toggleTheme } = useContext(GlobalContext);
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    return (
        <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
        >
            {
                theme === 'dark'
                    ? <MdLightMode className="theme-icon" />
                    : <MdDarkMode className="theme-icon" />
            }
        </button>
    );
};

export default ThemeButton;
