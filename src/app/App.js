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
import NavBar from "../features/navBar/NavBar";

 export default function App() {
    return (
        <div title='app'>
            <Router>
                <Header />
                <NavBar
                    ROUTES={ROUTES} 
                />
                <div title="mainPage" className="mainPage">

                </div>
                <Footer />
            </Router>
        </div>
    );
 }

 
