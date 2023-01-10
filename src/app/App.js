import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
 } from "react-router-dom";
import ROUTES from "./routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";

 export default function App() {
    return (
        <div title='app'>
            <Router>
                <Header />
                <div title="mainPage" className="mainPage">
                    <Switch>
                        <Route exact path='/' >
                            <Home />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
 }

 
