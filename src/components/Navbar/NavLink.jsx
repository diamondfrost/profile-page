import React from "react";
import { NavLink as Link } from "react-router";

function NavLink({ routeTo, labelText }) {
    return(
        <Link className="nav-link" to={routeTo}>
            {labelText}
        </Link>
    );
};

export default NavLink;