import React from "react";

import '@components/header/Header.css';

function Header({ title }) {
    return (
        <div className="header-container">
            <h1 className="header-title">{title}</h1>
        </div>
    );
}

export default Header;