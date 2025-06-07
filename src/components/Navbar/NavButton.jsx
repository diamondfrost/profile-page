import React from "react";
import { NavLink as Link } from "react-router";

function NavButton({ routeTo, labelText }) {
    return(
        <Link className="nav-button-link" to={routeTo}>
            {labelText}
        </Link>
    );
};

export default NavButton