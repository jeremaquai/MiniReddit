import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../features/searchBar/SearchBar";
import { useDispatch } from "react-redux";
import { changeActiveSubreddit } from "../features/subreddits/subredditsSlice";


export default function Header() {

    const dispatch = useDispatch();

    const onTitleClicked = () => {
        dispatch(changeActiveSubreddit('/r/Home'));
    }
    return (
        <div title='header'>
            <header>
                <Link to='/'>
                    <h1 onClick={onTitleClicked}>
                        <span id="logo1">Reddit</span><span id="logo2">CREEPER</span>
                    </h1>
                </Link>
                <SearchBar />
            </header>
        </div>
    );
}