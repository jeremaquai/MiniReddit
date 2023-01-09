import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectLinks } from "./navSlice";

export default function NavBar() {
    // use the useSelector to select the state from the nav slice using the selectLinks selector
    const links = useSelector(selectLinks);
    console.log(links);
    
    
    return (
        <nav>
            <ul>
                {
                links.map((link) => {
                   return ( 
                        <NavLink 
                            key={link.name}
                            to={link.route}
                            activeClassName='active'>
                            {link.name}
                        </NavLink>
                    );
                })
                
            }
            </ul>
        </nav>
    );
}