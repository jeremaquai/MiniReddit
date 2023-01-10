import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
 } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import { selectActiveSubreddit } from "../features/subreddits/subredditsSlice";
import logo from '../../src/logo.svg';
import Subreddits from "../features/subreddits/Subreddits";

const redditLogo = logo;
 export default function App() {

    const activeSub = useSelector(selectActiveSubreddit);
    console.log(activeSub);

    return (
        <div title='app'>
            <Router>
                <Header />
                <main title="mainPage" className="mainPage">
                    <Switch>
                        <Route exact path='/' >
                            <Home />
                        </Route>
                    </Switch>

                    <Subreddits  />
                </main>
                <Footer />
            </Router>
        </div>
    );
 }

 
