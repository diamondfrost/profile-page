import React, { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import GlobalContext from "@config/GlobalContext";

function ThemeButton () {
    const { theme, toggleTheme } = useContext(GlobalContext);

    return (
        <div className="theme-button" onClick={toggleTheme}>
            {
                theme === 'dark'
                    ? <MdLightMode className="theme-icon" />
                    : <MdDarkMode className="theme-icon" />
            }
        </div>
    );
};

export default ThemeButton;