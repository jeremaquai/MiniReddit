import React from "react";
import { useSelector } from "react-redux";
import { selectLinks } from "../features/navBar/navSlice";
import { getSubredditPosts, getSubreddits } from "../utils/Reddit";

export default function Featured() {

    const links = useSelector(selectLinks);
     console.log(links);
    
    // Set URL variable for use in fetch/Thunk function
    const URL = links[1].url;
    console.log(URL);

    const posts = getSubredditPosts(`/r${URL}`);
    console.log(posts);

    

    return (
        <div>
            <h1>Featured</h1>
        </div>
    );
}