import React from "react";
import { FaBars } from 'react-icons/fa';
import NavLink from '@components/Navbar/NavLink';
import NavButton from "@components/Navbar/NavButton";
import '@components/Navbar/Navbar.css';
import ThemeButton from "@components/ThemeButton/ThemeButton";

function Navbar({ routes }) {
    return(
        <nav className="navbar-container">
            <FaBars className="bars-icon" />
            <div className="nav-menu">
                {routes.map((link) => (
                    (link.navType === 'navlink') &&
                        <NavLink
                            routeTo={link.path}
                            labelText={link.label}
                            key={link.id}
                        />
                ))}
            </div>
            <nav className="nav-button-container">
                <ThemeButton />
                {routes.map((link) => (
                    (link.navType === 'navbutton') &&
                        <NavButton
                            routeTo={link.path}
                            labelText={link.label}
                            key={link.id}
                        />
                ))}
            </nav>
        </nav>
    );
}

export default Navbar;