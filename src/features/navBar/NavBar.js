import { NavLink } from "react-router-dom";
import React from "react";


export default function NavBar(props) {
    const {ROUTES} = props;
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.featuredRoute()} activeClassName='active'>
                        Featured
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}