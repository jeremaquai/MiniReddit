// Imports
import { createSlice, current } from "@reduxjs/toolkit";
import { NAVLINKS } from "../../data/navLinks";

// Create initialState for navSlice
const initialState = {links: NAVLINKS };

// Create navSlice
const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        logNavSlice(state) {
            console.log(current(state));
        },
        addLink(state, action) {
            state.links.push(action.payload);
        },
    },
});

export const { logNavSlice, addLink } = navSlice.actions;

export const selectLinks = (state) => state.nav.links;

export default navSlice.reducer;