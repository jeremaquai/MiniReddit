import React from "react";

export default function SearchBar() {
    return (
        <div title="searchBar" className="searchBar">
            <input
                id="searchTerm"
                type='text'

            />
            <button>Search</button>
        </div>
    );
};