// Imports
import { createSlice, current } from "@reduxjs/toolkit";
import { NAVLINKS } from "../../data/navLinks";

// Create initialState for navSlice
const initialState = {links: [
    {
        name: 'Featured',
        id: 'Featured'
    },
    {
        name: 'SquaredCircle',
        id: 'SquaredCircle',
    },
    {
        name: 'Mildlyinfuriating',
        id: 'Mildlyinfuriating'
    }
]};

// Create navSlice
const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        logNavSlice(state) {
            console.log(state);
        },
        addLink(state, action) {
            state.links.push(action.payload);
        },
    },
});

export const { logNavSlice, addLink } = navSlice.actions;

export const selectLinks = (state) => state.nav.links;

export default navSlice.reducer;