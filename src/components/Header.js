import React from "react";
import SearchBar from "../features/searchBar/SearchBar";

export default function Header() {
    return (
        <div title='header'>
            <header>
                <h1>
                    <span id="logo1">Reddit</span><span id="logo2">CREEPER</span>
                </h1>
                <SearchBar />
            </header>
        </div>
    );
}