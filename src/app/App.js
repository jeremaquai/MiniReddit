import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
 } from "react-router-dom";
 import ROUTES from "./routes";
 import Header from "../components/Header";
 import Footer from "../components/Footer";

 export default function App() {
    return (
        <div title='app'>
            <Router>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <NavLink to={ROUTES.featuredRoute()} activeClassName='active'>
                                Featured
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div title="mainPage" className="mainPage">

                </div>
                <Footer />
            </Router>
        </div>
    );
 }

 
