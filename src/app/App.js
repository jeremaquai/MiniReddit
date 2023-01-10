import React, { useEffect } from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
 } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../features/posts/Posts";
import Home from "../pages/Home";
import { selectActiveSubreddit } from "../features/subreddits/subredditsSlice";
import logo from '../../src/logo.svg';
import Subreddits from "../features/subreddits/Subreddits";
import { getSubredditPosts } from "../utils/Reddit";
import { changePosts } from "../features/posts/postsSlice";

const redditLogo = logo;


export default function App() {

    const activeSub = useSelector(selectActiveSubreddit);
    // console.log(activeSub);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const respose = await getSubredditPosts(activeSub);
            dispatch(changePosts(respose));
        }
        fetchData();
    }, [activeSub]);

    // useEffect(() => getSubredditPosts(activeSub).then(response => {
    //     dispatch(changePosts(response));
    // }), [activeSub]);

    return (
        <div title='app'>
            <Router>
                <Header />
                <main title="mainPage" className="mainpage">
                    <div className="mainPage">
                    <Switch>
                        <Route exact path='/' >
                            <Posts />
                        </Route>
                    </Switch>
                    </div>
                </main>
                <Footer />
            </Router>
        </div>
    );
 }

 
