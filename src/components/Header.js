import React from "react";
import SearchBar from "../features/searchBar/SearchBar";

export default function Header() {
    return (
        <div title='header'>
            <header>
                <h1>
                    <a href="/"><span id="logo1">Reddit</span><span id="logo2">CREEPER</span></a>
                </h1>
                <SearchBar />
            </header>
        </div>
    );
}