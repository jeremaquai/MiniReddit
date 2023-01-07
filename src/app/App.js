import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
 } from "react-router-dom";
 import ROUTES from "./routes";

 export default function App() {
    return (
        <Router>
            <div className="navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to={ROUTES.featuredRoute()} activeClassName='active'>
                            Featured
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </Router>
    );
 }

 
