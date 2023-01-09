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
import NavBar from "../features/navBar/NavBar";
import Featured from "../pages/Featured";
import SearchResults from "../pages/SearchResults";

 export default function App() {
    return (
        <div title='app'>
            <Router>
                <Header />
                <NavBar
                    ROUTES={ROUTES} 
                />
                <div title="mainPage" className="mainPage">
                    <Switch>
                        <Route exact path='/featured' >
                            <Featured />
                        </Route>
                        <Route path='/searchresults'>
                            <SearchResults />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
 }

 
