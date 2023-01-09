import React from "react";
import { useSelector } from "react-redux";
import { selectLinks } from "../features/navBar/navSlice";

export default function Featured() {

    const links = useSelector(selectLinks);
    // console.log(links);
    
    // Set URL variable for use in fetch/Thunk function
    const URL = links[0].url;
    // console.log(URL);


    return (
        <div>
            <h1>Featured</h1>
        </div>
    );
}