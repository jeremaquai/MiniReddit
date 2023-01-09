import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { addSearchTerm } from "./searchSlice";

export default function SearchBar() {

    const history = useHistory();

    const searchInputRef = useRef();

    const onSearchHandler = (e) => {
        e.preventDefault();

        console.log(searchInputRef.current.value);
        addSearchTerm(searchInputRef.current.value);
        history.push('/searchResults')
    };

    const onChange = (e) => {
        addSearchTerm(e.target);
    }

    return (
        <div title="searchBar" className="searchBar">
            <form onSubmit={onSearchHandler} className='search-form' >
                <input
                    id="searchTerm"
                    type='text'
                    onChange={onChange}
                    placeholder='Search'
                    ref={searchInputRef}

                />
                <button>Search</button>
            </form>
        </div>
    );
};